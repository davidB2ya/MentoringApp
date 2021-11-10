const { Router } = require('express')

const adminRouter = require('../controllers/admin')
const userRouter = require('../controllers/user')
const assignedsessionRouter = require('../controllers/assignedSession.js')

// const loginRouter = require('../controllers/login')

const router = Router()
router.use('/api/admin', adminRouter)
router.use('/api/user', userRouter)
router.use('/api/assignedsession', assignedsessionRouter)

// router.use('/api/login', loginRouter)

module.exports = router
