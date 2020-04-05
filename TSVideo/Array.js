"use strict";
var person = {
    name: "Rohan",
    age: 25,
    gen: "male",
    role: [21, "developer", "java"]
};
console.log(person.role);
var ticket;
(function (ticket) {
    ticket[ticket["TRAIN"] = 12] = "TRAIN";
    ticket["BUS"] = "bus ticket";
    ticket[ticket["AIR"] = 890] = "AIR";
})(ticket || (ticket = {}));
;
var tic;
tic = ticket.AIR;
console.log(tic + "booked for Air");
console.log(ticket.BUS);
