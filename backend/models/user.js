const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

//contains the schema of any user trying to signup or login

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

//uniqueValidator checks for the uniqueness of a particular email address
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
