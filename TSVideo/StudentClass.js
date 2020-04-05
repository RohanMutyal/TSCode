"use strict";
var StudentAss = /** @class */ (function () {
    function StudentAss(m1, m2, m3) {
        this.m1 = m1;
        this.m2 = m2;
        this.m3 = m3;
    }
    StudentAss.prototype.calper = function () {
        this.per = ((this.m1 + this.m2 + this.m3) * 100 / 300);
        if (this.per > 75) {
            console.log("Dist Class");
        }
        else if (this.per > 60) {
            console.log("First Class");
        }
        else if (this.per > 45) {
            console.log("second class");
        }
        else {
            console.log("pass class");
        }
        return this.per;
    };
    StudentAss.prototype.display = function () {
    };
    return StudentAss;
}());
var st1 = new StudentAss(67, 56, 50);
st1.calper();
st1.display();
console.log(st1.per);
