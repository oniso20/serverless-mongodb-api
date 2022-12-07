const { createModel } = require('../services/mongodb');

module.exports = createModel('Questions', {
    question: {
        Id: { type: Number },
        prompt: { type: String },
        options: { type: Array }
    }
});