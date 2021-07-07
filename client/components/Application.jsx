import React from  'react';

const Application = ({ app }) => {
  const { title, description, technology, githubURL, image } = app;
  return (
    <div>
      <ul>
        <li>{title}</li>
        <li>{description}</li>
        <li>{technology}</li>
        <li>{githubURL}</li>
        <li>{image}</li>
      </ul>
    </div>
  )
}

export default Application;
