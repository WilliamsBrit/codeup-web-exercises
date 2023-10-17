let age = 22;
//
// if (age >= 16) {
//     console.log("You're eligible to drive!")
//
// }
//
// if (age < 16) {
//     console.log("You cant drive!")
// }

//same example with if/else conditional
//
// if(age >= 16) {
//     console.log("You can drive.")
// } else {
//     console.log("You cannot drive!")
// }
//
// let currentDay = prompt("What is the day today?").toLowerCase();
//
// if(currentDay === 'monday' || currentDay === 'tuesday' || currentDay === 'wednesday') {
//     console.log("I love " + currentDay)
// } else {
//     console.log(currentDay + "is not a valid day.")
// }

// let letsPlay = confirm("Do you want to play?")
//
// if(letsPlay) {
//     console.log("Great, let's play!")
// } else {
//     console.log("Maybe next time.")
// }
//
const username = "user";
const password = "password";

// //prompt user to enter username and password
//
const inputedUsername = prompt("please enter a username.")
const inputedPassword = prompt("Please enter a password.")

//
// //next i want to console.log ("You're logged in.) if username, userUserName && password, userPassword match
//
// if(username === inputedUsername && inputedPassword === password) {
//     console.log("You're logged in.")
// }else if (username!== inputedUsername && password !== inputedPassword) {
//     console.log("Incorrect username and password")
// }else if (username !== inputedUsername) {
//     console.log("Incorrect username")
// }else if (password !== inputedPassword){
//     console.log("Incorrect Password")
// }

//Nested Conditional Example
// if(username === inputedUsername) {
//     if(password === inputedPassword) {
//         console.log("Logged In")
//     } else {
//         console.log("Incorrect password.")
//     }
//
// } else {
//     console.log("Invalid username")
// }
//
// //Ternary Operator
// // ? is if/true condition
// // : /else/false condition
// let name = "Bob";
// let greeting = (name === "Bob")  ? ("Hello, " + name) : ("Hello Stranger!");
// console.log(greeting);
//
// let currentCurrentDay = currentDay === 'monday' || currentDay === 'tuesday' || currentDay : currentDay + " is not a valid day";
// console.log(currentCurrentDay)

//Switch statement example
let daysOfWeek= "Monday";

switch(daysOfWeek) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("It's a weekday");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's a weekend day.");
        break;
    default:
        console.log("Invalid day of the week")

}

//using function and if/else
function sayHello(name) {
    if (name.length <= 20) {
        return `Hello, ${name}!`
    } else {
        return "That is way too long of a name."
    }
}
alert(sayHello("Lasso"))

