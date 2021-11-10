const { Router } = require('express')
const SessionReportRouter = require('../controllers/sessionReport')


const router = Router()

router.use('/api/session-report', SessionReportRouter)


module.exports = router
