import React from 'react';
import Application from './Application.jsx';
import applicationData from '../content/applications.js';

const Applications = () => {
  console.log(applicationData);
  return (
    <div>
      {applicationData.map((app, i) => <Application key={i} app={app}/>)}
    </div>
  )
}

export default Applications;
