const { createModel } = require('../services/mongodb')

module.exports = createModel(
  'User',
  {
    username: { type: String, required: true, unique: true },
    avatar: { type: String },
  },
  (schema) => {
    schema.virtual('posts', {
      ref: 'Post',
      localField: 'post_ids',
      foreignField: '_id',
    })
  },
)
