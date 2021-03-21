import React from "react"
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from "./SearchingFilms.module.css"

const SerchingFilms=({films, match, location})=>{



    return(
        <ul className={s.searchList}>
            {films && films.map(({ id, original_title }) => (
          <li  key={id} className={s.searchListItem}>
            <NavLink
              to={{
                pathname: `${match.path}/${id}`,
                state: { from: location },
              }}
              className={s.navLink}
            >
           {original_title}
            </NavLink>
          </li>
        ))}
        </ul>
    )
}

export default withRouter(SerchingFilms)