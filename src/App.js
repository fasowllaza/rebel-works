import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import React from 'react'
import {Provider} from 'react-redux'
import store from "./store/index"
import Authentication from './pages/Authentication/Authentication';
import Redirect from './pages/Redirect/Redirect';
import HomePage from './pages/HomePage/HomePage';
import NowPlaying from './pages/NowPlaying/NowPlaying';
import Navbar from './components/Navbar';
import Detail from './pages/Detail/Detail';


function App() {
  return (
    <Provider store={store}>
      <div className="" style={{height:'100vh'}}>
        <Router>
          <div>
            <Navbar/>
          </div>
          <Switch>
            <Route exact path ="/authentication">
              <Authentication/>
            </Route>
            <Route exact path ="/redirect">
              <Redirect/>
            </Route>
            <Route exact path ="/home">
              <HomePage/>
            </Route>
            <Route exact path ="/nowPlaying">
              <NowPlaying/>
            </Route>
            <Route exact path ="/movie/:id">
              <Detail/>
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>

  );
}

export default App;
