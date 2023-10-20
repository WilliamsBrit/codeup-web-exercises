"use strict"

// Exercise 2

// function showMultiplicationTable(num1) {
//
//     for (let i = 1; i <= 10; i++) {
//
//         let result = i * num1
//
//         console.log(`${num1} * ${i} = ${result}`)
//
//     }
// }
//  showMultiplicationTable(2)


//
// Exercise 3

for(let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * ((200 - 20)+ 1) + 20)
    if (randomNum % 2 === 0) {
        console.log(`${randomNum} is even`)
    }else {
        console.log(`${randomNum} is odd`)

    }
}

// Exercise 4

// function pyramid() {
//     var totalNumberofRows = 9;
//     // var output = '';
//     for (var i = 1; i <= totalNumberofRows; i++) {
//         var output = '';
//         for (var j = 1; j <= i; j++) {
//             output += i + '';
//         }
//         console.log(output);
//         output = '';
//     }
// }
//
// pyramid();

//Exercise 5
for(let i =100; i >=5; i -=5) {
    console.log(i)
}

