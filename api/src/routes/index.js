const { Router } = require('express')

const menAvailRouter = require('../controllers/mentorAvailability')

const StudentsRouter = require('../controllers/studentsControl')

// const notifMentorRouter = require('../controllers/notif-mentor')
const FormStudentRouter = require('../controllers/formStudent')

const VotingCapsulesRouter = require('../controllers/votingCapsules')

const router = Router()

router.use('/api/formStudent', FormStudentRouter.FormStudentRouter)
router.use('/api/answerform', FormStudentRouter.AnswerFormRouter)
router.use('/api/votingCapsules', VotingCapsulesRouter.VotingCapsulesRouter)
router.use('/api/updateCapsules', VotingCapsulesRouter.UpdateCapsulesRouter)

router.use('/api/mentor-availability', menAvailRouter)

router.use('/api/students-control', StudentsRouter.getAllStudentsRouter)

router.use('/api/students-control-post', StudentsRouter.updatedStateRouter)

// router.use('/api/notif-mentor', notifMentorRouter)

module.exports = router
