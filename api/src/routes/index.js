const { Router } = require('express')
const pruebaRouter = require('../controllers/login')
// const loginRouter = require('../controllers/login')
// const notifMentorRouter = require('../controllers/notif-mentor')

const router = Router()

router.use('/api/prueba', pruebaRouter)

// router.use('/api/login', loginRouter)

// router.use('/api/notif-mentor', notifMentorRouter)

module.exports = router
