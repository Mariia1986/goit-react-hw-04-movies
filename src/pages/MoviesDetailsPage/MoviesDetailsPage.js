import { Component, Suspense, lazy } from 'react';
import api from '../../api/api';
import FilmDetails from '../../components/FilmDetails';
import Cast from '../../components/Cast';
import Rewievs from '../../components/Rewievs';
import { NavLink, Route, Switch } from 'react-router-dom';
import Loading from '../../components/Loader';
import '../../App.css';
const { getMovieInfo } = api;

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
        <button onClick={this.handleGoBack} type="button">
          Go back
        </button>
        <div>{filmDetail && <FilmDetails filmDetail={filmDetail} />}</div>
        <div>
          <h2>Additional information</h2>
          <ul>
            <li>
              <NavLink
                to={{
                  pathname: `${match.url}/cast`,
                  state: { ...location.state },
                }}
              >
                Cast{' '}
              </NavLink>
            </li>
            <li>
              <NavLink
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
