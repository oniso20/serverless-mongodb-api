const { createModel } = require('../services/mongodb')

module.exports = createModel('User', {
  username: { type: String },
  avatar: { type: String },
})
