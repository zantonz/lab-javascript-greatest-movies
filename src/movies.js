// import { movies } from './data.js';
// const moviesArr = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

   const allDirectors = moviesArray.map((element) => {
      return element.director;
   });

   // Bonus
   const clearDirectors = allDirectors.filter((element, index) => {
      return allDirectors.indexOf(element) === index;
   });

   return clearDirectors;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

   const dramaSpielberg = moviesArray.filter((element) => {
      
      const genreMovie = element.genre.includes("Drama");
      const directorMovie = element.director.includes("Steven Spielberg");

      if(genreMovie && directorMovie){
         return true;
      } else {
         return false;
      }

   });

   return dramaSpielberg.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

   const sumScore = moviesArray.reduce((totalScore, element) => {

      totalScore += element.score;
      return totalScore;

   }, 0);

   const avgScore = sumScore / moviesArray.length;


   if (moviesArray.length === 0) {
      return 0;
   } else {
      return avgScore.toFixed(2);
   };


}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

   const sumScore = moviesArray.filter((element) => {

      return element.genre.includes('Drama');

   });

   const avgScore = scoresAverage(sumScore);

   return avgScore;

}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

   const moviesCopy = [...moviesArray];

   moviesCopy.sort((element1, element2) => {return element1.year - element2.year});

   return moviesCopy;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

   const manyTitles = moviesArray.map((element) => {
      return element.title;
   });

   const twentyTitles = manyTitles.slice(0, 20);
   
   return twentyTitles.sort();

}

function newTimeDuration(time){
   const hours = time.split('h');
   const hoursToMinutes = hours[0] * 60;

   const minutes = parseInt(hours[1]);

   const hoursMinutes = hoursToMinutes + minutes;

   return hoursMinutes;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
   
   const changeHourseToMinutes = moviesArray.map((element) => {

      const newTimeArray = {...element};

      newTimeArray.duration = newTimeDuration(element.duration);

      return newTimeArray;
   });

   return changeHourseToMinutes;
}

console.log(turnHoursToMinutes(movies));


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}