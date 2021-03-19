import { Component, Suspense, lazy } from 'react';
import api from '../../api/api';
import FilmDetails from "../../components/FilmDetails"
import Cast from "../../components/Cast"
import Rewievs from "../../components/Rewievs"
import { NavLink, Route,Switch} from "react-router-dom"
const{getMovieInfo}=api


class MoviesDetailsPage extends Component{
    state={
       filmDetail:[],
    }

    componentDidMount(){
  const id=this.props.match.params.moviesId
// console.log(id)
getMovieInfo(id).then(result=>{ 
    this.setState({filmDetail:{...result}})
    
  })
    }


   

    render(){
        const{filmDetail}=this.state
        const{location}=this.props
        return(
            <div>
              <button onClick={()=>this.props.history.push(location.state.from)} type="button">Go back</button>
        <div>

     {filmDetail && < FilmDetails  filmDetail={filmDetail}/>}
        
         
            </div>
            <div>
                <h2>Additional information</h2>
              <ul>
                  <li>
                      <NavLink to={`${this.props.match.url}/cast`}>Cast </NavLink>
                      </li>
                      <li>
                      <NavLink to={`${this.props.match.url}/rewievs`}>Rewievs</NavLink>
                  </li>
                 
              </ul>
              <Suspense
            // fallback={
            // //   <div className={s.loaderContainer}>
            // //     <Loading />
            // //   </div>
            // }
          >
            <Switch>
              <Route
                path={`${this.props.match.path}/cast`}
                render={props => <Cast {...props}  />}
              />
              <Route
                path={`${this.props.match.path}/rewievs`}
                render={props => <Rewievs {...props} />}
              />
            </Switch>
          </Suspense>
            </div>
            </div>
        )
    }
}

export default  MoviesDetailsPage