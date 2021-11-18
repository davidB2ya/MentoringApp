const User = require('../db/models/User')

// se crea una variable para definir el controlador de la ruta login
const userRouter = require('express').Router()

userRouter.route('/').get((req, res) => {
  // using .find() without a paramter will match on all user instances
  User.find()
    .then(allUser => res.json(allUser))
    .catch(err => res.status(400).json('Error! ' + err))
})

module.exports = userRouter
