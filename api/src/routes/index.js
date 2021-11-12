const { Router } = require('express')

// aceptadas
const studentRouter = require('../controllers/student')
const mentorRouter = require('../controllers/mentor')
const answerBankRouter = require('../controllers/answerBank')
const questionBankRouter = require('../controllers/questionBank')
const assignedSessionRouter = require('../controllers/assignedSession')
const capsulesRouter = require('../controllers/capsules')
const formSessionRouter = require('../controllers/formSession')
const profileRouter = require('../controllers/profile')
const sessionRouter = require('../controllers/session')
const SessionReportRouter = require('../controllers/sessionReport')
const userRouter = require('../controllers/user')

const router = Router()
router.use('/api/student', studentRouter)
router.use('/api/mentor', mentorRouter)
router.use('/api/answerBank', answerBankRouter)
router.use('/api/questionBank', questionBankRouter)
router.use('/api/assignedsession', assignedSessionRouter)
router.use('/api/capsules', capsulesRouter)
router.use('/api/session-form', formSessionRouter)
router.use('/api/profile', profileRouter)
router.use('/api/session', sessionRouter)
router.use('/api/session-report', SessionReportRouter)
router.use('/api/user', userRouter)

module.exports = router
