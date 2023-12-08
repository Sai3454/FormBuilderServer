const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const formsSchema = new Schema({
  title: String,
  questions: [],
});

const Form = model('forms', formsSchema);
module.exports =  Form;