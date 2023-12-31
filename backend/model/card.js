const mongoose = require("mongoose");
const { Schema } = mongoose;

// Schema
const cardSchema = new Schema({
  author: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  download_url: {
    type: String,
    required: true,
  },
});

exports.CARD = mongoose.model("CARD", cardSchema);
