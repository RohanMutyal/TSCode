class Student1
{
    public sturoll:number;
    public stuname:string;

    constructor(code:number,name:string)
    {
        this.sturoll=code;
        this.stuname=name;

    }
    public display()
    {
        return ("Roll no ="+this.sturoll+"Student Name="+this.stuname)
    }

}

let Stud1:Student1=new Student1(101,"Rohan");
console.log(Stud1.display);