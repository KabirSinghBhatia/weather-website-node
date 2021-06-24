# Weather Website Node

It is a web application / website which provides weather information of a location based on user's search query.

## Installation

Install the node modules using npm in the application root.

```bash
npm install
```

### Development Environment

Create a `.env` file in application root from `example.env` and add API access keys for **local / development** environment

```bash
cp example.env .env
```

### Production Environment

No need to create `.env` file. Store the API keys on the **host / production** environment as per the `.env` config. variables.

## Usage

Run the application using the following command for **Production** environment.

```bash
npm run start
```

Run the application **locally** using the following command for **Development** environment.

```bash
npm run dev
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
