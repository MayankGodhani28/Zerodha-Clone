const { Schema } = require("mongoose");

const SignupSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports={SignupSchema}