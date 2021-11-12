const Student = require('../db/models/Student')

// A variable is created to define the controller of the Student path
const StudentRouter = require('express').Router()

StudentRouter.get('/', async (request, response) => {
  const student = await Student.find({})
    .populate('idUser', { firstName: 1, lastName: 1, rol: 1 })
    .populate('idProfile', { gender: 1, prev_studes: 1, actualAge: 1, photo: 1 })
  response.json(student)
})

module.exports = StudentRouter
