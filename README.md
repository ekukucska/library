# Library App

## Introduction

- Capstone project for 'Web Technologies', 1st Semester, 2nd Year, Faculty of Computer Science and Applied Informatics, Tibiscus University, Timisoara, January 2024

- Web app for a library, that allows users to manage records of books and authors.

## Features / Requirements

REST API application for a library. The application supports CRUD operations on 'authors' and 'books' list.

The requirements for the application are as follows:

- Implement all CRUD operations for authors;
- Implement all CRUD operations for books;
- The application must work with a MongoDB database using Mongoose as an ORM;
- Any read operation will fetch the information directly from the database;
- Any write operation (create, update, delete) will update the information in the database;

## Getting Started

IN order to start this application, follow these steps:

1. Install the necessary dependencies: `npm install`
2. Start the application: `npm start`
3. Go to: http://localhost:3001/
4. Test the API routes with Postman or Thunder Client (on VS Code)

## Technologies

Technologies used in the application:

- body-parser - https://www.npmjs.com/package/body-parser
- cors - https://www.npmjs.com/package/cors
- dotenv - https://www.npmjs.com/package/dotenv
- Express.js - https://expressjs.com/
- mongoose - https://mongoosejs.com/
- Node.js - https://nodejs.org/en
- nodemon - https://www.npmjs.com/package/nodemon

Technologies used concurrently with the application:

- MongoDB (Server) - https://www.mongodb.com/
- MongoDB Compass - https://www.mongodb.com/products/tools/compass
