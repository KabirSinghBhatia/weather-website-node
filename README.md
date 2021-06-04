# Weather Website Node

It is a web application/website which provides weather information of a location based on user's search query.

## Installation

Install the node modules using npm in the application root.

```bash
npm install
```

### Create a `.env` file in application root from `example.env` and add API access keys

```bash
cp example.env .env
```

### Production Environment

No need to create `.env` file for production environment. `DotEnv` package is used as only Dev Dependency. It is not required for production environment. Store the API keys on the host environment as per the `.env` config vars.

## Usage

Just run the application using npm in the application root.

```bash
npm run start
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
