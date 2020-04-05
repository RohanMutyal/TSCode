class empl
{
    private empid:number;
    private empname:string;

    public get Empid():number
    {
        return this.empid;
    }
    public set Empi(eid:number)
    {
        this.empid=eid;
    }
}

let emp1=new empl();
emp1.Empi=101;
console.log(emp1.Empi);