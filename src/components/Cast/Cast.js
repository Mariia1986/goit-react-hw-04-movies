import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../api/api';
import s from './Cast.module.css';
const { getFilmActors } = api;

class Cast extends Component {
  state = {
    actors: [],
    error:"",
  };

  componentDidMount() {
    const id = this.props.match.params.moviesId;

    getFilmActors(id).then(cast => {
      this.setState({ actors: cast });
    }).catch(error => {
      this.setState({ error })});
  }

  render() {
    const { actors } = this.state;

    return (
      <ul className={s.castList}>
        {actors &&
          actors.map(({ profile_path, id, original_name, character }) => {
            return (
              <li className={s.castListItem} key={id}>
                <img
                  className={s.castListImg}
                  src={`https://image.tmdb.org/t/p/w500${profile_path} `}
                  alt={original_name}
                  width="200"
                />

                <p className={s.castListName}>{original_name}</p>
                <p className={s.castListharacter}>Character: {character}</p>
              </li>
            );
          })}
      </ul>
    );
  }
}

export default Cast;

Cast.propTypes = {
  id: PropTypes.string,
};
