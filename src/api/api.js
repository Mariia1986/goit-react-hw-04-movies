import axios from 'axios'



const key= '0758483bbf141f2377e75ad4723d5ab5';
const baseUrl=  'https://api.themoviedb.org/3/';
const options= 'movie/popular?';

getTrendFilms() {
    const url = baseUrl + options + `api_key=${key}&language=en-US`;

    axios.get(url).then(response=>{return response.data.result})
  }

 

 getMoviebyId=id=>{
    const url = `${this.baseUrl}movie/${id}?api_key=${this.key}`
    axios.get(url).then(response=> {return response.data})
}

getSearchMovies(query) {
    const url = `${this.baseUrl}search/movie?api_key=${key}&language=en-US&query=${query}`;
    return axios(url)
      .then(response => {
       
        return response.results;
      });
  },