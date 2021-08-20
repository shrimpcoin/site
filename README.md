# shrimpco.in
The source code for https://shrimpco.in and https://prawn.money.

This project uses [Rocket](https://github.com/SergioBenitez/Rocket) and [React](https://github.com/facebook/react).

## Setting up the environment
This project prefers ``yarn`` over ``npm``.

The server requires a nightly build of rust, which can be installed with ``rustup default nightly``.

## Running in development
To run in development, simply run:

```yarn start```

## Running in production

To run in production, run the following:

```
yarn build
yarn serve
```

This will build the frontend with Webpack and compile the backend respectively.

## Testing

All testing can be done with

```yarn test```

As the server is submoduled, it is already tested before pushed to in its own repo.
