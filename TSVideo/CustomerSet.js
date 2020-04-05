"use strict";
var Customer = /** @class */ (function () {
    function Customer(custid, status, name) {
        this.custid = custid;
        this.name = name;
        this.status = status;
    }
    return Customer;
}());
var se = new Set();
se.add(new Customer(12, true, "Rohan"));
se.add(new Customer(13, true, "Pradnya"));
se.add(new Customer(14, false, "Rohit"));
se.add(new Customer(15, true, "Kalpana"));
se.add(new Customer(16, false, "Geeta"));
for (var _i = 0, _a = se.keys(); _i < _a.length; _i++) {
    var key = _a[_i];
    if (key.status == true) {
        console.log(key);
    }
}
