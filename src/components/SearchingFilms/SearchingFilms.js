import React from "react"
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const SerchingFilms=({films, match, location})=>{



    return(
        <ul>
            {films && films.map(({ id, original_title }) => (
          <li key={id} className="film">
            <NavLink
              to={{
                pathname: `${match.path}/${id}`,
                state: { from: location },
              }}
              className="filmLink"
            >
           {original_title}
            </NavLink>
          </li>
        ))}
        </ul>
    )
}

export default withRouter(SerchingFilms)