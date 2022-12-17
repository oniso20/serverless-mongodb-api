const router = require('express').Router();
const override = require('method-override');

const attachModel = require('./attach-model');
const errorHandler = require('./errors');

const { Users, Questions, Facts } = require('../../model');

router.use(require('./modify-request'));
router.use('/users', attachModel(Users));
router.use('/questions', attachModel(Questions));
router.use('/facts', attachModel(Facts));
router.use(require('./send-response'));
router.use(override());
router.use(errorHandler);

module.exports = router;
