const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const movieSchema = new Schema(
  {
    title: String,
    director: String,
    stars: [String],
    showtimes: [String],
    image: String,
    description: String
  },
  {
    timestamps: true
  }
)

module.exports = model("Movie", movieSchema)

