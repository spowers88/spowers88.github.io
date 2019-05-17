// Framework
import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './navigation.less'

class Navigation extends React.Component {
  render() {
    return (
      <nav className="nav">
        <a className="navLink" href="/">Home</a>
        <a className="navLink" href="/algorithms.html">Algorithms</a>
      </nav>
    );
  }
}

export default Navigation;