const mongoose = require("mongoose");
const Categories = require('../models/Category.model.js');

const DB_NAME = 'mobel';
 
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const categorias = [
 {categoryName : "Sillas"},
 {categoryName : "Escritorios"},
 {categoryName : "Repisas"},
 {categoryName : "Archiveros"}, 
]

Categories.create(categorias)
  .then(categorias => {
    console.log(`Creaste ${categorias.length} productos`);
    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating rituals from the DB: ${err}`));