"use strict";

// 22 Передача по ссылке или по значению

const obj = {
    a: 5,
    b: 5
};

// const copy = obj;
// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4,
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 18,
    y: 20
};

Object.assign({}, add);

const oldArray = ['a','b','c'];
const newArray = oldArray.slice();

newArray[1] = 'f';
console.log(newArray);
console.log(oldArray);




//19. Callback функция

// const obj = new Object(); //способ создания объекта

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// console.log(Object.keys(options).length);  //поэксперементировать с ним

// for (let key in options) {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
// }


//20 Объекты

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//     border: 'black',
//     bg: 'red'
//     },
//     makeTest: function () {
//         console.log('test');
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;


// console.log(Object.keys(options).length);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
// }
// }


// console.log(counter);

//21 массивы

// const arr = [2, 3, 6, 8, 10];
// arr[99]= 0;
// console.log(arr.length);

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// });

//свойство length состоит из последнего индекса +1

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i=0; i< arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }


// const str = prompt("","");
// const products = str.split(", ");
// console.log(products.join('; '));


//метод sort сортирует всё как строки




// function showFirstMessage(text) {
//     console.log(text);
// }

// showFirstMessage(); //вызов функциии обязательно нужна чтобы не забыть её


//функции в js

// const logg = "Привет,япися";
// console.log(logg.slice(5));



// function createCounter() {
//     let counter = 0;
//     const myFunction = function () {
//         counter = counter + 1;
//         return counter;
//     }
//     return myFunction;

// }

// const increment = createCounter();
// console.log(increment);
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();
// console.log('example increment', c1, c2, c3);


// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//        x: 7,
//        y: 4 
//     }
// };

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.c.x = 10;
// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20,
// };

// const clone = Object.assign({}, add);

// clone.d = 20;
// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice(); //в newArray кладется ссылка на предыдущий массив 
//slice -позволяет скопировать старый массив

// newArray[1] = 'fdfsdfdfs';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'fb'];

//       console.log(internet);

