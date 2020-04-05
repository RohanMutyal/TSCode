"use strict";
var e = new Map();
e.set(1, "Rohan");
e.set(2, "Pradnya");
e.set(3, "Rohit");
e.set(4, "Geeta");
console.log(e.get(1));
console.log(e.get(2));
console.log(e.get(3));
console.log(e.get(4));
//Iterate over Map values 
for (var _i = 0, _a = e.entries(); _i < _a.length; _i++) {
    var entry = _a[_i];
    console.log(entry[0], entry[1]);
}
//using object destructuring 
for (var _b = 0, e_1 = e; _b < e_1.length; _b++) {
    var _c = e_1[_b], key = _c[0], value = _c[1];
    console.log(key, value);
}
//Iterate over Map Keys 
for (var _d = 0, _e = e.keys(); _d < _e.length; _d++) {
    var key = _e[_d];
    console.log(key);
}
//iterate over map values
for (var _f = 0, _g = e.values(); _f < _g.length; _f++) {
    var value = _g[_f];
    console.log(value);
}
