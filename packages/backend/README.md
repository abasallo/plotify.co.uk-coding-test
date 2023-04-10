# plotify.co.uk-coding-test-backend

NodeJS + GraphQL w/ Apollo + Sequelize + SQLite

## Initial configuration

In the project directory, you must copy .env.example as .env a fill missing fields and/or modify already filled ones.

If CONNECTION_URL is omitted in .env, the server defaults to in-memory (SQLite) initialised with sample data.

In the project directory, you can run:

### `yarn`

To download dependencies into node_modules directory.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the project locally.

Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

Test with [Post Collection Export](./plotify.co.uk-coding-test.postman_collection.json).

### `yarn debug`

Runs the project locally in debugger mode.

Open [http://localhost:4000](http://localhost:3000) to view it in the browser.
Connect to [http://localhost:9229](http://localhost:9229) to debug.

Test with [Post Collection Export](./plotify.co.uk-coding-test.postman_collection.json).

### `yarn build`

Builds the app for production to the `build` folder.

### `yarn test`

Runs all tests.
