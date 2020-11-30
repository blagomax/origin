"use strict";

if (4 == 9) {
    console.log('Ok');
} else {
    console.log('error');
}

let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
} 

//break and continue 


switch (num) {
    case 49:
        console.log('fuck!');
        break;
    case 111: 
        console.log('yeah!');
        break;
    default: 
        console.log('not today');
        break;
}

//применимо и для строк
