async function handleSubmit(event) {
  event.preventDefault();

  const countryName = document.getElementById("country-search").value;
  const searchBox = document.getElementById("country-search");
  const dateBox = document.getElementById("departure");
  const errorMsg = document.querySelector(".error-message");

  document.querySelector(
    ".search-result"
  ).innerHTML = ` <h2> You have chosen ${countryName} </h2> <p>Loading...</p>`;

  try {
    const geoNamesValues = await fetchGeoNamesAPI(countryName);

    const latitude = geoNamesValues.geonames[0].lat;
    const longitude = geoNamesValues.geonames[0].lng;

    const weather = await fetchWeatherbitAPI(latitude, longitude);
    const picture = await fetchPixabayAPI(countryName);
    const flag = await fetchRESTCountriesAPI(countryName);

    const renderCard = Client.renderCard(countryName, weather, picture, flag);

    document.querySelector(".search-result").innerHTML = `${renderCard}`;

    const data = {
      countryName: countryName,
      weather: weather.data[0],
      picture: picture.hits[0].webformatURL,
      flag: flag,
    };

    await saveAllData(data);
    searchBox.style.borderColor = "green";
  } catch (error) {
    searchBox.style.borderColor = "red";
    errorMsg.textContent = "Not Found";
    errorMsg.style.color = "red";
    document.querySelector(
      ".search-result"
    ).innerHTML = ` <h2> You have chosen ${countryName} </h2> <p> Sorry this destination is currently unavailable :( </p>`;
    console.error("Error: ", error);
  } finally {
    searchBox.value = "";
    dateBox.value = "";
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
  return getCountryFlag[0].flag;
}

async function saveAllData(data) {
  console.log("hmmm");
  const saveData = await fetch("/save-trip", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
  const hey = await saveData.json();
  console.log("123", hey);
  return hey;
}

export { handleSubmit };
