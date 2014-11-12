var ensureMap = require('./'),
    assert = require('assert');

it('takes an empty object', function () {
    assert.deepEqual(ensureMap({}), {});
});

it('takes no arguments', function () {
    assert.deepEqual(ensureMap(), {});
});

it('handles undefined', function () {
    assert.deepEqual(ensureMap(undefined), {});
});

it('handles string', function () {
    var expected = {
        foo:'foo'
    };
    
    assert.deepEqual(ensureMap('foo'), expected);
});

it('handles array', function () {
    var expected = { 
        foo: 'foo',
        bar: 'bar'
    };
    
    assert.deepEqual(ensureMap(['foo', 'bar']), expected);
});

it('handles object', function () {
    var expected = {
        foo: 'bar'
    };
    
    assert.deepEqual(ensureMap({ foo: 'bar' }), expected);
});

it('handles multiple arguments', function () {
    var expected = {
        foo: 'foo',
        bar: 'bar',
        baz: 'baz',
        foobar: 'bazinga'
    };
    
    assert.deepEqual(ensureMap('foo', ['bar', 'baz'], { foobar: 'bazinga' }), expected);
});

it('handles nesting', function () {
   var expected = {
       foo: {
           bar: {
               baz: 'baz',
               banana: {
                   apple: 'apple'
               }
           }
       }
   };
   
    assert.deepEqual(ensureMap({ foo: { bar: ['baz', { banana: ['apple'] } ] } }), expected);
});