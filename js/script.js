

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms =='' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for ( let i = 0; i < 2; i++){
        const film = prompt('Один из последних просмотренных фильмов?', ''),
        rating = prompt('На сколько оцените его?', '');  
        
        if ( film == null || film.length > 50 || film == "" || 
             rating == null || rating == ""){
                i--;
        } else { personalMovieDB.movies[film] = rating; }
        
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотренно довольно мало фильмов");
    } else if (personalMovieDB.count < 30) {
        console.log("Вы классный зритель");
    } else if (personalMovieDB.count >= 30){
        console.log("Вы киноман"); 
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for ( let i = 1; i <= 3; i++){
        let a = prompt( `Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB.genres[i - 1] = a;
    }
}

writeYourGenres();
