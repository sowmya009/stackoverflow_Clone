const mongoose = require("mongoose");

const url =
  'mongodb+srv://sowmygorripati:Stackoverflowlogin1@stackoverflow.jho74he.mongodb.net/?retryWrites=true&w=majority';
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};