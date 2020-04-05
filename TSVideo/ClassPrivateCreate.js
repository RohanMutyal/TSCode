"use strict";
var Student1 = /** @class */ (function () {
    function Student1(code, name) {
        this.sturoll = code;
        this.stuname = name;
    }
    Student1.prototype.display = function () {
        return ("Roll no =" + this.sturoll + "Student Name=" + this.stuname);
    };
    return Student1;
}());
var Stud1 = new Student1(101, "Rohan");
console.log(Stud1.display);
