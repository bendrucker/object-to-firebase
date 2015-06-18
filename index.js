'use strict'

var valueToFirebase = require('value-to-firebase')
var traverse = require('traverse')

module.exports = function objectToFirebase (object) {
  return traverse(object).map(process)
}

function process () {
  this.post(process)
  var value = valueToFirebase(this.node)
  if (this.isRoot) return this.update(value)
  if (value === null) return this.remove()
  return this.update(value)
}
