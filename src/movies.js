// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors( arrayMovies ) {
  let moviesDirectors = arrayMovies.map( (eachElem) => {
    return eachElem.director;
  });

  return moviesDirectors;
}

//console.log(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies( arrayMovies ) {

  let arraySpilberg = arrayMovies.filter( (eachElement) => {
    return eachElement.director === "Steven Spielberg" && eachElement.genre.includes("Drama");
  } )

  return arraySpilberg.length;
  
}

//console.log(howManyMovies(movies));


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage( arrayMovies ) {
  if (arrayMovies.length === 0) {
    return 0;
  }

  let total = arrayMovies.reduce( (acc, elem) => {
    if (elem.score === undefined) {
      return acc;
    } else {
      return acc + elem.score;
    }
  }, 0);

  let totalAvg = parseFloat((total / arrayMovies.length).toFixed(2));

  return totalAvg;

}
//console.log(scoresAverage(vacio));


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore( arrayMovies ) {
  let arrFilteredDrama = arrayMovies.filter( (eachElem) => {
    return eachElem.genre.includes("Drama");
  });
  let totalDramas = arrFilteredDrama.length;
  
  if (totalDramas === 0) {
    return 0;
  }

  let sumaTotal = arrFilteredDrama.reduce( (acc, elem) => {
    if (elem.score === undefined) {
      return acc;
    } else {
      return acc + elem.score;
    }
  }, 0);

  let avgDramas = parseFloat((sumaTotal / totalDramas).toFixed(2));

  return avgDramas;
  
  

}
//console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear( arrayMovies ) {

  let copyArrYear = JSON.parse(JSON.stringify(arrayMovies));
  
  copyArrYear.sort( (elem1, elem2 ) => {
    if ( elem1.year < elem2.year ) {
      return -1;
    } else if ( elem1.year > elem2.year ) {
      return 1;
    } else {
      if ( elem1.title > elem2.title ) {
        return 1;
      } else {
        return -1;
      }
    }
  })

  return copyArrYear;
}
//console.log(orderByYear(movies))


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically( arrayMovies ) {
  
  arrayMovies.sort( (elem1, elem2) => {
    if (elem1.title > elem2.title) {
      return 1;
    } else {
      return -1;
    }
  } );

  return arrayMovies.slice(0,20);
}
//console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
