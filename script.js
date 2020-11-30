/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */


      /* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


/*
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

*/

'use strict';


let  numberOfFilms;

function start() {
     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
     }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [], 
    privat: false
};




function rememberMyFilms() {
    for (let i = 0; i < 2; i++)
{
    const a = prompt('Один из последних просмотренных фильмов', 'Россомаха'),
      b = prompt('На сколько оцените его', '');

    if (a != null && b != null && a != '' && b !='' && a.length < 50) 
    {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10  && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log('error');
    }
    
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();


let question;
function writeYourGenres() {
    for (let i = 1; i <= 3; i++)
    {
        question = prompt('Ваш любимый жанр под номером ${номер по порядку}', 'Россомаха');
        personalMovieDB.genres[i-1] = question;
}
}

writeYourGenres();

console.log(personalMovieDB.genres);



// for (let i = 1; i <2; i++) {
//     personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     while (personalMovieDB.count == '')
//     {
//         alert('Ошибка, введите корректное значение');
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
//     if (personalMovieDB.count < 10) {
//         alert ("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 || personalMovieDB.count <= 30 ) 
//     {
//         alert ("Вы классический зритель");
//     } else if (personalMovieDB.count >30)
//     {
//         alert ("Вы киноман");
//     } else {
//         alert('Произошла ошибка');
//     }
//     personalMovieDB.movies = prompt('Один из последних просмотренных фильмов', 'Россомаха');
//     while (personalMovieDB.movies == '' && length(personalMovieDB.movies)  <=50)
//     {
//         alert('Ошибка, введите корректное значение');
//         personalMovieDB.movies = prompt('Один из последних просмотренных фильмов', 'Россомаха');
//     }
//    let c = prompt('На сколько оцените его', '');
//    console.log(personalMovieDB.count, personalMovieDB.movies, c);
// }

// const a = prompt('Один из последних просмотренных фильмов', 'Россомаха'),
//       b = prompt('На сколько оцените его', ''),
//       c = prompt('Один из последних просмотренных фильмов', 'Россомаха'),
//       d = prompt('На сколько оцените его', '');


//       personalMovieDB.movies[a] = b;
//       personalMovieDB.movies[c] = d;

//       console.log(personalMovieDB);










// let num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++; //инкремент
// }

// do {
//     console.log(num);
//     num++; //инкремент
// }
// while (num < 55);

// for (let i = 1; i<10; i++) {
//     console.log(num);
//     num++;
// }

