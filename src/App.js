
import {Switch, Route} from "react-router-dom"
import { Component, Suspense, lazy } from 'react';
import Navigation from './components/Navigation'
import HomePage from "./pages/Homepage"
import MoviesDetailsPage from "./pages/MoviesDetailsPage"
import MoviesPage from "./pages/MoviesPage"



class App extends Component {
   
  render() {
    
 
    return (
    <div className="App">

        <Navigation /> 
         <Suspense
          fallback={
            <div>
              {/* <Loading /> */}
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
