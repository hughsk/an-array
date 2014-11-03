var test  = require('tape')
var array = require('./')

test('returns true', function(t) {
  ;['Float32Array'
  , 'Float64Array'
  , 'Uint8ClampedArray'
  , 'Uint8Array'
  , 'Uint16Array'
  , 'Uint32Array'
  , 'Int8Array'
  , 'Int16Array'
  , 'Int32Array'
  , 'Array'
  ].forEach(function(dtype) {
    t.ok(array(new global[dtype]), dtype)
  })

  t.end()
})

test('returns false', function(t) {
  ;[['Object', {}]
  , ['String', 'hello world']
  , ['RegExp', new RegExp]
  , ['*.BYTES_PER_ELEMENT', { BYTES_PER_ELEMENT: 4 }]
  , ['*.length', { length: 4 }]
  , ['*.buffer', { buffer: { byteLength: 4 }}]
  ].forEach(function(input) {
    var dtype = input[0]
    var value = input[1]

    t.ok(!array(value), dtype)
  })

  t.end()
})
