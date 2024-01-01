**Home App**

Home App is the platform of a company, Home, that rents to a selected group of tenants.
To register with Home and start booking apartments, users need to fill in a multi-page application form.
This project is a proposal for the general design and layout of the platform and the multi-page application form.

The project uses the following tech stack: on the front-end, it employs React, TypeScript for enhanced type safety, and CSS for styling.The back-end is powered by Node.js and an Express Server, while data is stored in a MongoDB database. To make the project database available to others for cloning and testing, the project's database is hosted on MongoDB's free tier, offering a cloud-based solution. The password was generated specifically for this project and those who would be using it, but please make sure not to submit any sensitive data. This was done to avoid the need for MongoDB Atlas user account creations, which would otherwise be required of every single user of this database. 

Navigation is handled through the React-Router module.

**Getting Started**

These instructions will guide you on how to set up and run the project locally.

**Prerequisites**

Make sure you have the following installed on your machine:

Node.js

npm

**Installing Dependencies**

Open a terminal in the project directory and run:

npm install

**Running the App**

First, connect to the database. To do this, you need to open backend/index.js in a code editor and update the uri. 
The uri string has a "< password >" placeholder - this needs to be deleted and replaced with the actual password that I shared.

Once that is updated and saved, in the command line, navigate to the app

cd home-app

and then run the following command:

node backend/index.js

With this running in the background, open a new tab. Now start the development server, and run:

npm start

Open your browser and visit http://localhost:3000 to view the app.

**Running Tests**

To execute tests, run:
npm test

This will run the test suite and provide feedback on the test results.

**Built With**

React - JavaScript library for building user interfaces.

TypeScript - A typed superset of JavaScript that compiles to plain JavaScript.

Jest - A delightful JavaScript Testing Framework.

React Testing Library - A library for testing React components.

react-router-dom - Declarative routing for React.js.

MongoDB - NoSQL database for storing application data.

Mongoose - Elegant MongoDB object modeling for Node.js.

Express - Web application framework for Node.js.
