const Joke = require("../models/jokes.model");

module.exports.getAllJokes = (req, res) => {
  Joke.find()
    .then((allJokes) => {
      res.json({ jokes: allJokes });
    })
    .catch((err) => {
      res.json({ message: "There was an error:", error: err });
    });
};

module.exports.getOneJoke = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then((oneJoke) => {
      res.json({ joke: oneJoke });
    })
    .catch((err) => {
      res.json({ message: "There was an error:", error: err });
    });
};

module.exports.createJoke = (req, res) => {
  Joke.create(req.body)
    .then((newJoke) => {
      res.json({ joke: newJoke });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

module.exports.updateJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedJoke) => {
      res.json({ joke: updatedJoke });
    })
    .catch((err) => {
      res.json({
        message: "Something went Terribly Wrong (update)",
        error: err,
      });
    });
};

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then( deletedJoke => {
            res.json({joke: deletedJoke})
        })
        .catch(err => {
            res.json({message: "Something went wrong (delete)", error: err})
        })
}
