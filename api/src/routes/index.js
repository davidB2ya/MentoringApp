const { Router } = require('express')

const mentorRouter = require('../controllers/mentor')
const sessionRouter = require('../controllers/session')
const SessionReportRouter = require('../controllers/sessionReport')
const questionBankRouter = require('../controllers/questionBank')
const answerBankRouter = require('../controllers/answerBank')

const router = Router()

router.use('/api/mentor', mentorRouter)
router.use('/api/session', sessionRouter)
router.use('/api/session-report', SessionReportRouter)
router.use('/api/questionBank', questionBankRouter)
router.use('/api/answerBank', answerBankRouter)

router.use('/api/admin', adminRouter)
router.use('/api/user', userRouter)
router.use('/api/assignedsession', assignedsessionRouter)

module.exports = router
