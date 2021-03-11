const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI ||"mongodb:mongodb+srv://mobel:<mobelhack>@cluster0.zscvo.mongodb.net/mobel"
 
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));

