import React, { Component, Suspense } from 'react';
import api from '../../api/api';
import { NavLink, Route, Switch } from 'react-router-dom';
import SerchingFilms from '../../components/SearchingFilms';
import Loading from '../../components/Loader';
import s from './MoviesPage.module.css';

const { getSearchMovies } = api;

class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
    error: '',
  };

  componentDidMount() {
    if (this.props.location.search) {
      getSearchMovies(this.props.location.search.slice(7)).then(movies => {
        this.setState({ movies });
      });
    }
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
    history.push({ ...location, search: `query=${this.state.query}` });
    this.state.query = '';
  };

  render() {
    const { movies, query, error } = this.state;
    return (
      <div>
       <div className={s.searchFormContainer}>
        <form className={s.searchForm} onSubmit={this.hendleSubmit}>
          <button type="submit" className={s.searchFormbutton}>
            <span className={s.searchFormbuttonlabel}>Search</span>
          </button>

          <input
            className={s.searchForminput}
            type="text"
            placeholder="Search movies.."
            value={query}
            onChange={this.handleChange}
          />
        </form>
        </div>
        <div>
          {
            <Suspense
              fallback={
                <div className="loaderContainer">
                  <Loading />
                </div>
              }
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
