# object-to-firebase [![Build Status](https://travis-ci.org/bendrucker/object-to-firebase.svg?branch=master)](https://travis-ci.org/bendrucker/object-to-firebase)

> Recursively transform an object to its Firebase representation

## Install

```sh
$ npm install object-to-firebase
```

## Usage

```js
var objectToFirebase = require('object-to-firebase')
objectToFirebase({
  foo: {
    bar: null
  }
})
// => null
```

## API

##### `objectToFirebase(object)` -> `object` / `null`

#### object

*Required*  
Type: `object`

Traverses an `object`, converting values with [value-to-firebase](https://github.com/bendrucker/value-to-firebase). The object is copied into its smallest possible Firebase representation, meaning:

* Empty objects are removed
* `null` and values that convert to `null` are removed
* These steps are performed recursively

This means the following object become `null`:

```js
{
  foo: {
    bar: {
      baz: {}
    }
  }
}
```

And this:

```js
{
  foo: {
    bar: 'hi',
    baz: {
      qux: null
    }
  }
}
```

Becomes this:

```js
{
  foo: {
    bar: 'hi'
  }
}
```
