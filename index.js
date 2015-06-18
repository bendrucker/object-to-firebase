'use strict'

var valueToFirebase = require('value-to-firebase')
var traverse = require('traverse')

module.exports = function objectToFirebase (object) {
  return traverse(object).map(function () {
    process.call(this)
    this.post(process)
  })
}

function process () {
  var value = valueToFirebase(this.node)
  if (this.isRoot) return this.update(value)
  if (value === null) return this.remove()
  return this.update(value)
}
