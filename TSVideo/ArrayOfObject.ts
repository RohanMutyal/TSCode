let arr:any[]=new Array(

{
    id:101,
    name:"Rohan",
    depart:{
        dname:"Entc",
        did:90
    }
},
{
    id:102,
    name:"Pradnya",
    depart:
    {
        dname:"civil",
        did:91
    }

},

{
    id:103,
    name:"Rohit",
    depart:
    {
        dname:"Marketing",
        did:902
    }
}


);

for(let i=0;i<arr.length;i++)
{
    if(arr[i].depart.dname=="civil")
    {
        console.log(arr[i]);
    }
}