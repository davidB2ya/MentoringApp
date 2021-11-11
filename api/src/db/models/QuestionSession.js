const { Schema, model } = require("mongoose");

const QuestionSchema = new Schema({
    idSesion: {
        type: Number,
    },

    idStudient: {
        type: Number,
    },

    mentor: {
        type: String,
    },
});

QuestionSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id;
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});

const Question = model("Question", QuestionSchema);

Question.create({});

module.exports = Question;
