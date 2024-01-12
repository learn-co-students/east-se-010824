// ✅ console.log
// console.log('hello')
// ✅ run js file
// ✅ declare variables with let and const
const potato = "constant variable"
'string'
"it's"
let anotherPotatoVariable
// console.log(anotherPotatoVariable)
anotherPotatoVariable = "something else"
// console.log(anotherPotatoVariable)

// ✅ JS 8 data types
// Primitive values = immutable values lowest level of the language
// 1. String
// 2. Number
const num = 1000
// 3. Bigint (+9,000 trillion: good for high precision time stamps, cryptography, financial calculations)
const bigNum = 166n
// 4. Boolean
true
false
// 5. Undefined
// 6. Null
// 7. Symbol

// mutable (talk more about tomorrow)
// 8. Object
let dog = {
    name: "Apollo",
    age: 2,
    tricks: []
}

// console.log(dog)

dog.color = 'golden'

// console.log(dog)


// ✅ control flow: if else if else
// if (condition) {
//   console.log("the condition was true");
// } else if (anotherCondtion) {
//   console.log("anotherCondtion was true")
// }  else if (anotherCondtionHere) {
//   console.log("anotherCondtion was true")
// } else {
//   console.log("the condition and anotherCondition were falsey");
// }

const temp = '80';
// if tempature is greater than 80  console.log go swimming
// if the tempature is less than 50 console.log stay in doors
// if temp is between 50 and 80 console.log go for a walk
// if (temp > 80) {
//     console.log('go swimming')
// } else if (temp < 50) {
//     console.log('stay indoors')
// } else {
//     console.log('go for a WALK')
// }
// console.log(temp === 80)
// PEMDAS
// console.log(12 ** 5)

// functions = set of statements to perform a task
// ✅ define a function called sayHello that will print "Hello world!"
// ✅ have that function return "Hello east-se-091123"
function sayHello(name) {
    console.log(name)
    // concatenation
    // return 'Hello ' + name
    // template literals (``) with interpolation (${expression})
    return `Hello ${name}`
}
// const whatSayHelloReturns = sayHello('east-se-010824')
// console.log(whatSayHelloReturns)
// console.log(sayHello('emiley'))

// parameters = placeholder, variable, name in function parentheses
// arguments = real value passed to the function

// ✅ add a parameter cohortName
// ✅ change the return value so it says hello to the cohort (string interpolation with template literals)



// define a function called whatShouldWeDo
// accept a temperature
// return a string of "go swimming" if the temp is greater than 80
// return a string of "stay indoors" if the temp is less than 40
// return a string of "go for a walk if the temp is between 40 and 80"

// Global Scope - variables declared in the global execution context
// Function Scope - variables and functions inside function body
//  - can access variables and functions defined in global scope
//  - in global scope cannot access function scoped variables and functions
// Block Scope - Variables declared inside a { } block
//  - cannot be accessed from outside the block

const globalScopeVariable = 'global scope'
// console.log(functionScopeVariable, 'global scope')

function sayHello() {
    const functionScopeVariable = 'function scope'
    if (true) {
        const blockScopeVariable = 'block scope'
        console.log(blockScopeVariable, 'block scope')
    } 
    console.log(blockScopeVariable, 'function scope')
}

// sayHello()

// function declaration and function expression


const sayHelloTwo = function() {

}

const sayHelloThree = () => {
    console.log('hello')
    return 'something'
}

const sayHelloFour = () => 'hello'
 

console.log(sayHelloFour())


// first-class functions 
//  - first-class objects, means they can be treated like any other object
//  - assigned to a variable, passed as values to other functions, returned as the value from another function, etc

//  Higher-order function - function that can take in a function as an argument and or return a function
function sayHello() {
    console.log('hello')
}

function higherOrderFunction(anotherFunction) {
  console.log(anotherFunction());
  return function () {};
}
higherOrderFunction(() => console.log('hello'));
// forEach, map, filter

//  callback function - function passed as an argument to another function and the other function will invoke it

// ✅ define a function called checkEmileysSchedule that takes in a time and will return true if that time (hour as a number) is between 10 and 11 otherwise will return false


// ✅ define a higher-order function called areYouAvailable that takes in another function as an argument as well as a time (hour as a number) and returns whether the person is available at that time
