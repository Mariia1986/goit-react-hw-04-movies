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

const getSearchMovies=query=> {
    const url = `${baseUrl}search/movie?api_key=${key}&language=en-US&query=${query}`;
    return axios.get(url)
      .then(response => {
       
        return response.results;
      });
  }
  const  getFilmActors=id=>{
    const url = `${baseUrl}movie/${id}/credits?api_key=${key}&language=en-US`;
    return axios.get(url).then(response=> {return response.results;
    })
  }

  const getRewiesFilm=id=>{
    const url = `${baseUrl}movie/${id}/reviews?api_key=${key}&language=en-US&page=1`;
    return axios.get(url).then(response=> {return response.results;
    })
  }

  const api={
    getTrendFilms,
    getMovieInfo,
    getSearchMovies,
    getFilmActors,
    getRewiesFilm
  }

  export default api