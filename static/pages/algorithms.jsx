// Framework
import { h, Component, Fragment } from "/web_modules/preact";

// Components
import Navigation from '../components/navigation/navigation';

class Algorithms extends Component {
  render() {
    return (
      <Fragment>
        <Navigation/>
        <h2>Algorithms</h2>
      </Fragment>
    );
  }
}

export default Algorithms;