// Framework
import React from 'react';

// Styles
import './navigation.less'

class Navigation extends React.Component {
  render() {
    return (
      <nav className="nav">
        <a className="navLink" href="/">Home</a>
        <a className="navLink">Algorithms</a>
      </nav>
    );
  }
}

export default Navigation;