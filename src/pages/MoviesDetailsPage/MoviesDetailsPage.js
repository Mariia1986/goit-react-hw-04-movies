import { Component, Suspense, lazy } from 'react';
import api from '../../api/api';
import FilmDetails from '../../components/FilmDetails';
import { NavLink, Route, Switch } from 'react-router-dom';
import Loading from '../../components/Loader';
import '../../App.css';
import s from './MoviesDetailsPage.module.css';
const { getMovieInfo } = api;

const Cast = lazy(() =>
  import(
    '../../components/Cast' /* webpackChunkName: "movie-details-page-cast" */
  ),
);

const Rewievs = lazy(() =>
  import(
    '../../components/Rewievs' /* webpackChunkName: "movie-details-page-reviews" */
  ),
);

class MoviesDetailsPage extends Component {
  state = {
    filmDetail: [],
  };

  componentDidMount() {
    const id = this.props.match.params.moviesId;

    getMovieInfo(id).then(result => {
      this.setState({ filmDetail: { ...result } });
    });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push('/');
  };

  render() {
    const { filmDetail } = this.state;
    const { location, match } = this.props;
    return (
      <div>
        <button
          className={s.buttonGoBack}
          onClick={this.handleGoBack}
          type="button"
        >
          {'<- Go back'}
        </button>
        <div>{filmDetail && <FilmDetails filmDetail={filmDetail} />}</div>
        <div>
          <h2 className={s.filmDetailsTitle}>Additional information</h2>
          <ul className={s.navContainer}>
            <li className={s.navItem}>
              <NavLink
                className={s.navLink}
                activeClassName={s.activeNavLink}
                to={{
                  pathname: `${match.url}/cast`,
                  state: { ...location.state },
                }}
              >
                Cast
              </NavLink>
            </li>
            <li className={s.navItem}>
              <NavLink
                className={s.navLink}
                activeClassName={s.activeNavLink}
                to={{
                  pathname: `${match.url}/rewievs`,
                  state: { ...location.state },
                }}
              >
                Rewievs
              </NavLink>
            </li>
          </ul>
          <Suspense
            fallback={
              <div className="loaderContainer">
                <Loading />
              </div>
            }
          >
            <Switch>
              <Route
                path={`${this.props.match.path}/cast`}
                render={props => <Cast {...props} />}
              />
              <Route
                path={`${this.props.match.path}/rewievs`}
                render={props => <Rewievs {...props} />}
              />
            </Switch>
          </Suspense>
        </div>
      </div>
    );
  }
}

export default MoviesDetailsPage;
