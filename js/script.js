

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


const film      = prompt('Один из последних просмотренных фильмов?'),
      rating    = prompt('На сколько оцените его?'),
      film2     = prompt('Один из последних просмотренных фильмов?'),
      rating2   = prompt('На сколько оцените его?');

personalMovieDB.movies[film] = rating;
personalMovieDB.movies[film2] = rating2;

console.log(personalMovieDB);



