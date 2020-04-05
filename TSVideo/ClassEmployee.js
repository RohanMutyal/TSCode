"use strict";
var employee = /** @class */ (function () {
    function employee(eid, ename) {
        this.empid = eid;
        this.empname = ename;
    }
    employee.prototype.display = function () {
        console.log("Employee Id = " + this.empid);
        console.log("Employee Name = " + this.empname);
    };
    return employee;
}());
var emp = new employee(101, "Rohan");
emp.display();
