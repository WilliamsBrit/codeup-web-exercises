// // Brittany Williams
// //"Daily Warm-ups"
//
// let name = "Brittany Williams"
// let year = "2006"
//
// console.log("My name is " + name + " and I graduated high school in " + year )
//
// // sets the parameter of string. Function slices the string leaving the 0 position
// // and then capitalizes the letter in position 0.
// function capitalizeFirstLetter(string) {
//
//     return string.charAt(0).toUpperCase() + string.slice(1)
//
// }
//
// console.log(capitalizeFirstLetter("brittany"))
//
// function largestNum(num1,num2,num3) {
//     return Math.max(num1,num2,num3);
// }
//
// console.log(largestNum(4,5,7))
//


// let num = 100
//     do {
//     console.log(num)
//         num -= 5
//      if (num % 2 === 0) {
//          console.log("even")
//      }
//
//  } while (num >= 0)

// function isEven() {
//     for (let i = 1; i < 100; i++) {
//         if (i % 2 === 0) {
//             console.log(i)
//         }
//     }
// }
// isEven()


    const faveMovies = ["The Grinch", "Friday", "How To Lose A Guy in 10 Days", "Nightmare Before Christmas", "Coraline"]
    faveMovies.sort()

    faveMovies.forEach(movies => console.log(`${movies}`));


const cars = [
    {
        make : "Toyota",
        model : "Camry",
        color :  "red"
    },
    {
        make : "Ford",
        model : "Explorer",
        color : "blue"
    },
    {
        make: "Dodge",
        model :"Charger",
        color : "orange"
    }

]
for (let car of cars) {
    console.log(`Make: ${car.make}  Model : ${car.model}   Color: ${car.color}`)
}

// Create a function that accepts three arguments (arrOfElements, bgColor, textColor), and returns the array of objects with their corresponding properties changed to the inputted values of bgColor and textColor.

    let elements = [
    {
        el: "button",
        style: {
            backgroundColor: "white",
            color: "black"
        },
        content: "Submit"
    },
    {
        el: "p",
        style: {
            backgroundColor: "white",
            color: "black"
        },
        content: "Our company is better at doing company things than your company."
    },
    {
        el: "h2",
        style: {
            backgroundColor: "white",
            color: "black"
        },
        content: "Welcome Back!"
    }
];

function colors(arrOfElements, bgColor, textColor) {

    for(let i = 0; i < arrOfElements.length;i++) {
        arrOfElements[i].style.backgroundColor = bgColor
        arrOfElements[i].style.color = textColor
    }
    return arrOfElements
}

console.log(colors(elements,"red","purple"))