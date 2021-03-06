import React from 'react';
import s from './filmDetails.module.css';
import PropTypes from 'prop-types';

const FilmDetails = ({ filmDetail }) => {
  const { title, backdrop_path, overview, genres } = filmDetail;
  return (
    <div>
      <h2 className={s.filmDetailsTitle}>{title}</h2>
      {
        <img
          className={s.filmDetailsImg}
          src={backdrop_path ? `https://image.tmdb.org/t/p/w500${backdrop_path}` : `https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'`}
          alt={title}
        />
       }
      <h3 className={s.filmDetailsTitle}>Owerview</h3>
      <p className={s.filmDetailsOverview}>{overview}</p>
      <h3 className={s.filmDetailsTitle}>Genres</h3>
      <ul className={s.genresList}>
        {genres &&
          genres.map(({ id, name }) => (
            <li className={s.genresListItem} key={id}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FilmDetails;

FilmDetails.propTypes = {
  filmDetail: PropTypes.array,
};
