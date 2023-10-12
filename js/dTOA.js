let a = 1
 console.log(a)
let b = a++
 console.log(b)
let c = ++a
 console.log(c)

//a =1 b = 1 c = 3

let d = "hello";
 console.log(d++)
let e = false;
console.log(e++)

//d = NaN e = 0

let perplexed;
perplexed + 2;

console.log(perplexed)

//undefined

// let price = 2.7;
//  price.toFixed(2);
//
//  console.log(price)

// 2.70

/**let price = "2.7";
price.toFixed(2);

console.log(price) */
// use parseInt to convert string to number

// error

// isNaN(0)
console.log(isNaN(0))
// false

// isNaN(1)
console.log(isNaN(1))
// false

// isNaN(")
console.log(isNaN(""))
// false

// isNaN("string)
console.log(isNaN("string"))
// true

// isNaN("0")
console.log(isNaN("0"))
//  false

//  isNaN("1")
console.log(isNaN("1"))
// false

// isNaN("3.145")
console.log(isNaN("3.145"))
// false

// isNaN(Number.MAX_VALUE)
console.log(isNaN(Number.MAX_VALUE))
// false

// isNaN(Infinity)
console.log(isNaN(Infinity))
// false

// isNaN("true")
console.log(isNaN("true"))
// true

// isNaN(true)
console.log(isNaN(true))
false

// isNaN("false")
console.log(isNaN("false"))
// true

// isNaN(false)
console.log(isNaN(false))
// false

// !true
console.log(!true)
// false

// !false
console.log(!false)
// true

// !!true
console.log(!!true)
// true

// !!false
console.log(!!false)
// false

// !!0
console.log(!!0)
//  false

// !!-0
console.log(!!-0)
// false

// !!1
console.log(!!1)
// true

// !!-1
console.log(!!-1)
// true

// !!0.1
console.log(!!0.1)
// true

// !!"hello"
console.log(!!"hello")
// true

// !!""
console.log("")
// false

//!!''
console.log('')
//false

//!!"false"
console.log(!!"false")
//true

//!!"0"
console.log(!!"0")
// true


// Exercise 2

let sample = "Hello Codeup";
console.log(sample.length);
//Hello Codeup, length 12
console.log(sample.toUpperCase())
//HELLO CODEUP
sample = sample + " students";
// shorthand sample += "students"

console.log(sample.replace ("students", "Class"))
// Hello CodeUp Class!

console.log(sample.indexOf("c"))
console.log(sample.indexOf("C"))

console.log(sample.substring(sample.indexOf("C"),12))

// Exercise 3

let mermaid = 3;
let bear = 5;
let hercules = 1;
let movieCost = 3;

console.log("The total cost is", (mermaid + bear + hercules) * movieCost)

// Exercise 3: Part 2

let googlePay = 400;
let amazonPay = 380;
let facebookPay = 350;

let googleHours = 6;
let amazonHours = 4;
let facebookHours = 10;

let totalPay=
    (googlePay * googleHours) +
    (amazonPay * amazonHours) +
    (facebookPay * facebookHours)


console.log( "Pay for the week is", (totalPay))

// Exercise 4

let username ='codeup';
let password = 'notastrongpassword';

let charLength = password.length >= 5;
console.log(charLength)

 let notInclude = !password.includes(username)
 console.log(notInclude)

 let userName = username.length < 21;
 console.log(userName)

let whiteSpace = (username.trim() == username) && (password.trim() == password);
console.log(whiteSpace)





