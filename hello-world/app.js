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

console.clear();

// * Operators
// Operators are used to perform operations on variables and values
// There are different types of operators in JavaScript:
// 1. Arithmetic operators
// 2. Assignment operators
// 3. Comparison operators
// 4. Logical operators
// 5. Bitwise operators
// 6. Ternary operators
// ...
// 7. Type operators
// 8. Spread operator
// 9. Destructuring assignment
// 10. Optional chaining operator
// 11. Nullish coalescing operator
// 12. Template literals
// 13. Rest operator
// 14. Spread operator

// 1. Arithmetic operators
// +, -, *, /, %, ++, --

// Addition (+) - adds two operands
// An operand is a value on which an operator performs an operation
let a; // a is undefined
let b = 5;
a = 10; // 10
const sum = a + b; // 15
console.log("Addition:", sum);
// Declaration vs Initialization
// Declaration - creating a variable (Line 90 above)
// Initialization - assigning a value to a variable (Line 91 above, Line 92 above)
// You can declare and initialize a variable in the same line or you can just declare a variable and initialize it later

// Subtraction (-)
const difference = a - b; // 5
console.log("Subtraction:", difference);

// Multiplication (*)
const product = a * b; // 50
console.log("Multiplication:", product);

// Division (/)
const result = a / b; // 2
console.log("Division:", result);

// Modulus (%)
// Modulus operator returns the remainder of a division operation
// For example, 10 % 5 = 0 because 10 is divisible by 5 and when you divide 10 by 5, the remainder is 0
const remainder = a % b; // 0
console.log("Modulus:", remainder);

console.clear();

// ! Naming conventions - Will learn

// Increment (++)
// Increment operator increases the value of a variable by 1
let accountBalance = 999; // 999 Kuwaiti Dinar
console.log("[accountBalance]:", accountBalance);

// accountBalance = accountBalance + 1; // 6
accountBalance++; // 6

console.log("[accountBalance]:", accountBalance);


// * Control flow or Control structures
// There are three common types of control flow:
// 1. Conditional statements
// 2. Loops
// 3. Functions

// Conditional statements
// if, else if, else
// switch

// If statement
// let eligibleToVote = false;
// const ageToVote = 18;
// let myAge = 20;
// if (myAge >= ageToVote) {
//   eligibleToVote = true;
// } else {
//   eligibleToVote = false;
// }

// console.log(eligibleToVote ? "Eligible to vote" : "Not eligible to vote");
