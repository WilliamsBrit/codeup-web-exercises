"use strict"


let url = ("https://api.github.com/users/WilliamsBrit")
fetch(url, {headers: {'Authorization': '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'}})
    .then(response => response.json())
    .then(data => {
        console.log(data)

    })


