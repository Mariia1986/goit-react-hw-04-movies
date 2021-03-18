import React, {Component} from "react"
import api from '../../api/api';
const{ getSearchMovies}=api

class MoviesPage extends Component{

state={
query:'',
movies:[],

}

handleChange = (e) => {
    this.setState({ query: e.target.value });
  };
  hendleSubmit=(e)=>{
      e.preventDefault()
      getSearchMovies(this.state.query).then(movies=>
        {console.log(movies)})

  }

render(){
    return(
        <form className="searchForm}" onSubmit={this.hendleSubmit}>
        <button type="submit" className="searchFormButton">
          <span className="searchFormButtonLabel">Search</span>
        </button>

        <input
          className="searchFormInput"
          type="text"
          placeholder="Search movies.."
          value={this.state.query}
          onChange={this.hendleChange}
        />
      </form>
    )
}
}

export default  MoviesPage