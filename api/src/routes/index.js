const { Router } = require('express')

const mentorRouter = require('../controllers/mentor')
const sessionRouter = require('../controllers/session')
const SessionReportRouter = require('../controllers/sessionReport')
// const loginRouter = require('../controllers/login')
// const notifMentorRouter = require('../controllers/notif-mentor')

const router = Router()

router.use('/api/mentor', mentorRouter)
router.use('/api/session', sessionRouter)
router.use('/api/session-report', SessionReportRouter)
// router.use('/api/notif-mentor', notifMentorRouter)

module.exports = router
