import axios from "axios"



const key= '507be643ea20df937acafa47be25902e';
const baseUrl=  'https://api.themoviedb.org/3/';


//  function getTrendFilms() {
//     const url = `${baseUrl}trending/movie/week?api_key=${key}`;

//     return axios.get(url).then(response=>{return response}).then(({results})=>{return results})
//   }

  const getTrendFilms = () => {
    return fetch(`${baseUrl}trending/movie/week?api_key=${key}`)
      .then(res => {
        return res.json();
      })
      .then(({ results }) => {
        return results;
      });
  };

 

  const getMovieInfo=id=>{
    const url = `${baseUrl}movie/${id}?api_key=${key}&language=en-US`
    return  axios.get(url).then(response=> {return response.data})
}

// const getSearchMovies=query=> {
//     const url = `${baseUrl}search/movie?api_key=${key}&language=en-US&query=${query}`;
//     return axios.get(url)
//       .then(response => {
       
//         return response.results;
//       });
//   }

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




  // const  getFilmActors=id=>{
  //   const url = `${baseUrl}movie/${id}/credits?api_key=${key}&language=en-US`;
  //   return axios.get(url).then(response=> {return response;
  //   }).then(({ cast }) => {
  //           return cast;
  //         })
  // }


  const  getFilmActors = id => {
    return fetch(`${baseUrl}movie/${id}/credits?api_key=${key}`)
      .then(res => {
        return res.json();
      })
      .then(({ cast }) => {
        return cast;
      });
  };

  // const getRewiesFilm=id=>{
  //   const url = `${baseUrl}movie/${id}/reviews?api_key=${key}`;
  //   return axios.get(url).then(response=> {return response.results;
  //   })
  // }
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


  const api={
    getTrendFilms,
    getMovieInfo,
    getSearchMovies,
    getFilmActors,
    getRewiesFilm
  }

  export default api