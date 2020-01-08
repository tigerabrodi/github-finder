import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import HomePage from "./pages/home/Home"
import './sass/mystyles.scss';
import {Provider} from "react-redux"
import Navbar from './components/navbar/Navbar';
import store from './redux/store';
import UserPage from './pages/User/User';

const App = () => {
  return (
    <Provider store={store}>
    <Router>
    <Navbar />
    <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/user/:login" component={UserPage} />
    </Switch>
    </Router>
    </Provider>
  );
}

export default App;
