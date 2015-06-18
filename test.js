'use strict'

var test = require('tape')
var toFirebase = require('./')

test(function (t) {
  t.equal(toFirebase({}), null)
  var shallow = {foo: 'bar'}
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
  var deep = {
    foo: {
      bar: {
        baz: new Date()
      }
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
  t.equal(toFirebase({
    foo: {
      bar: [null]
    }
  }), null)
  t.end()
})
