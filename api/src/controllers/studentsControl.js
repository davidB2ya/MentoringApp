const getAllStudentsRouter = require('express').Router()
const updatedUserRouter = require('express').Router()
// const updatedProfileRouter = require('express').Router()

const Profile = require('../db/models/Profile')

const User = require('../db/models/User')

getAllStudentsRouter.get('/', async (req, res) => {
  // const getAllStudents =
  await Profile.find({})
    .populate('user_id:', {
      name: 1,
      middleName: 1,
      lastName: 1,
      secondSurname: 1
    })
    .then(getAllStudents => {
      if (getAllStudents.length) return res.status(200).send({ getAllStudents })
      return res.status(204).json({ message: 'NO CONTENT' })
    })
    .catch(err => res.status(500).json({ err }))

  // res.json(getAllStudents)
})

<<<<<<< HEAD
updatedUserRouter.post('/', async (req, res) => {
  const body = req.body
=======
postUserRouter.post('/', async (req, res) => {
  const profile = {
    gender: req.body.gender,
    actualAge: req.body.actualAge,
    interestsStudent: req.body.interestsStudent,
    assignedMentor: req.body.assignedMentor
  }
  // const gender = (req.body.gender);
  // const actualAge = (req.body.actualAge)
  await User.create(req.body)
    .then(function (dbProfile) {
      // If we were able to successfully create a Product, send it back to the client
      Profile.create({
        user_id: dbProfile.id,
        gender: profile.gender,
        actualAge: profile.actualAge,
        interestsStudent: profile.interestsStudent,
        assignedMentor: profile.assignedMentor
      })
      res.json(dbProfile)
    })

    .catch(function (err) {
      res.json(err)
    })
})

updatedUserRouter.post('/', (req, res) => {
  const body = req.body

>>>>>>> d0cb9d5359e95e79fd3ae5cb3a67e504a14ab9e5
  User.updateOne(
    { _id: body._id },
    {
      $set: {
        name: body.name,
        email: body.email,
        passwordHash: body.passwordHash,
        middleName: body.middleName,
        lastName: body.lastName,
        secondSurname: body.secondSurname,
        contactNumber: body.contactNumber,
        role: body.role,
        avatar: body.avatar,
        program: body.program,
        cohorte: body.cohorte,
        state: body.state
      }
    }
  ).then(function (error, info) {
    if (error) {
      res.json({
        result: false,
        msg: 'No se pudo modificar el usuario',
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

updatedProfileRouter.post('/', async (req, res) => {
  const body = req.body

  const profile = {
    gender: req.body.gender,
    actualAge: req.body.actualAge,
    interestsStudent: req.body.interestsStudent,
    assignedMentor: req.body.assignedMentor
  }

  const idprofile = await Profile.find({ user_id: body._id }, { _id: 1 })

  // console.log(idprofile)

  Profile.updateOne(
    { _id: idprofile[0]._id },
    {
      $set: {
        gender: profile.gender,
        actualAge: profile.actualAge,
        interestsStudent: profile.interestsStudent,
        assignedMentor: profile.assignedMentor
      }
    },
    function (error, info) {
      if (error) {
        res.json({
<<<<<<< HEAD
          resultado: false,
          msg: 'No se pudo modificar el cliente',
=======
          result: false,
          msg: 'No se pudo modificar el perfil',
>>>>>>> d0cb9d5359e95e79fd3ae5cb3a67e504a14ab9e5
          error
        })
      } else {
        res.json({
          result: true,
          info: info
        })
      }
    }
  )
})

<<<<<<< HEAD
// updatedStateRouter.post("/", async (req, res) => {
// let body = req.body;
// User.updateOne({ _id: body._id }, {
// $set: {
// state: body.state,
// }
// },
// function(error, info) {
// if (error) {
// res.json({
// resultado: false,
// msg: 'No se pudo modificar el cliente',
// err
// });
// } else {
// res.json({
// resultado: true,
// info: info
// })
// }
// })
// })

// updatedMentorRouter.post('/', async (req, res) => {
// let body = req.body;

// })

// createStudentRouter.post("/:id", async (req, res) => {

// })

// AnswerBankRouter.post('/', (req, res) => {
// console.log('POST /api/answerBank')
// console.log(req.body)
// res.status(200).send({ message: 'se ha recibido' })

// let answer = new AnswerBank()
// answer.idSession = req.body.idSession
// answer.idUser = req.body.idUser
// answer.idQuestion = req.body.idQuestion
// answer.answer = req.body.answer

// answer.save((err, answerStored) => {
// if (err) res.status(500).send({ message: 'error a salvar' })
// res.status(200).send({ answer: answerStored })
// })
// })

module.exports = { getAllStudentsRouter, updatedUserRouter }

// module.exports = createStudentRouter
=======
module.exports = {
  getAllStudentsRouter,
  updatedUserRouter,
  postUserRouter,
  updatedProfileRouter
}
>>>>>>> d0cb9d5359e95e79fd3ae5cb3a67e504a14ab9e5
