const router = require('express').Router()
const override = require('method-override')

const attachModel = require('./attach-model')
const errorHandler = require('./errors')

const { Users } = require('../../model')

router.use(require('./modify-request'))
router.use('/users', attachModel(Users))
router.use(require('./send-response'))
router.use(override())
router.use(errorHandler)

module.exports = router
