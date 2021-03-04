import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import LandingPage from './LandingPage.jsx'
import ResultPage from './ResultPage.jsx'
import AboutPage from './AboutPage.jsx'


import '../style.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state= {};
  }

  componentDidMount() {
    console.log('App\'s componentDidMount fired')
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('https://imdb-api.com/en/API/Top250Movies/k_4bxjz0ej')
      .then(res => res.json())
      .then(data => {
        const { items } = data;
        this.setState({ ...items });
      });
  }

  render() {
    return (
      <div className="container">
        <Switch>

          <Route path='/result'>
            <ResultPage />
          </Route>

          <Route path='/about'>
            <AboutPage />
          </Route>

          <Route path='/'>
            <LandingPage />
          </Route>

        </Switch>
        <div className="container">
          <Link to='/about' id='about'>About Us</Link>
        </div>
      </div>
    )
  }
}

export default App;