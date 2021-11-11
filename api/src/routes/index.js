const { Router } = require('express')

const mentorRouter = require('../controllers/mentor')
const sessionRouter = require('../controllers/session')
const SessionReportRouter = require('../controllers/sessionReport')
const questionBankRouter = require('../controllers/questionBank')
const answerBankRouter = require('../controllers/answerBank')
const capsulesRouter = require('../controllers/capsules')
const adminRouter = require('../controllers/admin')
const userRouter = require('../controllers/user')
const assignedsessionRouter = require('../controllers/assignedSession')
const profileRouter = require('../controllers/profile')

const router = Router()

router.use('/api/mentor', mentorRouter)
router.use('/api/session', sessionRouter)
router.use('/api/session-report', SessionReportRouter)
router.use('/api/questionBank', questionBankRouter)
router.use('/api/answerBank', answerBankRouter)

router.use('/api/admin', adminRouter)
router.use('/api/user', userRouter)
router.use('/api/assignedsession', assignedsessionRouter)
router.use('/api/capsules', capsulesRouter)
router.use('/api/profile', profileRouter)

module.exports = router
