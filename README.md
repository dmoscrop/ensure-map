Usage
=======

Guarantees to return a map {}

Arguments are placed in to the map where simple values are used as keys.

The idea is that you might want to let callers optionally provide an alias to a thing, but be concise if they want the default, so:

    // okay, you want me to give thing an alias
    myLibrary({ 'thing': 'alias' });

    // don't use an alias, so ensureMap('thing') produces { 'thing': 'thing' }
    myLibrary('thing');
    
    // your code can just assume there will be be a map
    function myLibrary(options) {
        var map = ensureMap(options);
        
        // map.thing would be 'alias' for the first myLibrary call
        // map.thing would be 'thing' the second
    }

It might make sense to only use it on a sub-property:

    function myLibrary(options) {
       var map = ensureMap(options.filesToProcess);
    }