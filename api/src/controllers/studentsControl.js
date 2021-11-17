const getAllStudentsRouter = require('express').Router()

const postUserRouter = require('express').Router()

const updatedUserRouter = require('express').Router()

const updatedProfileRouter = require('express').Router()

const Profile = require('../db/models/Profile')
const User = require('../db/models/User')

getAllStudentsRouter.get('/', async (req, res) => {
<<<<<<< HEAD
  // const getAllStudents = 
  await Profile.find({})
  .populate("user_id:", { 
    name: 1,
    middleName: 1,
    lastName: 1,
    secondSurname: 1
  })
  .then(getAllStudents => {
    if(getAllStudents.length) return res.status(200).send({getAllStudents})
    return res.status(204).json({message: 'NO CONTENT'});
  }).catch(err => res.status(500).json({err}))
  
  // res.json(getAllStudents)
})

postUserRouter.post('/', async (req, res) => {
  await User.create( req.body )
  .then(function(dbProfile) {
    // If we were able to successfully create a Product, send it back to the client
    Profile.create({
      user_id: dbProfile.id,
      gender: dbProfile.gender
    })
    res.json(dbProfile);
  })
    
  .catch(function(err) {
    res.json(err);
  })
})



updatedUserRouter.post("/", async (req, res) => {
  let body = req.body;
  User.updateOne({ _id: body._id }, {
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
  },
  function(error, info) {
    if (error) {
=======
  // const getAllStudents =
  await Student.find({})
    .populate('idProfile', { actualAge: 1, gender: 1 })
    .populate('idUser', {
      name: 1,
      middleName: 1,
      lastName: 1,
      secondSurname: 1,
      programa: 1,
      state: 1
    })
    .then(getAllStudents => {
      if (getAllStudents.length) return res.status(200).send({ getAllStudents })
      return res.status(204).json({ message: 'NO CONTENT' })
    })
    .catch(err => res.status(500).json({ err }))

  // res.json(getAllStudents)
})

updatedStateRouter.post('/', async (req, res) => {
  let body = req.body
  User.updateOne(
    { _id: body._id },
    {
      $set: {
        state: body.state
      }
    },
    function (error, info) {
      if (error) {
>>>>>>> 5eb35b70c1dcdd3fc8048bf9123a1a6d9af7ae49
        res.json({
          resultado: false,
          msg: 'No se pudo modificar el cliente',
          err
        })
      } else {
        res.json({
          resultado: true,
          info: info
        })
      }
    }
  )
})

// updatedStateRouter.post("/", async (req, res) => {
//   let body = req.body;
//   User.updateOne({ _id: body._id }, {
//     $set: {
//       state: body.state,
//     }
//   },
//   function(error, info) {
//     if (error) {
//         res.json({
//             resultado: false,
//             msg: 'No se pudo modificar el cliente',
//             err
//         });
//     } else {
//         res.json({
//             resultado: true,
//             info: info
//         })
//     }
//   })
// })

<<<<<<< HEAD
// updatedMentorRouter.post('/', async (req, res) => {
//   let body = req.body;
  
// })
=======
updatedMentorRouter.post('/', async (req, res) => {
  let body = req.body
})
>>>>>>> 5eb35b70c1dcdd3fc8048bf9123a1a6d9af7ae49

// createStudentRouter.post("/:id", async (req, res) => {

// })

// AnswerBankRouter.post('/', (req, res) => {
//   console.log('POST /api/answerBank')
//   console.log(req.body)
//   res.status(200).send({ message: 'se ha recibido' })

//   let answer = new AnswerBank()
//   answer.idSession = req.body.idSession
//   answer.idUser = req.body.idUser
//   answer.idQuestion = req.body.idQuestion
//   answer.answer = req.body.answer

//   answer.save((err, answerStored) => {
//     if (err) res.status(500).send({ message: 'error a salvar' })
//     res.status(200).send({ answer: answerStored })
//   })
// })

<<<<<<< HEAD


module.exports = { getAllStudentsRouter, updatedUserRouter, postUserRouter }
=======
module.exports = { getAllStudentsRouter, updatedStateRouter }
>>>>>>> 5eb35b70c1dcdd3fc8048bf9123a1a6d9af7ae49

// module.exports = createStudentRouter
