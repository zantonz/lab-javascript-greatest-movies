// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

   const allDirectors = moviesArray.map((element) => {
      return element.director;
   });

   return allDirectors;

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


// const mov = [
//    {
//      title: 'The Shawshank Redemption',
//      year: 1994,
//      director: 'Frank Darabont',
//      duration: '2h 22min',
//      genre: ['Crime', 'Drama'],
//      score: 9.3
//    },
//    {
//      title: 'The Godfather',
//      year: 1972,
//      director: 'Francis Ford Coppola',
//      duration: '2h 55min',
//      genre: ['Crime', 'Drama'],
//      score: 9.2
//    },
//    {
//      title: 'The Godfather: Part II',
//      year: 1974,
//      director: 'Francis Ford Coppola',
//      duration: '3h 22min',
//      genre: ['Crime', 'Drama'],
//      score: 9
//    },
//    {
//      title: 'The Dark Knight',
//      year: 2008,
//      director: 'Christopher Nolan',
//      duration: '2h 32min',
//      genre: ['Action', 'Crime', 'Drama', 'Thriller'],
//      score: 9
//    }];
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

   const sumScore = moviesArray.reduce((totalScore, element) => {

      totalScore += element.score;
      return totalScore;

   }, 0);

   const avgScore = sumScore / moviesArray.length;

   if(!avgScore.length){
      return 0;
   }else {
      // return Math.round(avgScore) / 100;
      return avgScore.toFixed(2);
   }

}

// console.log(scoresAverage(mov));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

   const sumScore = moviesArray.reduce((totalScore, element) => {

      const isDrama = element.genre.includes('Drama');
      if(isDrama){
         totalScore += element.score;
         return totalScore;
      }

   }, 0);

   const avgScore = sumScore / moviesArray.length;

   if(!avgScore.length){
      return 0;
   }else {
      return Math.round(avgScore) / 100;
   }

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

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
