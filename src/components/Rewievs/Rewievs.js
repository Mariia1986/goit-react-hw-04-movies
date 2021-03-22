import React, {Component} from 'react'
import api from '../../api/api';
import PropTypes from 'prop-types';
import s from "./rewievs.module.css"
const{getRewiesFilm}=api

class Rewievs extends Component{

state={
    rewievs:null,
    error: '',
}

componentDidMount(){
    const id=this.props.match.params.moviesId
    getRewiesFilm(id).then(reviews => {
        this.setState({ reviews });
      })
      .catch(error => {
        this.setState({ error });
      });
  
}


render (){
    const { reviews, error } = this.state;
    return(
        <div >
        <ul>
          {reviews ? (
            reviews.map(({ author, content, created_at, id }) => {
              return (
                <li key={id}>
                  <h4>{author}</h4>
                  <p>{created_at}</p>
                  <p>{content}</p>
                </li>
              );
            })
          ) : (
            <h2 className={s.errorMessage}>{error}</h2>
          )}
        </ul>
      </div>
    )
}

}

export default Rewievs

Rewievs.propTypes={
  id:PropTypes.string
}