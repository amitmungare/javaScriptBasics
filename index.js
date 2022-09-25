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


// golf score 

var birdNames = ['eagle', 'birdie', 'par', 'bogey'];

function golfScore(par, strokes){

    if(strokes==1){
        return birdNames[0];
    }else if(strokes<=par-2){
        return birdNames[1];
    }else if(strokes==par-1){
        return birdNames[2];
    }else if(strokes==par){
        return birdNames[3];
    }
    return "change me";
}

console.log(golfScore(4, 1345));


// switch statement 

function caseInSwitch(val){

    var op="null";
    switch(val){
        case 1:
            op =  "one";
            break;
        case 2:
            op =  "two";
            break;
        case 3:
            op =  "three";
            break;
        case 4:
            op =  "four";
            break;
        case 5:
            op =  "five";
            break;
        case 6:
            op =  "six";
            break;
        default:
            op =  "good"
            break;
    }
    return op;
}

console.log(caseInSwitch(2));




// returing boolean statement 
function aIsLessThenb(a, b){
    return a<b;
}
console.log(aIsLessThenb(2,4))




// objects in js 
var dogObject ={
    "name":"tom",
    "age":10,
    "color":"brown",
    "friends":["sam", "mos"],
    "dog sound": "bak bak"
}

console.log(dogObject.name);
console.log(dogObject.friends);
console.log(dogObject["dog sound"]);
dogObject.name = "pink";
dogObject.smell = "good";
console.log(dogObject.name);
console.log(dogObject.smell);
delete dogObject.age;


// while loop

var i=6;
while(i<8){
    console.log(i);
    i++;
}
// for loop 
for(var j=0; j<2; j++){
    console.log(j);
}


// random number in js 
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10));


// converting string to integer 
var sss = "456";
console.log(parseInt(sss));


// condition ? statement if true : if false 
var x;
(a<b) ? x=true: x=false;
console.log(x)

// let and var 

let cat = "mics";
cat = "mic";
console.log(cat);

let lll;
var vvv;

function scope(){

    if(true){
        let lll = "let";
        var vvv = "var";
    }
    console.log(lll);
    console.log(vvv);

}
scope();
// imp note : let can be only used in the area that it is defined 
// const is like let but it cant be changed 
// const is read only 


// function with no name 
var magic  = () =>{
    console.log("function with no name");
}


var magics  = (a, b) =>{
    console.log("function with no name but with parameters");
}


var arrays = [1,2,3,4];
// map in js 
console.log(arrays.map(x => x*x));

// rest operator

const sumss = (function() {
    return function sumss(...argss){
       return argss.reduce((a,b)=>a+b, 0)
   }
})();


console.log(sumss(1,2,3))

name = "Amit"
const xyz = `my name is ${name}`;
console.log(xyz);

