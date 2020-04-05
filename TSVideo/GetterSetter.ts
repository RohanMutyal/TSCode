let pass="secrete"

class Student3
{
    private _fname: string="";

    get fname(): string
    {
        return this._fname; 
    };
    set fname(nname: string)
    {
        this._fname=nname;
    }
}

let s1=new Student3();
s1.fname="Rohan Mutyal";
console.log(s1.fname);