const { Router } = require('express')

const mentorRouter = require('../controllers/mentor')
const sessionRouter = require('../controllers/session')
const SessionReportRouter = require('../controllers/sessionReport')
const questionBankRouter = require('../controllers/questionBank')
const answerBankRouter = require('../controllers/answerBank')
const capsulesRouter = require('../controllers/capsules')
// const loginRouter = require('../controllers/login')

const router = Router()
router.use('/api/mentor', mentorRouter)
router.use('/api/session', sessionRouter)
router.use('/api/session-report', SessionReportRouter)
router.use('/api/questionBank', questionBankRouter)
router.use('/api/answerBank', answerBankRouter)
router.use('/api/capsules', capsulesRouter)
// router.use('/api/login', loginRouter)

module.exports = router
