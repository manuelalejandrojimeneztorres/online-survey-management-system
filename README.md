# Full Stack Online Survey Management System with Ionic + Express + Sequelize + MySQL

It's just that: A full stack online survey management system with Ionic + Express + Sequelize + MySQL

## Getting Started

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes. See deployment
for notes on deploying the project on a live system.

### Prerequisites

You need a working environment with:

- [Git](https://git-scm.com) - You can install it from https://git-scm.com/downloads.
- [MySQL](https://www.mysql.com) - You can install it from https://www.mysql.com/downloads/.
- [Node.js](https://nodejs.org) - Install node.js from https://nodejs.org/es/download/. It's advisable to install the LTS version.

## General Installation instructions

The best option to start with this project is cloning it in your PC:

```
git clone https://github.com/manuelalejandrojimeneztorres/online-survey-management-system.git
```

This project contains 2 different parts:

- Frontend
- Backend

You need a node.js working environment. The LTS is recommended: https://nodejs.org/es/

Once you have cloned the project install all dependencies.

```
cd online-survey-management-system/frontend
npm install

cd online-survey-management-system/backend
npm install
```

- For your backend part:

1. You need a online-survey-management-system/backend/db.config.js file with the data for the connection to your MySQL Server:

```
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "your_super_strong_secret_password",
  DB: "onlinesurveymanagementsystem",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
```

2. You need a mysql server working.

3. Create the mysql database, that in our case is "onlinesurveymanagementsystem".

Finally to start enjoying this project.

```
cd online-survey-management-system/backend
node app.js

cd online-survey-management-system/frontend
ionic serve
```

## Try it with Postman

You can access the comprehensive Online Survey Management System API documentation and test its endpoints at the link below:

- [Online Survey Management System API documentation](https://www.postman.com/online-survey-management-system-api-team/online-survey-management-system-api/documentation/z14xj72/online-survey-management-system-api?workspaceId=710b6d14-ac82-47b4-a84e-ead823583acd) - The official API documentation

Enjoy!!!

## Built With

- [Visual Studio Code](https://code.visualstudio.com/) - The Editor used in this project
- [Node.js](https://nodejs.org/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [sequelize](https://sequelize.org/) - Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.
- [express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [MySQL Workbench](https://www.mysql.com/products/workbench/) - MySQL Workbench is a unified visual tool for database architects, developers, and DBAs.
- [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

## Acknowledgments

- https://github.com/tcrurav. An outstanding mentor whose expertise and guidance were instrumental in making this project a reality.
- https://gist.github.com/PurpleBooth/109311bb0361f32d87a2. A very complete template for README.md files.
