const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  Image: { type: String, required: true },
});

module.exports = mongoose.model("image", userSchema);
