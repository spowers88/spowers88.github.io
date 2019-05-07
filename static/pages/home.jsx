// Framework
import React from 'react';

// Components
import Navigation from '../components/navigation/navigation';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation/>
        <h2>Home</h2>
      </React.Fragment>
    );
  }
}

export default Home;