import React, { Component } from 'react';
import api from '../../api/api';
import { Link} from "react-router-dom"
const { getTrendFilms } = api;
// console.log(getTrendFilms());

class HomePage extends Component {
  state = {
    results: "",
  };

  componentDidMount() {
    getTrendFilms().then(results => {
      this.setState({ results });
    });
  }



  render() {
      const{results}=this.state
    console.log(results);
    return (
        <div>
        <h1>Trending today</h1>;
        <ul>
        {results.length>0 && results.map(({id, original_title})=>{
            return <li key={id}>
                <Link to={`movies/${id}`}>{original_title}</Link>
            </li>
          })}
        </ul>
        
          </div>
    )
  
  }
  
}

export default HomePage;
