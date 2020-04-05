"use strict";
var Ticket;
(function (Ticket) {
    Ticket[Ticket["PLATINUM"] = 100] = "PLATINUM";
    Ticket[Ticket["SILVER"] = 200] = "SILVER";
    Ticket[Ticket["GOLD"] = 300] = "GOLD";
})(Ticket || (Ticket = {}));
;
var BookTicket = /** @class */ (function () {
    function BookTicket(booktic) {
        this.booktic = booktic;
        switch (booktic) {
            case "PLATINUM":
                console.log("Ticket rate is 100");
                break;
            case 'SILVER':
                console.log("Ticket rate is 200");
                break;
            case 'GOLD':
                console.log("Ticket rate is 300");
                break;
        }
    }
    return BookTicket;
}());
var obj = new BookTicket("PLATINUM");
var ob;
ob = Ticket.PLATINUM;
console.log(ob.valueOf());
console.log(ob);
