import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

class App extends Component{
  constructor(props) {
    super(props);
    this.state= {};

  }

  componentDidMount() {
    console.log('App componentDidMount fired')
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://imdb-api.com/en/API/Top250Movies/k_4bxjz0ej", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result.items[0].title);
      })
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <h1>Hello World, Again</h1>
    )
  }
}

export default App;