import React from 'react';

import './navigation.less'

class Navigation extends React.Component {
  render() {
    return (
      <nav className="nav">
        <a className="navLink" href="/">Home</a>
        <a className="navLink" href="/static/pages/algorithms.html">Algorithms</a>
      </nav>
    );
  }
}