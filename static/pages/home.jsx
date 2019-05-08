// Framework
import { h, Component, Fragment } from "/web_modules/preact";

// Components
import Navigation from '../components/navigation/navigation';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navigation/>
        <h2>Home</h2>
      </Fragment>
    );
  }
}

export default Home;