const { Router } = require('express')

const FormStudentRouter = require('../controllers/formStudent')

const VotingCapsulesRouter = require('../controllers/votingCapsules')

const menAvailRouter = require('../controllers/mentorAvailability')

const StudentsRouter = require('../controllers/studentsControl')

const sessionRouter = require('../controllers/session')

<<<<<<< HEAD
// const notifMentorRouter = require('../controllers/notif-mentor')
const FormStudentRouter = require('../controllers/formStudent')

const VotingCapsulesRouter = require('../controllers/votingCapsules')
=======
const userRouter = require('../controllers/user')

const dashBoardRouter = require('../controllers/dashBoard')

const answerBankRouter = require('../controllers/answerBank')

const questionBankRouter = require('../controllers/questionBank')

// const notifMentorRouter = require('../controllers/notif-mentor')
>>>>>>> d0cb9d5359e95e79fd3ae5cb3a67e504a14ab9e5

const router = Router()

router.use('/api/formStudent', FormStudentRouter.FormStudentRouter)

router.use('/api/answerform', FormStudentRouter.AnswerFormRouter)

router.use('/api/votingCapsules', VotingCapsulesRouter.VotingCapsulesRouter)

router.use('/api/updateCapsules', VotingCapsulesRouter.UpdateCapsulesRouter)
<<<<<<< HEAD
=======

>>>>>>> d0cb9d5359e95e79fd3ae5cb3a67e504a14ab9e5
router.use('/api/mentor-availability', menAvailRouter)
router.use('/api/students-control', StudentsRouter.getAllStudentsRouter)
<<<<<<< HEAD
router.use('/api/students-control-post', StudentsRouter.updatedUserRouter)
router.use('/api/session', sessionRouter)

=======

router.use('/api/students-control-update', StudentsRouter.updatedUserRouter)

router.use('/api/students-control-post', StudentsRouter.postUserRouter)

router.use('/api/studentsPerfil-control-update', StudentsRouter.updatedProfileRouter)

router.use('/api/session', sessionRouter)

router.use('/api/user', userRouter)

router.use('/api/dashboard/users', dashBoardRouter.userRouter)

router.use('/api/dashboard/answer', dashBoardRouter.answerRouter)

router.use('/api/answerBank', answerBankRouter)

router.use('/api/questionBank', questionBankRouter)

router.use('/api/dashboard/assignedsession', dashBoardRouter.assigSessionRouter)
>>>>>>> d0cb9d5359e95e79fd3ae5cb3a67e504a14ab9e5
// router.use('/api/notif-mentor', notifMentorRouter)

module.exports = router
