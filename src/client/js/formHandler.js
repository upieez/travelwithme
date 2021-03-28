async function handleSubmit(event) {
  event.preventDefault();
  console.log("Hey you clicked me!");

  const countryName = document.getElementById("country-search").value;

  try {
    const geoNamesValues = await fetchGeoNamesAPI(countryName);

    const latitude = geoNamesValues.geonames[0].lat;
    const longitude = geoNamesValues.geonames[0].lng;

    const weather = await fetchWeatherbitAPI(latitude, longitude);
    const picture = await fetchPixabayAPI(countryName);
    const flag = await fetchRESTCountriesAPI(countryName);

    document.querySelector(".search-result").innerHTML = `
    <div>
    <h2> You have chosen ${countryName} </h2>
    <img src="${picture.hits[0].webformatURL}" />
    <img src="${flag}" style="height:54px;width:96px;" />
    <p> The weather is currently ${weather.data[0].temp} in ${countryName}! </p>
    <img src="icons/${weather.data[0].weather.icon}.png" alt="">
    <p> The weather is currently ${weather.data[0].weather.icon} in ${countryName}! </p>
    </div>`;

    console.log("weather", weather);
  } catch (error) {
    console.log("Error: ", error);
  }
}

async function fetchGeoNamesAPI(country) {
  const getGeoNames = await fetch("/api/geonames", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ country }),
  });
  return await getGeoNames.json();
}

async function fetchWeatherbitAPI(latitude, longitude) {
  const getWeatherbit = await fetch("/api/weatherbit", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ latitude, longitude }),
  });
  return await getWeatherbit.json();
}

async function fetchPixabayAPI(country) {
  const getWeatherbit = await fetch("/api/pixabay", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ country }),
  });
  return await getWeatherbit.json();
}

async function fetchRESTCountriesAPI(country) {
  const getCountryFlag = await (
    await fetch(`https://restcountries.eu/rest/v2/name/${country}`)
  ).json();
  console.log("getCountryFlag", getCountryFlag);
  return getCountryFlag[0].flag;
}

export { handleSubmit };
