const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const submissionSchema = new Schema({
    id: String,
    formId: String,
    answers: [],
});

const documents = model('documents', submissionSchema);
module.exports =  documents;