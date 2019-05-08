// Framework
import React from 'react';
import ReactDOM from 'react-dom';

// Pages
import Home from '../pages/home';
import Algorithms from '../pages/algorithms';

ReactDOM.render(<Home />, document.getElementById('app'));

module.hot.accept();