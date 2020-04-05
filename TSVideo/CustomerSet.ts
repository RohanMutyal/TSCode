 class  Customer
{
  custid:number;
  status:boolean;
  name:string;

  constructor(custid:number,status:boolean,name:string)
  {
    this.custid=custid;
    this.name=name;
    this.status=status;
  }
}

let se:any=new Set();
se.add(new Customer(12,true,"Rohan"));
se.add(new Customer(13,true,"Pradnya"));
se.add(new Customer(14,false,"Rohit"));
se.add(new Customer(15,true,"Kalpana"));
se.add(new Customer(16,false,"Geeta"));

for(let key of se.keys())
{
    if(key.status==true)
    {
      console.log(key);
    }
    
}
