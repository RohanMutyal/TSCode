function identity<T>(arg: T): T {  
    return arg;  
}  
let output1 = identity<string>("myString");  
let output2 = identity<number>(100);  

console.log("String " + output1);
console.log("Number " + output2);

var am = null;   
console.log( am );   //output: null  
console.log( typeof(am) );   //output: object  