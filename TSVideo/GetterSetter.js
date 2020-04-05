"use strict";
var pass = "secrete";
var Student3 = /** @class */ (function () {
    function Student3() {
    }
    Object.defineProperty(Student3.prototype, "fname", {
        get: function () {
            return this._fname;
        },
        set: function (nname) {
            this._fname = nname;
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Student3;
}());
var stu = new Student3();
stu.fname = "Rohan Mutyal";
console.log(stu.fname);
