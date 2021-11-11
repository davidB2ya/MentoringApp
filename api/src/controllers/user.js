const Person = require('../db/models/Students')

//se crea una variable para definir el controlador de la ruta login
const pruebaRouter = require('express').Router()

pruebaRouter.get('/', async (request, response) => {
  const users = await Person.find({})
  response.json(users)
})

module.exports = pruebaRouter
