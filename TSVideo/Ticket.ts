enum Ticket
{
    PLATINUM = 100,SILVER=200,GOLD=300
};

class BookTicket
{
    booktic:string;

    constructor(booktic:string)
    {
      this.booktic=booktic;
    
    switch(booktic)
    {
       case"PLATINUM":console.log("Ticket rate is 100");break;

       case 'SILVER':console.log("Ticket rate is 200");break;

       case'GOLD':console.log("Ticket rate is 300");break;
    }
  }
}

let obj=new BookTicket("PLATINUM");

let ob:Ticket;
ob=Ticket.PLATINUM;
console.log(ob.valueOf());
console.log(ob);
