"use strict"

const numberOfFilms = +prompt('How many films have you already watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Name one of the films you have watched??', ''),
      b = prompt('How much would you rate it?', ''),
      c = prompt('Name one of the films you have watched?', ''),
      d = prompt('How much would you rate it?', '');
     
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;    

console.log(personalMovieDB);
