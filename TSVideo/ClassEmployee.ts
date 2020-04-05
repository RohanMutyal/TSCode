class employee
{
    empid:number;
    empname:string;

    constructor(eid:number,ename:string)
    {
        this.empid=eid;
        this.empname=ename;
    }

    display():void
    {
        console.log("Employee Id = "+this.empid);
        console.log("Employee Name = "+this.empname);
    }
}

let emp=new employee(101,"Rohan");
emp.display();