let set1=new Set();

set1.add("Rohan");
set1.add("Pranjali");
set1.add(1);
set1.add(23);
set1.add("Piyush");

for(let key of set1.keys())
{
    console.log(key);
}