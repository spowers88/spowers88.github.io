// Framework
import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './navigation.less'

class Navigation extends React.Component {
  render() {
    return (
      <nav className="nav">
        <Link className="navLink" to="/">Home</Link>
        <Link className="navLink" to="/algorithms">Algorithms</Link>
      </nav>
    );
  }
}

export default Navigation;