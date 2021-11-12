const { Router } = require('express')



const SessionReportRouter = require('../controllers/sessionReport')


const assignedSessionRouter = require('../controllers/assignedSession')

const questionBankRouter = require('../controllers/questionBank')
const answerBankRouter = require('../controllers/answerBank')
const capsulesRouter = require('../controllers/capsules')
const studentRouter = require('../controllers/student')
// const loginRouter = require('../controllers/login')
// const notifMentorRouter = require('../controllers/notif-mentor')

const router = Router()


router.use('/api/session-report', SessionReportRouter)



router.use('/api/assignedsession', assignedSessionRouter)
router.use('/api/questionBank', questionBankRouter)
router.use('/api/answerBank', answerBankRouter)
router.use('/api/capsules', capsulesRouter)
router.use('/api/student', studentRouter)


module.exports = router
