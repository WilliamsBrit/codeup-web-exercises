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
//
// const secretNumber = 7;
// let guess;
// let attempt = 0;
//
// //do-while loop
//
// do {
//     guess = parseInt(prompt("Guess the secret number (1-10)."));
//     attempt++
//     if (guess === secretNumber){
//         console.log("You have guessed the secret number.");
//     }else {
//         if(guess < secretNumber) {
//             console.log("Try a higher number.")
//         }else {
//             console.log("Try a lower number.")
//         }
//         console.log("Incorrect Guess!" + attempt + "total attempts");
//     }
//
// }while (guess !== secretNumber)

//----------------------------- For loops---------------------------------

// initialization, condition, operation
//
// for(let i = 10; i < 20; i++) {
//     console.log(i)
// }
//
// for(let num = 0; num < 100; num += 5) {
//     console.log(num)
// }
//
// let hello = "hello";
// for(let i = 0; i <= hello.length;i++) {
//     console.log(hello.charAt(i))
// }
//
// for( let i = 0, j = 9; i < 10; i++, j--) {
//     console.log("For loop iteration #" + i + ',j=' + j);
// }

//Breaking out of a loop
for(let i = 0; i < 100; i += 5) {
    console.log(i)
    // break;
    // console.log("Snippet never reached")
}

for(let i = 0; i < 100; i += 5) {
    console.log(i)
    if (i === 50) {
        break;
    }
}

// Continue the Next Iteration of a Loop
for(let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i)
}

for(let i = 1; i < 100; i++){
    if (i % 2 === 0) {
        continue;
    }
    console.log('Here is a lovely even number' + i);
}
//continue is like skipping the iteration continue 3...skips 3.

