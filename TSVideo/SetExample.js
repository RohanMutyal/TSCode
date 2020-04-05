"use strict";
var set1 = new Set();
set1.add("Rohan");
set1.add("Pranjali");
set1.add(1);
set1.add(23);
set1.add("Piyush");
for (var _i = 0, _a = set1.keys(); _i < _a.length; _i++) {
    var key = _a[_i];
    console.log(key);
}
