"use strict";
var passcode = "secret passcode";
var Student4 = /** @class */ (function () {
    function Student4() {
    }
    Object.defineProperty(Student4.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Unauthorized update of student detail!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Student4;
}());
var stud = new Student4();
stud.fullName = "Virat Kohli";
if (stud.fullName) {
    console.log(stud.fullName);
}
