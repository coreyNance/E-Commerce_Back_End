const express = require('express');
const routes = require('./routes');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});






// GIVEN a functional Express.js API
// WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
// THEN I am able to connect to a database using Sequelize
// WHEN I enter schema and seed commands
// THEN a development database is created and is seeded with test data
// WHEN I enter the command to invoke the application
// THEN my server is started and the Sequelize models are synced to the MySQL database
// WHEN I open API GET routes in Insomnia Core for categories, products, or tags
// THEN the data for each of these routes is displayed in a formatted JSON
// WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
// THEN I am able to successfully create, update, and delete data in my database



// You'll need to execute association methods on your Sequelize models to create the following relationships between them:

// * `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.

// * `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.

// > **Hint:** Make sure you set up foreign key relationships that match the column we created in the respective models.

// ### Fill Out the API Routes to Perform RESTful CRUD Operations

// Fill out the unfinished routes in `product-routes.js`, `tag-routes.js`, and `category-routes.js` to perform create, read, update, and delete operations using your Sequelize models.

// Note that the functionality for creating the many-to-many relationship for products has already been completed for you.

// > **Hint**: Be sure to look at the mini-project code for syntax help and use your model's column definitions to figure out what `req.body` will be for POST and PUT routes!

// ### Seed the Database

// After creating the models and routes, run `npm run seed` to seed data to your database so that you can test your routes.

// ### Sync Sequelize to the Database on Server Start

// Create the code needed in `server.js` to sync the Sequelize models to the MySQL database on server start.

// ## Grading Requirements

// This homework is graded based on the following criteria: 

// ### Deliverables: 10%

// * The GitHub repository containing your application code.

// ### Walkthrough Video: 37%

// * A walkthrough video that demonstrates the functionality of the e-commerce back end must be submitted, and a link to the video should be included in your readme file.

// * The walkthrough video must show all of the technical acceptance criteria being met.

// * The walkthrough video must demonstrate how to create the schema from the MySQL shell.

// * The walkthrough video must demonstrate how to seed the database from the command line.

// * The walkthrough video must demonstrate how to start the application’s server.

// * The walkthrough video must demonstrate GET routes for all categories, all products, and all tags being tested in Insomnia Core.

// * The walkthrough video must demonstrate GET routes for a single category, a single product, and a single tag being tested in Insomnia Core.

// * The walkthrough video must demonstrate POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia Core.


// * Satisfies all of the preceding acceptance criteria plus the following:

//   * Connects to a MySQL database using the [MySQL2](https://www.npmjs.com/package/mysql) and [Sequelize](https://www.npmjs.com/package/sequelize) packages.

//   * Stores sensitive data, like a user’s MySQL username, password, and database name, using environment variables through the [dotenv](https://www.npmjs.com/package/dotenv) package.

//   * Syncs Sequelize models to a MySQL database on the server start.

//   * Includes column definitions for all four models outlined in the homework instructions.

  // * Includes model associations outlined in the homework instructions.