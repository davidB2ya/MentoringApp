const Question = require("../db/models/Question");
const SessionReport = require("../db/models/SessionReport");

// se crea una variable para definir el controlador de la ruta login
const SessionReportRouter = require("express").Router();

SessionReportRouter.get("/", async (request, response) => {
    const Question = await SessionReport.find({})
        .populate("idSession", { idSesion: 1 })
        .populate("idStudent", { iStudent: 1 });
    response.json(Question);
});

module.exports = Question;
