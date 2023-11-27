"use strict"

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Problem 1
const threeLanguanges = users.filter(user => user.languages.length >= 3);
console.log(threeLanguanges);

// Problem 2
const emails = users.map(user => user.email);
console.log(emails);

// Problem 3
const experience = users.reduce((total,user)=>{
    return total + user.yearsOfExperience / users.length
 }, 0)
console.log(experience)

//Problem 4

const longestEmail = users.reduce((longest, user) => (user.email.length > longest.length) ? user.email : longest, '');
console.log("Longest Email:", longestEmail);


// //Problem 5
//
let instructions = users.reduce(function(output,user,currentIndex) {
    if (currentIndex === users.length - 1) {
        return `${output} ${user.name}.`
    }
    return `${output} ${user.name},`;
}, "Your instructors are:")

})

