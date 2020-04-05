class Account
{
    accno:number;
    acname:string;
    balance:number;

    constructor(acno:number,aname:string,bal:number)
    {
        this.accno=acno;
        this.acname=aname;
        this.balance=bal;
    }

    /**
     * Withdraw
am:number   
  */
    public Withdraw(am:number) {
        this.balance=this.balance-am;
        console.log("Balance Amount after withdraw = "+this.balance);
    }

    /**
     * deposite
amu:number  
   */
    public deposite(amu:number) 
    {
        this.balance=this.balance+amu;
        console.log("Balance after Amount Deposited = "+this.balance);
    }
}

let cust1=new Account(111,"Rohan",19000);
//cust1.Withdraw(2300);
cust1.deposite(4500);