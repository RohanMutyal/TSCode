let e=new Map();
e.set(1,"Rohan");
e.set(2,"Pradnya");
e.set(3,"Rohit");
e.set(4,"Geeta");

console.log(e.get(1));
console.log(e.get(2));
console.log(e.get(3));
console.log(e.get(4));


//Iterate over Map values 

for(let entry of e.entries())
{
    console.log(entry[0],entry[1]);
}

//using object destructuring 

for(let [key,value] of e)
{
    console.log(key,value);
}

//Iterate over Map Keys 

for(let key of e.keys())
{
    console.log(key);
}

//iterate over map values
for(let value of e.values())
{
    console.log(value);
}