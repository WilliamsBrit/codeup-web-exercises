"use strict"
// function findLastCommit (name) {
//
//     let url =  `https://api.github.com/users/${name}/events/public`
//     fetch(url,  {headers: {'Authorization': 'token' + GITHUB_API_KEY}})
//         // turning into json to make it more viewable
//         .then(response => response.json())
//         .then(data => console.log(data[0].payload.commits[0]))
//         .catch(error => console.log("Error" + error))
// }
//
// findLastCommit("williamsBrit")

function getLastCommit(username, token) {
    return fetch(`https://api.github.com/users/${username}/events/public`, {
        headers: {
            'Authorization': 'token' + token
        }
    })
        .then(response => response.json())
}

getLastCommit('williamsBrit', GITHUB_API_KEY)
    .then(data => {
        console.log(data)
        let commit = data.filter(event => event.type === "PushEvent")
        console.log(commit);
        console.log(commit[0].created_at)
    })
