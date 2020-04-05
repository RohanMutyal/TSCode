"use strict";
var Account = /** @class */ (function () {
    function Account(acno, aname, bal) {
        this.accno = acno;
        this.acname = aname;
        this.balance = bal;
    }
    /**
     * Withdraw
am:number
  */
    Account.prototype.Withdraw = function (am) {
        this.balance = this.balance - am;
        console.log("Balance Amount after withdraw = " + this.balance);
    };
    /**
     * deposite
amu:number
   */
    Account.prototype.deposite = function (amu) {
        this.balance = this.balance + amu;
        console.log("Balance after Amount Deposited = " + this.balance);
    };
    return Account;
}());
var cust1 = new Account(111, "Rohan", 19000);
//cust1.Withdraw(2300);
cust1.deposite(4500);
