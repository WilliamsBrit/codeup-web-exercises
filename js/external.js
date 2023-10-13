console.log("Hello from external Javascript.")

// Welcome Alert
alert("Welcome to my Website!")

// Prompt for favorite color
let userInput = prompt("What is your favorite color?")

alert(`${userInput} is my favorite color too!`)

//Exercise 3 continuation

alert("Welcome to the Movie Center")

// set variable for movie costs

let movieCost = 3;

// Prompt for Little Mermaid Movie
let mermaid = prompt("How many days did you keep The Little Mermaid?");
let mermaidCost = mermaid * movieCost
// Alert total cost for movie
alert(`The total cost for this movie is  $${mermaidCost}`)

// Prompt for Brother Bear Movie
let bear = prompt("How many days did you keep Brother Bear?");
let bearCost = bear * movieCost
// Alert total cost for movie
alert("The total cost for this movie is $" + bear * movieCost)

// Prompt for Hercules movie
let hercules = prompt("How many days did you keep Hercules?");
let herculesCost = hercules * movieCost
// Alert total cost for movie
alert("The total cost for this movie is $" + hercules * movieCost)

let totalCost = mermaidCost + bearCost + herculesCost
alert(`The total cost for all movie rentals is $${totalCost}`)

// // Exercise 3: Part 2

// Prompt user to enter hourly pay
let googlePay = prompt("How much do you make per hour from Google?")
// prompt user for hours worked
let googleHours = prompt("How many hours did you work this week?")
// total weekly pay from Google
let totalGoogle = googlePay * googleHours
alert(`Your total weekly pay from Google is $${totalGoogle}`)

// Prompt user to enter hourly pay
let amazonPay = prompt("How much do you make per hour from Amazon?")
// prompt user for hours worked
let amazonHours = prompt("How many hours did you work this week?")
// total weekly pay from Amazon
let totalAmazon = amazonPay * amazonHours
alert(`Your total weekly pay from Amazon is $${totalAmazon}`)

// Prompt user to enter hourly pay
let facebookPay = prompt("How much do you make per hour from Facebook?")
// prompt user for hours worked
let facebookHours = prompt("How many hours did you work this week?")
// total weekly pay from Facebook
let totalFacebook = facebookPay * facebookHours
alert(`Your total weekly pay from Facebook is $${totalFacebook}`)

let totalPay = totalGoogle + totalAmazon + totalFacebook
alert(`Your weekly take-home pay is $${totalPay}`)
//
/
