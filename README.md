# 99Tech Code Challenge - Backend Problem

## Problem 5: A Crude Server
### Installation and Settings

1. This project is built in with docker-compose. Hence, you can start the docker directly to start the postgresql db together.

``` bash
$ docker compose build --no-cache
```

2. Start the container

``` bash
$ docker compose up -d
```

3. Run migration

``` bash
$ npm run sequelize -- db:migrate
```

### Extra Scripts

1. Create new migration:

Script below is used to create a "create-guest" migration.

``` bash
$ npx sequelize-cli migration:generate --name create-guest
```

2. Create new seeder:

Script below is used to create a "demo-guest" seeder.

``` bash
$ npx sequelize-cli seed:generate --name demo-guest
```

### Usage:
1. Swagger Document: To Access Swagger document and review api document, access to: http://localhost:3000/api-docs

## Problem 4: Three ways to sum to n

- [Document](/problem4/README.md)

```
$ npm run problem-4
```

## Problem 6: Architecture
