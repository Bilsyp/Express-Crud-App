const mongoose = require("mongoose");
const colors = require("colors");

const connection = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/wpu", {
    useNewUrlParser: true, //Penting
    useUnifiedTopology: true, // Penting
  });

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("We're connected to the database!".blue.underline);
  });
};

module.exports = { connection };
