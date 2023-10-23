(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
const person = {
    firstName: "Brittany",
        lastName: "Williams",
        sayHello() {
            return `Hello from ${person.firstName} ${person.lastName}!`
        }
    }
    console.log(person.sayHello()
    )

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // Answer added in #1

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

        let shoppers = [
            {name: 'Cameron', amount: 180},
            {name: 'Ryan', amount: 250},
            {name: 'George', amount: 320}
        ];

        shoppers.forEach(function(shopper) {
            let discount;
            let total;
            if (shopper.amount > 200) {
                discount = shopper.amount * .12;
                total = shopper.amount - discount;
                console.log(`${shopper.name} owes ${shopper.amount} before discount. After discount, pay ${total}!`)
            } else {
                console.log(`${shopper.name}, you do not qualify for a discount. Pay ${shopper.amount}!`)

            }
        })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    // let books = ['1985', 'To Kill a Mockingbird', 'Coldest Winter Ever', 'The Color Purple', 'Noel']

    const books = [
        {
            book: "1986",
            name: {
                firstName: "Anthony ",
                  lastName:  "Burgess",
            }
        },
            {
                book: "To Kill A Mockingbird",
                name: {
                    firstName: "Harper",
                     lastName:  " Lee",
                }
            },
            {
                book: "Coldest Winter Ever",
                name: {
                    firstName: "Sista",
                    lastName: "Soulja",
                }
            },
            {
                book: "The Color Purple",
                name: {
                    firstName: "Alice",
                    lastName: "Walker",
                }
            },
            {
                book: 'Noel',
                name: {
                    firstName: "Wanda",
                    lastName: "Sykes",
                }
            }

    ];
    console.log(`The title of the book is ${books[0].book} and the author is ${books[0].name.firstName}${books[0].name.lastName}`)
    console.log(`The title of the book is ${books[1].book} and the author is ${books[1].name.firstName}${books[1].name.lastName}`)
    console.log(`The title of the book is ${books[2].book} and the author is ${books[2].name.firstName} ${books[2].name.lastName}`)
    console.log(`The title of the book is ${books[3].book} and the author is ${books[3].name.firstName} ${books[3].name.lastName}`)
    console.log(`The title of the book is ${books[4].book} and the author is ${books[4].name.firstName} ${books[4].name.lastName}`)




    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     *

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

for (let i = 0; i <books.length;i++){
    console.log("Book #" + (i + 1 ));
    console.log("Title: ") + books[i].book;
    console.log("Author: " + books[i].name.firstName + " " + books[i].name.lastName);
    console.log("---");
}

function createBook(title, firstName,lastName) {
    let books = {
        book: "",
        author: {
            firstName: "",
            lastName:""
        }
    }
}
return books

function showBookInfo(book,bookNum) {
    console.log("Book #" + (i + 1 ));
    console.log("Title: ") + books[i].book;
    console.log("Author: " + books[i].name.firstName + " " + books[i].name.lastName);
    console.log("---");
}

})();
