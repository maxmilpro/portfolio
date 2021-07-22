import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import AboutMe from './components/AboutMe.jsx';
import Applications from './components/Applications.jsx';

const App = () => {
  return (
    <>
      <AboutMe/>
      <Applications/>
    </>
  )
};

ReactDOM.render(<App/>, document.getElementById('root'));
