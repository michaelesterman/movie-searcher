# Movie Searcher

## Introduction

A very simple movie browser for OMDB.

## Getting Started

Run Redis (you need to have Docker installed):

```sh
docker compose up -d
```

Install dependencies:

```sh
npm install
```

Run frontend & backend:

```sh
npm run dev
```

Application is available on [http://localhost:8080](http://localhost:8080)

You can visit RedisInsights on [http://localhost:8081](http://localhost:8081)

## Known issues

- Movie details screen is not finished.
- No pagination yet, only first few results available in the client.
- Not much of a mobile friendliness.
- PM2 start script (`npm start`) was not tested.

## What can be improved

- Add `x-api-key` to the backend and frontend.
- Add type sharing between frontend and backend.
- React 18 does its thing with firing `useEffect` [twice](https://beta.reactjs.org/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development).
