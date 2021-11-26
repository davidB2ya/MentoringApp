const profile = require('../db/models/Profile')
const users = require('../db/models/User')

// A variable is created to define the controllers of the user, aswen  path
const assignedRouter = require('express').Router()

const arrayEstudentsNotAssigned = []
const arrayMentorAvailable = []
const match = []
const listMatches = []
let resultInterest = 0

function Match () {
  for (let est = 0; est < arrayEstudentsNotAssigned.length; est++) {
    for (let m = 0; m < arrayMentorAvailable.length; m++) {
      while (arrayMentorAvailable[m].studentAssignment.length < arrayMentorAvailable[m].numeStudents) {
        for (let i = 0; i < 2; i++) {
          if (
            arrayEstudentsNotAssigned[est].interestsStudent[i].includes(
              arrayMentorAvailable[m]
            )
          ) {
            if (resultInterest === 0) {
              resultInterest = 5
            } else {
              resultInterest = resultInterest + 10
            }
          }
        }
      }
      match.push(resultInterest)
    }
    listMatches.push(match)
  }
  return listMatches
}

// Get all info the student
assignedRouter.get('/students', async (req, res, next) => {
  const user = {
    cohorte: req.body.cohorte,
    program: req.body.program
  }

  const studentsActive = await users.find(
    { state: true, role: 1, cohorte: user.cohorte, program: user.program },
    {
      name: 1,
      email: 1,
      middleName: 1,
      lastName: 1,
      secondSurname: 1,
      contactNumber: 1,
      state: 1,
      role: 1,
      cohorte: 1,
      program: 1
    }
  )

  const usersNotAssigned = await profile
    .find(
      { assignedMentor: { $regex: '.*Not assigned$' } },
      {
        _id: 1,
        actualAge: 1,
        commitment: 1,
        achievementOrientation: 1,
        flexibility: 1,
        assertiveCommunication: 1,
        interestsStudent: 1
      }
    )
    .populate('user_id')

  // const array = []

  for (let e = 0; e < studentsActive.length; e++) {
    for (let i = 0; i < usersNotAssigned.length; i++) {
      if (
        studentsActive[e].contactNumber ===
        usersNotAssigned[i].user_id.contactNumber
      ) {
        arrayEstudentsNotAssigned.push(studentsActive[e])
      }
    }
  }
  res.send(usersNotAssigned)
})

// Get all info the mentor
assignedRouter.get('/mentor', async (req, res, next) => {
  const user = {
    program: req.body.program
  }

  const mentorAvailable = await profile
    .find(
      {},
      {
        _id: 1,
        numeStudents: 1,
        studentAssignment: 1,
        interestsMentor: 1,
        actualAge: 1,
        commitment: 1,
        achievementOrientation: 1,
        flexibility: 1,
        assertiveCommunication: 1,
        gender: 1
      }
    )
    .populate('user_id')

  for (let m = 0; m < mentorAvailable.length; m++) {
    if (
      (mentorAvailable[m].user_id.role === 4) &
      (mentorAvailable[m].user_id.state === true) &
      (mentorAvailable[m].user_id.program === user.program)
    ) {
      if (
        mentorAvailable[m].studentAssignment.length <
        mentorAvailable[m].numeStudents
      ) {
        arrayMentorAvailable.push(mentorAvailable[m])
      }
    }
  }
  res.json(arrayMentorAvailable)
})

// Get all info the mentor
assignedRouter.get('/result', async (req, res, next) => {
  const result = await Match()
  res.json(result)
})

module.exports = { assignedRouter }
