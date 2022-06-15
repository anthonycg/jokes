const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Established connection to the DB"))
  .catch((err) =>
    console.log("Something went wrong when connecting to DB", err)
  );
