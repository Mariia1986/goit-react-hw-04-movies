import React, { Component } from 'react';
import api from '../../api/api';
import s from "./Cast.module.css"
const { getFilmActors } = api;

// console.log();

class Cast extends Component {
  state = {
    actors: [],
  };

  componentDidMount() {
    const id = this.props.match.params.moviesId;
    // console.log(getFilmActors(id));
    getFilmActors(id).then(cast => {
      this.setState({ actors: cast });
    });
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
