import React, { Component } from 'react';
import api from '../../api/api';
import { Link } from 'react-router-dom';
import s from './HomePage.module.css';
const { getTrendFilms } = api;

class HomePage extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    getTrendFilms().then(results => {
      this.setState({ results });
    });
  }

  render() {
    const { results } = this.state;
    const { location } = this.props;
    console.log(results);
    return (
      <div>
        <h1 className={s.header}>Trending today</h1>
        <ul className={s.trendList}>
          {results.map(({ id, original_title }) => {
            return (
              <li className={s.trendListItem} key={id}>
                <Link
                  className={s.navLink}
                  activeClassName={s.activeNavLink}
                  to={{
                    pathname: `movies/${id}`,
                    state: { from: location },
                  }}
                >
                  {original_title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default HomePage;
