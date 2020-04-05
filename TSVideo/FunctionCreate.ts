function display()
{
    console.log( "We Are In TypeScript ...");
}
display();

//ananomous Fucntion ...

let add=function(x:number,y:number):number
{
   return x+y;
}
console.log(add(3,55));

// fat Arrow function...

let sum=(x:number,y:number):number =>
{
    return x+y;
}
console.log(sum(23,23));