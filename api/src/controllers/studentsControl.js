const getAllStudentsRouter = require('express').Router()
const updatedStateRouter = require('express').Router()
const updatedMentorRouter = require('express').Router()

// const Student = require('../db/models/Student')
const User = require('../db/models/User')

getAllStudentsRouter.get('/', async (req, res) => {
  // const getAllStudents = 
  await Student.find({})
  .populate("idProfile", { actualAge: 1, gender: 1})
  .populate("idUser", {
    name: 1,
    middleName: 1,
    lastName: 1,
    secondSurname: 1,
    programa: 1,
    state: 1
  })
  .then(getAllStudents => {
    if(getAllStudents.length) return res.status(200).send({getAllStudents})
    return res.status(204).json({message: 'NO CONTENT'});
  }).catch(err => res.status(500).json({err}))
  
  // res.json(getAllStudents)
})

updatedStateRouter.post("/", async (req, res) => {
  let body = req.body;
  User.updateOne({ _id: body._id }, {
    $set: {
      state: body.state,
    }
  },
  function(error, info) {
    if (error) {
        res.json({
            resultado: false,
            msg: 'No se pudo modificar el cliente',
            err
        });
    } else {
        res.json({
            resultado: true,
            info: info
        })
    }
  })
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

updatedMentorRouter.post('/', async (req, res) => {
  let body = req.body;
  
})




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



module.exports = { getAllStudentsRouter, updatedStateRouter }

// module.exports = createStudentRouter