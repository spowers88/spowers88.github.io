// Framework
import { Component } from "/web_modules/preact";

// Styles
import './navigation.less'

class Navigation extends Component {
  render() {
    return (
      <nav className="nav">
        <a className="navLink" href="/">Home</a>
        <a className="navLink" href="/static/pages/algorithms.html">Algorithms</a>
      </nav>
    );
  }
}

export default Navigation;