function identity(arg) {
    return arg;
}
var output1 = identity("myString");
var output2 = identity(100);
console.log("String " + output1);
console.log("Number " + output2);
var am = null;
console.log(am); //output: null  
console.log(typeof (am)); //output: object  
