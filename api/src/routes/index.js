const { Router } = require('express')



const SessionReportRouter = require('../controllers/sessionReport')


const assignedSessionRouter = require('../controllers/assignedSession')


const router = Router()


router.use('/api/session-report', SessionReportRouter)



router.use('/api/assignedsession', assignedSessionRouter)


module.exports = router
