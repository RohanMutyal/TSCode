"use strict";
var empl = /** @class */ (function () {
    function empl() {
    }
    Object.defineProperty(empl.prototype, "Empid", {
        get: function () {
            return this.empid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(empl.prototype, "Empi", {
        set: function (eid) {
            this.empid = eid;
        },
        enumerable: true,
        configurable: true
    });
    return empl;
}());
var emp1 = new empl();
emp1.Empi = 101;
console.log(emp1.Empi);
