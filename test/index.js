'use strict'

import test from 'tape'
import toFirebase from '../'

test((t) => {
  t.equal(toFirebase({}), null)
  t.deepEqual(toFirebase({foo: 'bar'}), {foo: 'bar'})
  t.deepEqual(toFirebase({
    foo: {
      bar: 'baz'
    }
  }), {
    foo: {
      bar: 'baz'
    }
  })
  t.equal(toFirebase({
    foo: {
      bar: new Date()
    }
  }), null)
  t.end()  
})
