# Mini "JavaScript"bank

## Motivation

I put together this hands-on because I noticed students were struggling to see how JavaScript can work on the backend,
and that it's actually pretty similar to using Java.
It was nice to revisit some concepts from the bootcamp.

I didn't go too deep, the idea was to show them that even though the syntax is different, the concepts are the same.

## Description

This is a mini bank REST API based in the read javabank.
It has the same endpoints as the original one, but it is written in JavaScript and lacks some functionalities.
The idea is to implement this in a hands-on as a final showcase of the Bootcamp.

The last time I did this I only implemented the customer endpoints
and the objective was to connect this REST API to the "Javabank CRUD" frontend exercise.

Like this they're able to see the full stack in action and understand a little better how to use javascript in the backend.

## Endpoints

### Account

- GET /account
- GET /account/:id

### Customer

- GET /customers
- GET /customers/:id
- POST /customer
- PUT /customer/:id
- DELETE /customer/:id

## Technologies

- Node.js
- Express
- Nodemon
- Objection.js / Knex.js
- MySQL

## How to run in development mode

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`

## How to run in production mode

1. Clone the repository
2. Run `npm install`
3. Run `npm start`
