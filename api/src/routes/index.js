const { Router } = require('express')

const adminRouter = require('../controllers/admin')
const profileRouter = require('../controllers/profile')
const userRouter = require('../controllers/user')
// const loginRouter = require('../controllers/login')

const router = Router()
router.use('/api/admin', adminRouter)
router.use('/api/profile', profileRouter)
router.use('/api/user', userRouter)

// router.use('/api/login', loginRouter)

module.exports = router
