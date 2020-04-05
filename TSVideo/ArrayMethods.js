"use strict";
var a;
var copya;
a = ["rohan", "pradnya", "rohit", "geeta"];
console.log(a.concat("8"));
console.log(a.indexOf("rohan", 0));
//console.log(a.includes("geeta",1));
a.join("*");
console.log(a);
var apps = ['whatsapp', 'insta', 'fb'];
var playstore = [];
apps.forEach(function (ap) {
    playstore.push(ap);
});
console.log(playstore);
