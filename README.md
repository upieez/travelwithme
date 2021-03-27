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
- [REST Countris](https://restcountries.eu/) - Displaying relevant information about the country
