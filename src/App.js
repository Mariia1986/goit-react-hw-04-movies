
import {Switch, Route} from "react-router-dom"
import { Component, Suspense, lazy } from 'react';
import Navigation from './components/Navigation'
import Loading from "./components/Loader"
import  "./App.css"

const HomePage = lazy(() =>
  import('./pages/Homepage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MoviesDetailsPage = lazy(() =>
  import(
    './pages/MoviesDetailsPage' /* webpackChunkName: "movies-details-page" */
  ),
);

class App extends Component {
   
  render() {
    
 
    return (
    <div className="App">

        <Navigation /> 
         <Suspense
          fallback={
            <div className="loaderContainer">
              <Loading/>
            </div>
          }
        >
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/movies" exact component={MoviesPage} />
            <Route path="/movies/:moviesId" component={MoviesDetailsPage} />
          </Switch>
        </Suspense>
      
    </div>)
    
    
  
}}

export default App;
