const { createModel } = require('../services/mongodb');

module.exports = createModel('Facts', {
    source: { type: String },
    prompt: { type: String },
    options: { type: Array }
});