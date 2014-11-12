function ensureMap(map, arg) {
    if (Array.isArray(arg)) {
        arg.forEach(function (item) {
            if ('object' === typeof item) {
                ensureMap(map, item);
            } else {
                map[item] = item;
            }
        });
        return;
    } else if ('object' === typeof arg) {
        Object.keys(arg).forEach(function (key) {
            var value = arg[key];
            
            if ('object' === typeof value) {
                var nested = {};
                ensureMap(nested, value);
                map[key] = nested;
            } else {
                map[key] = value;
            }
        });
    } else {
        if (arg) {
            map[arg] = arg;
        }
        return;
    }
}

module.exports = function () {
    var map = {};
    
    Array.prototype.slice.call(arguments).forEach(function (arg) {
        ensureMap(map, arg);
    });
    
    return map;
};