/** 
Learn JavaScript from scratch
*/

/** 
Primitive data types
String, Number, Boolean, Null, Undefined
console.log("Hello World"); // String - double quotes or single quotes
console.log(52); // Number
console.log(true); // Boolean
console.log(false); // Boolean
console.log(null); // Null
console.log(undefined); // Undefined

// Reference data types
// Object, Array
console.log({}); // Object
console.log([]); // Array
*/

// * Variables
// Variables are containers for storing values
// Declaring variables
// var, let, const
// let and const was introduced in ES6

var myName = "John";
var age = 30;

console.log("var:", myName);
console.log("var:", age);

let myNameLet = "John";
let ageLet = 30;

ageLet = 52; // Reassigning a value to a variable declared with let

console.log("let:", myNameLet);
console.log("let:", ageLet);

const myNameConst = "John";
const ageConst = 30;

// ageConst = 15; // This will throw an error because const variables cannot be reassigned

console.log("const:", myNameConst);
console.log("const:", ageConst);

// ? Differences between var, let and const
// var is function scoped, let and const are block scoped
// var can be redeclared, let and const cannot be redeclared
// var is hoisted, let and const are not hoisted

// ? Illustrating null and undefined
// Difference between null and undefined
// Null is an assignment value. It can be assigned to a variable as a representation of no value.
// Undefined means a variable has been declared but has not yet been assigned a value.
// In other words, a variable that has been declared but not assigned a value is undefined.
// A variable that has been declared and assigned a value of null is null.
let myVariable;
let myVariable2 = null;
console.log(myVariable); // undefined
console.log(myVariable2); // null

// * Control flow or Control structures
// There are three common types of control flow:
// 1. Conditional statements
// 2. Loops
// 3. Functions

// Conditional statements
// if, else if, else
// switch

// If statement
