'use strict'

import valueToFirebase from 'value-to-firebase'
import traverse from 'traverse'

export default function objectToFirebase (object) {
  object = valueToFirebase(object)
  if (!object) return object
  return transform(object)
}

function transform (object) {
  let dirty = false
  function cast (object) {
    return traverse(object).forEach(function (node) {
      if (this.isRoot) {
        return
      }
      let value = valueToFirebase(node)
      if (value === null) {
        this.remove()
        dirty = true
      } else {
        this.update(value)
      }
    })
  }
  object = cast(object)
  while (dirty) {
    dirty = false
    cast(object)
  }
  return valueToFirebase(object)
}
