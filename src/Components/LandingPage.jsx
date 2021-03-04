import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <Link to='/result'>
          <button>Let's find a movie</button>
        </Link>
      </div>
    )
  }
}

export default LandingPage;