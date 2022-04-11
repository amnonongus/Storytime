const mongoose = require('mongoose');

// replace your database connection string here

mongoose.connect('mongodb://localhost/storytime', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});







// mongoose.connect(process.env.DATABASE_URL,{ 
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true
// });

const db = mongoose.connection;

// database connection event
db.on('connected', function () {
  console.log(`Mongoose connected to: ${db.host}:${db.port}`);
});