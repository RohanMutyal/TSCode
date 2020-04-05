"use strict";
var arr = new Array({
    id: 101,
    name: "Rohan",
    depart: {
        dname: "Entc",
        did: 90
    }
}, {
    id: 102,
    name: "Pradnya",
    depart: {
        dname: "civil",
        did: 91
    }
}, {
    id: 103,
    name: "Rohit",
    depart: {
        dname: "Marketing",
        did: 902
    }
});
for (var i_1 = 0; i_1 < arr.length; i_1++) {
    if (arr[i_1].depart.dname == "civil") {
        console.log(arr[i_1]);
    }
}
