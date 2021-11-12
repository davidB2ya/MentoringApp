const Profile = require('../db/models/Profile')

// se crea una variable para definir el controlador de la ruta login
const profileRouter = require('express').Router()

profileRouter.get('/', async (request, response) => {
  const profile = await Profile.find({})
  response.json(profile)
})

module.exports = profileRouter
