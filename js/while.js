"use strict"

let num = 1;

while(num < 65536) {
    num *= 2;
    console.log(num)
}

let allCones = Math.floor(Math.random() * 50) + 50;
let purchased;
let conesLeft;
console.log(`starting cones: ${allCones}`);

do {
    purchased = Math.floor(Math.random() * 5) + 1;
    // allCones -= purchased;

    if (allCones >= purchased){
        conesLeft = allCones -= purchased
        console.log(`${purchased} cones sold. `);
        console.log(`number of cones left : ${conesLeft}`)

        if (purchased  > conesLeft) {
            console.log(`Cannot sell you ${purchased}. There are only ${conesLeft} cones left.`);

            if (conesLeft === 0) {
                console.log('Yay! I sold them all!');
            }
        }
    }
}while (allCones !== 0);

