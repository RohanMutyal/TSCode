var ar:any[][]=[[12,5,8],[8,3,6],[1,8,0]];

var sum=0;
for(var i=0;i<ar.length;i++)
{
    for(var j=i;j>=0;j--)
    {
      sum=sum+ar[i][j];
    }
}

console.log("Lower Triangle sum = "+sum);