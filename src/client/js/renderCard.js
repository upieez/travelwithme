function renderCard(countryName, weather, picture, flag) {
  return `
  <h2> You have chosen ${countryName} </h2>
  <div class="card-container">
    <div>
      <img class="card-image" src="${picture.hits[0].webformatURL}" />
    </div>
    <div class="card-content">
      <p> The weather is currently ${weather.data[0].temp}&#8451; in ${countryName}! </p>
      <div class="weather">
        <div>
          <img src="icons/${weather.data[0].weather.icon}.png" alt="image of the weather">
        </div>
        <div>
          <p>${weather.data[0].weather.description}</p>
        </div>
      </div>
    </div>
  </div>`;
}

export { renderCard };
