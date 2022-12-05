const router = require('express').Router()
const override = require('method-override')

const attachModel = require('./attach-model')
const errorHandler = require('./errors')

const { Users, Posts } = require('../../model')

router.use(require('./modify-request'))
router.use('/users', attachModel(Users))
router.use('/posts', attachModel(Posts))
router.use(require('./send-response'))
router.use(override())
router.use(errorHandler)

module.exports = router
