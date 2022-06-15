const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

const Joke = mongoose.model("joke", JokesSchema);

module.exports = Joke;
