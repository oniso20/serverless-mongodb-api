const serverless = require('serverless-http')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
require('../model')
const { connect } = require('../services/mongodb')

app.use(bodyParser.json())
app.use('/', require('../api'))

// or as a promise
const api = serverless(app)
const handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  const warmerIntercept = require('../util/warmer-intercept')
  if (warmerIntercept(event)) {
    connect(true, () => {
      console.info('connected after refresh')
      return
    })
  } else {
    const result = await api(event, context)
    return result
  }
}

module.exports = { handler }
