const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});


function database_start() {
  connection.connect(function (err) {
    if (err) {
      console.log("There was a connection error.");
      return;
    }
    console.log("Successful connection");
  })
}

exports.database_start = database_start;
