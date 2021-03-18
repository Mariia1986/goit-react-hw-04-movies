import React, { Component } from 'react';
import api from '../../api/api';
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
    // console.log(actors);
    return (
      <ul>
        {actors &&
          actors.map(
            ({
              profile_path,
              id,
              original_name,
              character,
            }) => {return(
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={original_name}
                  width="200"
                />

                <p>{original_name}</p>
                <p>Character: {character}</p>
              </li>
            )
              
            },
          )}
      </ul>
    );
  }
}

export default Cast;
