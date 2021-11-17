const { Router } = require('express')

const menAvailRouter = require('../controllers/mentorAvailability')

const StudentsRouter = require('../controllers/studentsControl')

const sessionRouter = require('../controllers/session')

// const notifMentorRouter = require('../controllers/notif-mentor')

const router = Router()

router.use('/api/mentor-availability', menAvailRouter)

router.use('/api/students-control', StudentsRouter.getAllStudentsRouter)

router.use('/api/students-control-post', StudentsRouter.updatedStateRouter)

router.use('/api/session', sessionRouter)

// router.use('/api/notif-mentor', notifMentorRouter)

module.exports = router
