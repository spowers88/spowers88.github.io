// Framework
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// Pages
import Home from '../pages/home';
import Algorithms from '../pages/algorithms';

// Components
import Navigation from '../components/navigation/navigation';

const App = () => (
  <BrowserRouter>
    <Navigation/>
    <main className="main">
      <Route path="/" exact component={Home} />
      <Route path="/algorithms.html" component={Algorithms} />
    </main>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();