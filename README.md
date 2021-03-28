# Travel With Me

## Getting Started

### Prerequisites

- Node v15.x.x
- API keys (refer to **APIs Used**)

### Development

1. `npm i`
2. populate your keys in `.env`
3. `npm run dev`
4. navigate to `http://localhost:8080`

### Production

1. `npm i`
2. populate your keys in `.env`
3. `npm run build`
4. `npm run start`
5. navigate to `http://localhost:<port>` (defaults to 8080)

## Libraries Used

- [express](https://expressjs.com/) - for the server
- [webpack](https://webpack.js.org/) - for asset mangement
- [babel](https://babeljs.io/) - for using newer ES syntax
- [jest](https://jestjs.io/) - for unit testing

## APIs Used

- [GeoNames](https://www.geonames.org/) - For getting the coordinates of a location
- [Weatherbit.io](https://www.weatherbit.io/api) - Getting updated weather of the location
- [Pixabay](https://pixabay.com/service/about/api/) - Getting relevant picture of the country
- [REST Countris](https://restcountries.eu/) - Displaying additional information about the country

## Improvements / Additional Features

- [ ] Add end date and display length of trip.
- [ ] Pull in an image for the country from Pixabay API when the entered location brings up no results (good for obscure localities).
- [ ] Allow user to add multiple destinations on the same trip.
- [ ] Lazy load when pulling in data
- [ ] Allow the user to add hotel and/or flight data.
- [x] Integrate the REST Countries API to pull in data for the country being visited.
- [ ] Allow the user to remove the trip.
- [ ] Use Local Storage to save the data so that when they close, then revisit the page, their information is still there.
- [ ] Instead of just pulling a single day forecast, pull the forecast for multiple days.
- [x] Incorporate icons into forecast.
- [ ] Allow user to Print their trip and/or export to PDF.
- [ ] Allow the user to add a todo list and/or packing list for their trip.
- [ ] Allow the user to add additional trips (this may take some heavy reworking, but is worth the challenge).
- [ ] Automatically sort additional trips by countdown.
- [ ] Move expired trips to bottom/have their style change so it’s clear it’s expired.
