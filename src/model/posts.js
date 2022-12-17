const { createModel } = require('../services/mongodb')
const { Schema } = require('mongoose')

module.exports = createModel(
  'Post',
  {
    title: { type: String, required: true },
    creator_id: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    tags: { type: [String], default: [] },
  },
  (schema) => {
    schema.virtual('creator', {
      ref: 'User',
      localField: 'creator_id',
      foreignField: '_id',
      justOne: true,
    })
  },
)
