const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  Moviename: {
    type: String,
    required: true,
  },
  Platform: {
    type: String,
    required: true,
  },
  Genre: {
    type: String,
    required: true,
  },
  Link: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Movie", movieSchema);
