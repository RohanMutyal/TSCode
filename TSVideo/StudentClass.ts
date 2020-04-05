

class StudentAss
{
    m1:number;
    m2:number;
    m3:number;
    per:number;
    constructor(m1:number,m2:number,m3:number)
    {
        this.m1=m1;
        this.m2=m2;
        this.m3=m3;
    }

    calper():number{
      this.per=((this.m1+this.m2+this.m3)*100/300);
      
      if(this.per>75)
        {
            console.log("Dist Class");
        }
        else if(this.per>60)
        {
            console.log("First Class");
        }
        else if(this.per>45)
        {
            console.log("second class");
        }
        else{
            console.log("pass class");
        }
      return this.per;
    }

    display():void{
        
    }
}

let st1=new StudentAss(67,56,50);
st1.calper();
st1.display();
console.log(st1.per);