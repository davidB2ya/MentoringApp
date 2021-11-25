const profile = require('../db/models/Profile')

// constant for the get method 
const MentorControlRouter = require('express').Router()

MentorControlRouter.get('/', async (req, res, next) => {
    try {
     
      const mentor = await profile.find(
        {gender: true},
        {actualAge: 1} ,
        ).populate('user_id', { name: 1, lastName: 1, studentAssignment: 1, program: 1  })
      res.json(mentor)
    } catch (error) {
      next(error)
    }
  })


  module.exports = MentorControlRouter

  

  

  /*  Nombres
○ Apellidos
○ Carrera
○ Empresa donde trabaja
○ Edad
○ Género
○ Hijos
○ Intereses
○ Programa
○ Asignación de Estudiante(s) */
