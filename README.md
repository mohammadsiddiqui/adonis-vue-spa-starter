# Adonis + Vue CLI application

This is the boilerplate for creating an API server in AdonisJs and VueJS CLI tool it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Server Setup

Used the adonis --api-only command to install the api based application

- use adonis serve --dev to run the development mode

## Client Setup

Vue cli application with some tweak configuration in vue.config.json

- use npm run dev to run the development mode of vue and it will build and store in public folder where it is served from adonis as static asset

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
