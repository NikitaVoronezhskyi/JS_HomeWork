const movies = JSON.parse(mockedMovies);
const movieList = document.getElementById('movieList');
const ratingDiv = document.getElementById("rating")





renderMovies(movies, movieList);

movieList.addEventListener('click', e => {
  const title = e.target.closest('.movie-title')
  if (title) {
    console.log(title.innerText);
  }
})


function renderMovies(moviesData, listElement) {
  const moviesHTML = getHTMLFromArray(moviesData, createMovieTemplate);
  render(listElement, moviesHTML);
}

function getHTMLFromArray(array, createTemplate) {
  const htmlArray = array.map((item) => createTemplate(item));
  const htmlString = htmlArray.join('');
  return htmlString;
}

function createMovieTemplate(movie) {
  const stars = makeStarTemplate(movie.rating);
  return `<div class="movie">
  <h2 class="common-sm-title">${movie.name} (${movie.year})</h2>
  <h3 class="common-text">${movie.director}</h3>
  <p class="common-text">${movie.description}</p>
  <div class="rating">
  <div class="stars-rating">
  ${stars}          
  </div>
  <p class="rating-value">${movie.rating}</p>
  </div>
</div>`;
}

function render(element, html, where) {
  if (where) {
    element.insertAdjacentHTML(where, html);
  } else {
    element.innerHTML = html;
  }
}

/*
Чтоб вывести рейтинг в карточку 
1) Передать в  createMovieTemplate часть с рейтингом + 
2) Получить процент рейтинга если максимальное число 10.0
3) Вывести 5 звезд инпутами
4) Ширина заливки звёд должна ровнятся ширине в процентах
5) Если звезда уже залита то дополнительный рейтинг должен быть жёлты И когда она на оранжевых меняться только при клике
*/


const starsValue = document.getElementById("stars")




function makeStarTemplate(quantity) {
  const star = `<i class="fa-solid fa-star"></i>`
  const halfStar = '<i class="fa-solid fa-star-half"></i>'
  if (quantity % 1 == 0) {
     const rounded = star.repeat(quantity)
     return rounded
  } else{
     const half = star.repeat(quantity)+halfStar
     return half
  }
}





