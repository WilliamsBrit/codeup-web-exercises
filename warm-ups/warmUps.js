// Brittany Williams
//"Daily Warm-ups"

let name = "Brittany Williams"
let year = "2006"

console.log("My name is " + name + " and I graduated high school in " + year )

// sets the parameter of string. Function slices the string leaving the 0 position
// and then capitalizes the letter in position 0.
function capitalizeFirstLetter(string) {

    return string.charAt(0).toUpperCase() + string.slice(1)

}

console.log(capitalizeFirstLetter("brittany"))

function largestNum(num1,num2,num3) {
    return Math.max(num1,num2,num3);
}

console.log(largestNum(4,5,7))