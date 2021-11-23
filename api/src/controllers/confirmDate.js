const ConfirmDate = require('../db/models/AssignedSession')
const ConfirmDateRouter = require('express').Router()

ConfirmDateRouter.post('/', async (req, res) => {
  res.status(200).send({ message: 'se ha recibido' })

  const confirm = await new ConfirmDate()
  confirm.idSession = req.body.idSession
  confirm.idUser = req.body.idUser
  confirm.idProfile = req.body.idProfile
  confirm.dateAsig = req.body.dateAsig
  confirm.link = req.body.link

  confirm.save((err, confirmStored) => {
    if (err) res.status(500).send({ message: 'error al guardar' })
    return res.status(200).send({ confirm: confirmStored })
  })
})

module.exports = ConfirmDateRouter
