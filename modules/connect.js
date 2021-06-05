const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/stc", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("database is connected"));
