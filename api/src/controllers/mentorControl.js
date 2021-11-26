const profile = require('../db/models/Profile')

// constant for the get method 
const MentorControlRouter = require('express').Router()

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


  module.exports = MentorControlRouter

