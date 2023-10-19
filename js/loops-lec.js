"use strict"

//While loops
// let i = 0;
//
// while(i < 10) {
//     console.log(i);
//     i++
// }

//Do While Loop
// let i = 12;
//
// do {
//     console.log(i)
//     i++
// } while(i <  10)

//---------------------------mini exercise-------------
// let num = 0;
//
// while(num < 100) {
//     console.log(num)
//     num = num + 5;
// }

// let num = 0
// do {
//     console.log(num)
//     num = num + 5
// } while (num < 0)

//mini game

const secretNumber = 7;
let guess;
let attempt = 0;

//do-while loop

do {
    guess = parseInt(prompt("Guess the secret number (1-10)."));
    attempt++
    if (guess === secretNumber){
        console.log("You have guessed the secret number.");
    }else {
        if(guess < secretNumber) {
            console.log("Try a higher number.")
        }else {
            console.log("Try a lower number.")
        }
        console.log("Incorrect Guess!" + attempt + "total attempts");
    }

}while (guess !== secretNumber)
