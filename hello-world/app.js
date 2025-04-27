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

// var myName = "John";
// var age = 30;

// console.log("var:", myName);
// console.log("var:", age);

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
// const result = a / b; // 2
// console.log("Division:", result);

// Modulus (%)
// Modulus operator returns the remainder of a division operation
// For example, 10 % 5 = 0 because 10 is divisible by 5 and when you divide 10 by 5, the remainder is 0
const remainder = a % b; // 0
console.log("Modulus:", remainder);

console.clear();

// Naming conventions
// 2. SixtusMiracleAgbo - exercise
// Cases: 

// Some common naming conventions are:
// 1. camelCase - myVariableName
// 2. PascalCase - MyVariableName
// 3. snake_case - my_variable_name
// 4. kebab-case - my-variable-name


// Increment (++)
// Increment operator increases the value of a variable by 1
let accountBalance = 999; // 999 Kuwaiti Dinar
console.log("[accountBalance]:", accountBalance);

// accountBalance = accountBalance + 1; // 6
accountBalance++; // 1000
accountBalance++; // 1001
accountBalance++; // 1002
accountBalance++; // 1003
accountBalance++; // 1004
accountBalance++; // 1005
accountBalance++; // 1006
accountBalance++; // 1007
accountBalance++; // 1008
accountBalance++; // 1009
accountBalance++; // 1010

console.log("[accountBalance]:", accountBalance);

//! NEXT TIME
// Pre-increment and Post-increment
// We've seen the increment operator in action
// The increment operator can be used in two ways:
// 1. Pre-increment - ++a
// 2. Post-increment - a++
// Already, we've used the increment operator in the post-increment form 
// The difference between the two is when the increment operation is performed
// Pre-increment - the increment operation is performed before the value is used
// Post-increment - the increment operation is performed after the value is used
console.clear();
// For example:
// console.log("Post-increment:");
// let carDoors = 4;
// alert(carDoors++)
// alert(carDoors);


// Pre-increment
// console.log("Pre-increment:");
// let carDoors2 = 4;
// alert(++carDoors2);
// alert(carDoors2);

// Decrement (--)
// Decrement operator decreases the value of a variable by 1
// There are two types of decrement operators:
// 1. Pre-decrement -> --a
// 2. Post-decrement -> a--

// 1. Pre-decrement (--a)
let numberOfPots = 12;
console.log('numberOfPots:', numberOfPots);
--numberOfPots; // 11
--numberOfPots; // 10

console.clear();

// 2. Post-decrement (a--)
let humanLimbs = 4;
console.log('humanLimbs:', humanLimbs);

humanLimbs--;

console.log('humanLimbs:', humanLimbs--);


console.log('humanLimbs:', humanLimbs);

console.clear();

// Order of operations (Very important)
// When multiple operators are used in an expression, the order of operations determines the order in which the operations are performed.
// The order of operations is PEMDAS:
// Parentheses, Exponents, Multiplication and Division (from left to right), Addition and Subtraction (from left to right)
// For example:
result = 2 + 3 * 4; // 14
// The multiplication operator (*) has a higher precedence than the addition operator (+), so the multiplication operation is performed first.
// The result is 2 + (3 * 4) = 2 + 12 = 14
// The order of operations is important to understand because it can affect the result of an expression.

// * Before we move on to the next topic,
// let's take a look at alert(), prompt() and confirm()
// alert() - displays an alert box with a specified message and an OK button
// Example:
// alert("Hello World");

// prompt() - displays a dialog box that prompts the user for input
// Example:
// prompt("Please enter your name:")
// const myName = prompt("Please enter your name:");
// console.log("My name is", myName);

// confirm() - displays a dialog box with a specified message, along with OK and Cancel buttons
// Example:
// const isAdult = confirm("Are you an adult?");
// console.log("Is adult:", isAdult);

// * REPL - Read-Eval-Print Loop
// A REPL is a simple interactive computer programming environment that takes single user inputs, executes them, and returns the result to the user.

// * Assignment operators
// =, +=, -=, *=, /=, %=, **=
// Assignment operator (=) - assigns a value to a variable
let x = 5; // assigns the value 5 to the variable x
x = 10; // reassigns the value 10 to the variable x

// Compound assignment operators
// These operators are shorthand for performing an operation and assigning the result to a variable
// They are used to simplify the code and make it more readable
// The compound assignment operators are:
// +=, -=, *=, /=, %=, **=
// += - adds the right operand to the left operand and assigns the result to the left operand
x += 5; // x = x + 5
console.log("x:", x); // 15

// -= - subtracts the right operand from the left operand and assigns the result to the left operand
x -= 5; // x = x - 5
console.log("x:", x); // 10

// *= - multiplies the left operand by the right operand and assigns the result to the left operand
x *= 5; // x = x * 5
console.log("x:", x); // 50

// Exercise:
// Using the prompt() method, ask the user for their name and age
// Store the name and age in variables
// Log the name and age to the console saying "Hello, [name]", then on the next line "You're going to be [age + 4] in the next 4 years"


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
