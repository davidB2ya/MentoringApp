const { Router } = require('express')

const menAvailRouter = require('../controllers/mentorAvailability')

const StudentsRouter = require('../controllers/studentsControl')

const sessionRouter = require('../controllers/session')

const userRouter = require('../controllers/user')

const dashBoardRouter = require('../controllers/dashBoard')

const FormStudentRouter = require('../controllers/formStudent')

// const notifMentorRouter = require('../controllers/notif-mentor')

const VotingCapsulesRouter = require('../controllers/votingCapsules')

const router = Router()

router.use('/api/formStudent', FormStudentRouter.FormStudentRouter)
router.use('/api/answerform', FormStudentRouter.AnswerFormRouter)
router.use('/api/votingCapsules', VotingCapsulesRouter.VotingCapsulesRouter)
router.use('/api/updateCapsules', VotingCapsulesRouter.UpdateCapsulesRouter)

router.use('/api/mentor-availability', menAvailRouter)

router.use('/api/students-control', StudentsRouter.getAllStudentsRouter)

router.use('/api/students-control-update', StudentsRouter.updatedUserRouter)

router.use('/api/students-control-post', StudentsRouter.postUserRouter)

router.use('/api/studentsPerfil-control-update', StudentsRouter.updatedProfileRouter)

router.use('/api/session', sessionRouter)

router.use('/api/user', userRouter)

router.use('/api/dashboard/users', dashBoardRouter.userRouter)

router.use('/api/dashboard/answer', dashBoardRouter.answerRouter)

router.use('/api/formStudent', FormStudentRouter.FormStudentRouter)

router.use('/api/answerform', FormStudentRouter.AnswerFormRouter)

// router.use('/api/notif-mentor', notifMentorRouter)

module.exports = router
