const User = require('../db/models/User')

// se crea una variable para definir el controlador de la ruta login
const userRouter = require('express').Router()

userRouter.route('/').get( async (req, res) => {
  // using .find() without a paramter will match on all user instances
  try {
    const user = await User.findById(req.user.id).select('-password')

    res.json(user)
  } catch (err) {
    return res.status(500).json({msg: err.message})
  }
})

module.exports = userRouter
