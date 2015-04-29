'use strict'

import valueToFirebase from 'value-to-firebase'
import traverse from 'traverse'

export default function objectToFirebase (object) {
  return traverse(object).map(function () {
    process.call(this)
    this.post(process)
  })
}

function process () {
  const value = valueToFirebase(this.node)
  if (this.isRoot) return this.update(value)
  if (value === null) return this.remove()
  return this.update(value)
}
