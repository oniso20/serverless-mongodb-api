# Serverless Boilerplate

This project is set up to make it easy to start new projects with lambda functions and an easy-to-configure MongoDB API

## Development

### Setup

- Ensure AWS credentials are installed locally
- Run `npm install`
- Open `serverless.yml` and change the `service` property to match the name of your project

### Deployment

The project deploys an API lambda function which serves any API route attached in src/api/v1/index.js. The only dependency outside of AWS is MongoDB, which you will need a connection string for (see Environment).

The default stage is `dev`.

`npm run deploy` will deploy the project to a development stage within AWS.

`npm run deploy -s prod` will deploy the services to a new stage called `prod`.

### Environment

Add new environment variables by configuring them within AWS Parameter Store (within AWS Systems Manager). Add environment variables to the `process.env` by adding parameters to the `provider.environment` property in `serverless.yml`. The below example will pull an encrypted password out of parameter store and give it as `process.env.DB_PASSWORD`.

```yml
provider:
  ...
  environment:
    DB_PASSWORD: ${ssm:${self:provider.stage}-db-pass}
```

### Running functions

Run locally: `npx invoke local -f example`

Run in the cloud: `npx invoke -f example`

Run in the cloud for prod stage: `npx invoke -f example -s prod`

### Database

Set up a MongoDB database (either locally or via MongoDB Atlas) and provide the connection string in the `DB_CONNECTION_STR` environment variable in `serverless.yml`.

### Running API

Run the api locally with `npm start`

### Adding to the API

Add new models to the API by:

Defining your model is the bulk of the work when using this project. Simply:

- Create a new model file in `src/model`
- Import that model to `src/model/index.js` as seen with the other models
- Import the model in `src/api/v1/index.js` and attach it to the express router, as seen with the other models

The models are defined with the npm package mongoose. Check documentation on mongoose to understand how to define new schemas.

### Altering API behavior

Each model has the same behavior in the API, making it easy to know how each model will work. You can add new API behavior (such as new methods or new automated behaviors, like querying capabilities) in the `src/api/v1/attach-model` file.

## Using the API

The API supports GET, PUT, POST, and DELETE requests for any document by an authorized user. Validation is done via the mongoose models in `src/model`.
