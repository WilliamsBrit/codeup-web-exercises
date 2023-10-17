"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color) {
//     if (color === "blue") {
//         return "Blue is the color of the sky!"
//     }else if
//         (color === "red") {
//         return "Apples are red."
//     }else {
//         return `I do not know about the color ${color}`
//     }
//
// }
    // console.log(analyzeColor("brown"))


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// const randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
    // console.log(analyzeColor(randomColor))
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

// let color= "yellow";
//
//  switch(color) {
//  case "red":
//  case "orange":
//  case "yellow":
//  case "green":
//  case "blue":
//  console.log("This is a popular color!");
//  break;
//  case "indigo":
//  case "violet":
//  console.log("These colors are rare.");
//  break;
//  default:
//  console.log("I do not know much about this color")
//
//  }

 // * TODO:
 // * Prompt the user for a color when the page loads, and pass the input from the
 // * user to your `analyzeColor` function. Alert the return value from your
 // * function to show it to the user.
 // */
// let userColor = prompt("Please enter your color of choice.")
//     alert (analyzeColor(userColor))

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(num,total) {
//     if (num === 0) {
//         return total
//     }else if (num === 1) {
//         return total - (.10 * total)
//     }else if (num === 2) {
//         return total - (.25 * total)
//     }else if (num === 3) {
//         return total - (.35 * total)
//     }else if (num === 4) {
//         return total - (.50 * total)
//     }else if (num === 5) {
//         return total - (1.00 * total)
//     }
// }
// console.log(calculateTotal(2,100))
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// const luckyNumber = Math.floor(Math.random() * 6);
//
// let bill = prompt("What is your total bill amount?")
// alert(`Your lucky number was ${luckyNumber}. Your price before discount was ${bill}. Your total after discount is ${calculateTotal(luckyNumber,bill)}`)

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

let userConfirm =confirm("Would you like to enter a number?")

function userNum() {
    // does user want to play?
    if (userConfirm === true) {
        const getNumber = parseInt(prompt("Please enter a number."));
        // checks number data type
        if (!isNaN(getNumber) && typeof getNumber === "number") {
            // check if number is even or odd
            if (getNumber % 2 === 0) {
                alert("The number is even.")
            }else {
                alert("The number is odd.")
            }
            alert(getNumber + 100)
            alert(Math.sign(getNumber))
        }

    }
    console.log(userConfirm)
}

console.log(userNum())

