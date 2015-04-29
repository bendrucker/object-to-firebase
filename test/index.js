'use strict'

import test from 'tape'
import toFirebase from '../'

test((t) => {
  t.equal(toFirebase({}), null)
  const shallow = {foo: 'bar'}
  t.deepEqual(toFirebase(shallow), {foo: 'bar'})
  t.notEqual(toFirebase(shallow), shallow, 'copies shallow object')
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
      bar: {
        baz: null
      },
      baz: {
        qux: null
      }
    }
  }), null)
  const deep = {
    foo: {
      bar: {
        baz: new Date()
      },
    }
  }
  t.equal(toFirebase(deep), null)
  t.ok(deep.foo, 'copies deep object')
  t.deepEqual(toFirebase({
    foo: {
      bar: null,
      baz: 'qux'
    }
  }), {
    foo: {
      baz: 'qux'
    }
  })
  t.end()  
})
