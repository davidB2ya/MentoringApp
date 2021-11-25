const assignedDateRouter = require('express').Router()
const session = require('../db/models/AssignedSession')

// update the dateAsinada document of the session Assigned collection
assignedDateRouter.post('/:id', (req, res) => {
  const body = req.body

  session
    .updateOne(
      { idUser: req.params.id },
      {
        $set: {
          dateAsig: body.dateAsig
        }
      }
    )
    .then(function (error, info) {
      if (error) {
        res.json({
          result: false,
          msg: 'No se pudo actualizar la fecha',
          error
        })
      } else {
        res.json({
          result: true,
          info: info
        })
      }
    })
})

// method put link session of the session Assigned collection
assignedDateRouter.put('/:id', async (req, res) => {
  try {
    const linkAsig = await session.findById(req.params.id)
    Object.assign(linkAsig, req.body)
    linkAsig.save()
    res.send({ data: linkAsig })
  } catch {
    res.status(404).send({ error: 'link not found' })
  }
})

module.exports = assignedDateRouter
