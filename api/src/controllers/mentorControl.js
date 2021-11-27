const Profile = require('../db/models/Profile')
const User = require('../db/models/User')
// constant for the get method
const MentorControlRouter = require('express').Router()
const MentorFormRouter = require('express').Router()

<<<<<<< HEAD
MentorControlRouter.get('/', async (req, res, next) => {
  try {
    const mentor = await Profile
      .find({ gender: true }, { actualAge: 1 }/*  { academic_level: 1 }, { ActualJobPosition: 1 }, { Company: 1 }, { sons: 1 }, { interestsMentor: 1 }, { numeStudents: 1 }, { studentAssignment: 1 } */)
      .populate('user_id', {
        name: 1,
        lastName: 1,
        studentAssignment: 1,
        program: 1
      })
    res.json(mentor)
  } catch (error) {
    next(error)
  }
})

/* MentorFormRouter.post('/', (req, res) => {
  console.log('POST /api/mentorform')
  console.log(req.body)
  res.status(200).send({ message: 'se ha recibido' })
=======
MentorControlRouter.get('/', async (req, res) => {
    const mentor = await profile.find(
        {gender: 1}, 
        {actualAge: 1}
        // {degreeTitle: 1},
        // {company: 1},
        // {sons: 1},
        // {interestsMentor: 1}
        ).populate('user_id', { 
            name: 1, 
            lastName: 1, 
            program: 1  
        })
      res.json(mentor)
    
  })
>>>>>>> cd84e5778cd96f5448d9712770921c0f636cf0f7

  const mentorform = new Profile()
  mentorform.gender = req.body.gender
  mentorform.academic_level = req.body.academic_level
  mentorform.ActualJobPosition = req.body.ActualJobPosition
  mentorform.Company = req.body.Company
  mentorform.sons = req.body.sons
  mentorform.interestsMentor = req.body.interestsMentor
  mentorform.numeStudents = req.body.numeStudents
  mentorform.studentAssignment = req.body.studentAssignment
  mentorform.answer = req.body.answer

  mentorform.save((err, mentorformStored) => {
    if (err) res.status(500).send({ message: 'error a salvar' })
    res.status(200).send({ mentorform: mentorformStored })
  })
}) */
MentorFormRouter.post('/:id', (req, res) => {
  const body = req.body

<<<<<<< HEAD
  User.updateOne(
    { _id: req.params.id },
    {
      $set: {
        gender: body.gender,
        academic_level: body.academic_level,
        ActualJobPosition: body.ActualJobPosition,
        Company: body.Company,
        sons: body.sons,
        interestsMentor: body.interestsMentor,
        numeStudents: body.numeStudents,
        studentAssignment: body.studentAssignment
      }
    }
  ).then(function (error, info) {
    if (error) {
      res.json({
        result: false,
        msg: 'No se pudo modificar el mentor ',
        error
      })
    } else {
      res.json({
        result: true,
        info: info
      })
    }
  })
})

module.exports = { MentorControlRouter, MentorFormRouter }

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
=======
>>>>>>> cd84e5778cd96f5448d9712770921c0f636cf0f7
