var ar:number[][];
ar=[[1,2,2],[3,4,4],[3,3,3]];
console.log(ar);
// console.log(ar[0][0]);
// console.log(ar[0][1]);
// console.log(ar[0][2]);
// console.log(ar[1][0]);
// console.log(ar[1][1]);
// console.log(ar[1][2]);

var sum:number=0;
for(var i=0;i<ar.length;i++)
{
    for(var j=0;j<=i;j++)
    {
        
         sum=sum+ar[i][j];   
        
    }
}
console.log("lower triangle addition = "+sum)

let arr:string[] = new Array("JavaTpoint", "2300", "Java", "Abhishek");   
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i])
}