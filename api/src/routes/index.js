const { Router } = require('express')



const SessionReportRouter = require('../controllers/sessionReport')


const assignedSessionRouter = require('../controllers/assignedSession')

const questionBankRouter = require('../controllers/questionBank')
const answerBankRouter = require('../controllers/answerBank')
const capsulesRouter = require('../controllers/capsules')
<<<<<<< HEAD
const studentRouter = require('../controllers/student')
// const loginRouter = require('../controllers/login')
// const notifMentorRouter = require('../controllers/notif-mentor')
=======

const userRouter = require('../controllers/user')
const assignedsessionRouter = require('../controllers/assignedSession')
const profileRouter = require('../controllers/profile')
>>>>>>> e64a18bf5d42018de370d762130e0cbeeca4f302

const router = Router()


router.use('/api/session-report', SessionReportRouter)



router.use('/api/assignedsession', assignedSessionRouter)
router.use('/api/questionBank', questionBankRouter)
router.use('/api/answerBank', answerBankRouter)
<<<<<<< HEAD
=======

router.use('/api/user', userRouter)
router.use('/api/assignedsession', assignedsessionRouter)
>>>>>>> e64a18bf5d42018de370d762130e0cbeeca4f302
router.use('/api/capsules', capsulesRouter)
router.use('/api/student', studentRouter)


module.exports = router
