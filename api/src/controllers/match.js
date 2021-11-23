const profile = require('../db/models/Profile')

// A variable is created to define the controllers of the user, aswen  path
const assignedRouter = require('express').Router()

// Get all info the student
assignedRouter.get('/students', async (req, res, next) => {
  try {
    const info = await profile
      .find({ assignedMentor: { $regex: '.*Not assigned$' } }, { _id: 1 })
      .populate('user_id', {
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
      })
    res.json(info)
  } catch (error) {
    next(error)
  }
})

module.exports = { assignedRouter }
