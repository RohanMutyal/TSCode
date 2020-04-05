"use strict";
var ar;
ar = [[1, 2, 2], [3, 4, 4], [3, 3, 3]];
console.log(ar);
// console.log(ar[0][0]);
// console.log(ar[0][1]);
// console.log(ar[0][2]);
// console.log(ar[1][0]);
// console.log(ar[1][1]);
// console.log(ar[1][2]);
var sum = 0;
for (var i = 0; i < ar.length; i++) {
    for (var j = 0; j <= i; j++) {
        sum = sum + ar[i][j];
    }
}
console.log("lower triangle addition = " + sum);
var arr = new Array("JavaTpoint", "2300", "Java", "Abhishek");
for (var i_1 = 0; i_1 < arr.length; i_1++) {
    console.log(arr[i_1]);
}
