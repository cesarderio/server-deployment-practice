# Lab Class 01

## Project: Server deployment practice

### Author: Raphael Chookagian

### Problem Domain

Create a web server and utilize CI and CD and get practice in the general process of building and deploying servers, and prepping work for grading

### Links and Resources

- [ci,cd](https://github.com/cesarderio/server-deployment-practice)
- [prod deployment](https://server-deployment-practice.onrender.com/)
- [dev deployment](https://server-dev-6rxb.onrender.com/)

### Setup

### `.env` requirements

see `.env.sample`

i.e.

- `PORT`
- `DATABASE_URL` - URL to the running Postgres instance/db

#### How to initialize/run your application (where applicable)

- nodemon

#### Features / Routes

- Feature One: Details of feature
- GET : `/` - specific route to hit
- GET : `bad` - specific route to hit

#### Tests

- How do you run tests?
  - npm test
- Any tests of note?
  - handles root path
  - handles errors
  handles invalid requests

#### UML

Link to an image of the UML for your application and response to events

[UML](./Assets/Uml.png)
