import React, { Component, Suspense } from 'react';
import api from '../../api/api';
import { NavLink, Route, Switch } from 'react-router-dom';
import SerchingFilms from '../../components/SearchingFilms';

const { getSearchMovies } = api;

class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
    error: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    // if (query !== prevState.query) {
    //   getSearchMovies(query).then(movies => {
    //     this.setState({ movies });
    //   });
    // }
  }

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  hendleSubmit = e => {
    e.preventDefault();
    const { history, location } = this.props;

    getSearchMovies(this.state.query.toLowerCase()).then(movies => {
      this.setState({ movies });
    });
    history.push({ ...location, search: `query=${this.state.query.trim()}` });
    this.state.query=""
  };




  render() {
    const { movies, query, error } = this.state;
    return (
      <div>
        <form className="searchForm" onSubmit={this.hendleSubmit}>
          <button type="submit" className="searchFormButton">
            <span className="searchFormButtonLabel">Search</span>
          </button>

          <input
            className="searchFormInput"
            type="text"
            placeholder="Search movies.."
            value={query}
            onChange={this.handleChange}
          />
        </form>
        <div>
          {
            <Suspense
            // fallback={
            //   <div className={s.loaderContainer}>
            //     <Loading />
            //   </div>
            // }
            >
              <Route
                to={`/movies/query=${query}`}
                render={props => <SerchingFilms films={movies} {...props} />}
              />
            </Suspense>
          }

          {error && <h2 className="error-message">{error}</h2>}
        </div>
      </div>
    );
  }
}

export default MoviesPage;
