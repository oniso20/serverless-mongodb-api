module.exports = {
  handler: (event, context) => {
    const msg = 'lamdbda ran successfully'
    console.log('log: ' + msg)
    return msg
  },
}
