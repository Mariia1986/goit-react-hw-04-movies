const key = '0758483bbf141f2377e75ad4723d5ab5';
const baseUrl = 'https://api.themoviedb.org/3/';

const getTrendFilms = () => {
  return fetch(`${baseUrl}trending/movie/week?api_key=${key}`)
    .then(res => {
      return res.json();
    })
    .then(({ results }) => {
      return results;
    });
};

const getMovieInfo = id => {
  return fetch(`${baseUrl}movie/${id}?api_key=${key}`).then(res => {
    return res.json();
  });
};

const getSearchMovies = query => {
  return fetch(`${baseUrl}search/movie?query=${query}&api_key=${key}`)
    .then(res => {
      return res.json();
    })
    .then(({ results }) => {
      if (results.length === 0) {
        return Promise.reject(`Nothing found for your request: ${query}`);
      }
      return results;
    });
};

const getFilmActors = id => {
  return fetch(`${baseUrl}movie/${id}/credits?api_key=${key}`)
    .then(res => {
      return res.json();
    })
    .then(({ cast }) => {
      return cast;
    });
};

const getRewiesFilm = id => {
  return fetch(`${baseUrl}movie/${id}/reviews?api_key=${key}`)
    .then(res => {
      return res.json();
    })
    .then(({ results }) => {
      if (results.length === 0) {
        return Promise.reject('No reviews for this film');
      }
      return results;
    });
};

const api = {
  getTrendFilms,
  getMovieInfo,
  getSearchMovies,
  getFilmActors,
  getRewiesFilm,
};

export default api;
