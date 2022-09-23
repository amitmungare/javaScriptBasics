const { add } = require("nodemon/lib/rules");

var num = 4; // inline comment 

/* this is a 
multi-line comment */



// Data Types 
// undefined, null, Boolean, String, Symbol, Number, Object


// declaring variables (var, let, const)
var name = "amit";
name=8;
let myName ="amit's car";
const pi = 3.14;


var a;
var b = 10;
a=7;
b=a;
console.log("a =", a);
console.log("b =", b);


// declaration in js is caseSentisive 
var Names = "amit";
var names = "amit mungare";
console.log("Name: ", Names);
console.log("name: ", names);



// Basic Maths 
// adding
var sum=1+1;
sum+=1;
sum++;
console.log("sum =", sum);


var firstName = "Amit";
var secondName = "Mungare";
console.log(firstName, secondName)

// escapes char \"

var s = "my name is \"amit\"";
console.log(s);

var str = "my name is "+firstName;
console.log(str);

// find length of string 
console.log(firstName.length);
console.log(firstName[0]);


function wordBlanks(a , b, c, d){
    var result;
    result = a+b+c+d;
    return result;
}
var op = wordBlanks("ankita ", "is ", "a ", "mad");
console.log(op);


// arrays 
var arr =["amit", 4];

var nestedArray  =[
    ["amit", 1],
    ["amit", 2],
    ["amit", 3],
    ["amit", 4]
]
console.log(nestedArray);
console.log(nestedArray[2]);
nestedArray[2] = ["mungare", 12];
nestedArray[3][1] = [34];
console.log(nestedArray[2]);
console.log(nestedArray[3]);

nestedArray.push(["push", 23]);
nestedArray.pop(3);
nestedArray.shift();
nestedArray.unshift(["amit1", 0])
console.log(nestedArray)

function myname(){
    console.log("amit");
}
myname();

function mynumber(a, b){
    console.log(a+b);
}
mynumber(4,8);

if(typeof names=="string"){
    console.log("names is a string")
}


function addArray(arr, i){
    arr.push(i);
    return arr;
}

var arr = [1,2,3,4,5,6];
addArray(arr, 7);
console.log(JSON.stringify(arr));

var q=3;

if(q===3)console.log("q===3");
if(q=='3')console.log("q=='3'");
if(q==='3')console.log("q==='3'");
if(q != 9)console.log("q != 9");
if(q>=0 && q<10)console.log(true)

var sam = "sam";
var tom = "tom";
if(sam == tom){
    console.log("yes");
}else{
    console.log("no")
}

console.log("stopped timing: 1:27:46 " );