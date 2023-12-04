'use strict'


import RandomGreeting from "./greeting-logic.js";


// Function to handle form submission and generate greeting
 function generateGreeting() {
    const userName = document.getElementById('userName').value;
    const greeting = RandomGreeting();
    const greetingOutput = document.getElementById('greetingOutput');
    greetingOutput.innerHTML = `<p>${greeting}, ${userName}!</p>`;
}

// Attach the function to the button click event
document.getElementById('greetingForm').addEventListener('submit', function (event) {
    event.preventDefault();
    generateGreeting();
    console.log("click")
});
