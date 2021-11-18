const VotingCapsules = require('../db/models/Capsules')
const UpdateCapsules = require('../db/models/Capsules')

// get method to bring the Capsules collection documents
const VotingCapsulesRouter = require('express').Router()

const UpdateCapsulesRouter = require('express').Router()

// get method to bring the capsules collection documents
VotingCapsulesRouter.get('/', async (request, response) => {
  const votingCapsules = await VotingCapsules.find({}).populate('idSession', {
    numSession: 1
  })
  response.json(votingCapsules)
})

// update method to bring the capsules colection documents
UpdateCapsulesRouter.post('/updateCapsules', function (req, res) {
  let body = req.body
  UpdateCapsules.updateOne(
    { _id: body._id },
    {
      $set: {
        idSession: body.idSession,
        theme_1: body.theme_1,
        theme_2: body.theme_2,
        theme_3: body.theme_3,
        WinCapsule: body.WinCapsule
      }
    },
    function (error, info) {
      if (error) {
        res.json({
          resultado: false,
          msg: 'No se pudo modificar el cliente',
          error
        })
      } else {
        res.json({
          resultado: true,
          info: info
        })
      }
    }
  )
})

module.exports = {
  VotingCapsulesRouter,
  UpdateCapsulesRouter
}
