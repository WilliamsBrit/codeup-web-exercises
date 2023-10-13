"use strict"

//Create a function names sum that takes in two numbers and returns the sum of the two numbers.

function sum (num1,num2) {
    return num1 + num2
}

// Calling the function / Execute the function.
console.log(sum(5,5));

//Create a function named fullName that takes in two inputs, a first name and last name, and returns the first name and last name concatenated together.
//
// function fullName(firstName,lastName) {
//     return firstName + " " + lastName
// }
//
// // Refactor with Template Literals
// function fullName(firstName,lastName) {
//     return `${firstName} ${lastName}`
// }
//
// console.log(fullName ("Brittany ", "Williams"))

// console.log(`Hello ${ fullname('Jay', 'Arredondo') }, did you know that 5 + 5 = ${sum(5,5)} `)

//Anonymous function

const decrement = function(input) {
    return input - 1
}
console.log(decrement(5))

//Arrow Functions
// If an arrow function only has one parameter, parenthesis are optional!

// function declaration

// function fullName(firstName,lastName) {
//  return firstName + " " + lastName
//  }

// Long Arrow Function

// const fullName = (firstName, lastName) => {
//     return firstName + " " + lastName
// }
// console.log(fullName('Michael', 'Myers'))

//Short Arrow Function

// const fullName = (firstName,lastName) => firstName + " " + lastName
//
// console.log(fullName('Michael', 'Myers'))
//
// // //Create a function that takes in a string and transforms the string to lowercase
// let sampleString = "HoW oN eArTh doEs thIs WORk?"
// // function lowerCaseString(str) {
// //   sampleString = str.toLowerCase()
// // }
// // lowerCaseString(sampleString)
// // console.log(sampleString)
// //
// // const lowerCaseString =  str) => {
// //     sampleString = str.toLowerCase()
// // }
// //
// // console.log(sampleString)
// // lowerCaseString(sampleString)
// console.log(lowerCaseString(sampleString))
// // console.log((sampleString))

//Cannot log a value if nothing is returned, it would give back undefined.

// function greeting(greeting ='howdy!') {
//     return greeting;
// }
//     console.log(greeting())
//     console.log(greeting('Greetings!'))

let globalVar = 'Hello! My name is Globie'

function test() {
    let localVar = 'Hello, my name is Lola'
    console.log(localVar)
    {
        let innerVar = 'Nested Var!'
        console.log(innerVar)
        console.log(localVar)
    }
    console.log(globalVar)

}