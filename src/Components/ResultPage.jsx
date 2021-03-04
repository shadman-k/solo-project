import React, { Component } from 'react';

class ResultPage extends Component {

  componentDidMount() {
    console.log('ResultPage\'s componentDidMount fired')
    const selector = Math.floor(Math.random() * 250)

  }

  render() {
    return (
      <div>
        <h1>Result Page</h1>
      </div>
    )
  }
}

export default ResultPage;