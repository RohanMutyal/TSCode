interface person
{
    name:string;
}
interface persondetail
{
    age:number;
    address:string;
}

interface employee extends person,persondetail
{
    empid:number;
}
let emp1=<employee>{}
emp1.name="Rohan";
emp1.empid=101;
emp1.age=25;
emp1.address="Ahmednagar";

console.log("Name of Empl = "+emp1.name);
console.log("Empl id = "+emp1.empid);
console.log("Address of Empl = "+emp1.address);