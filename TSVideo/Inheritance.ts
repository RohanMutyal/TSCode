class Car
{
    color:string
    constructor(c:string)
    {
        this.color=c;
    }
}

class Tigor extends Car{
    price:number
    constructor(color:string,price:number)
    {
        super(color)
        this.price=price;
    }
    display():void
    {
        console.log("Color of Tigor Car"+this.color);
        console.log("Color of Tigor Car"+this.price)
    }
}

let obj=new Tigor("Black",90000);
obj.display();