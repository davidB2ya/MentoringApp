const Admin = require('../db/models/Admin')

// se crea una variable para definir el controlador de la ruta login
const adminRouter = require('express').Router()

adminRouter.get('/', async (request, response) => {
  const admin = await Admin.find({})
  response.json(admin)
})

module.exports = adminRouter
