import React from  'react';
import { Card, Button } from 'react-bootstrap';

const Application = ({ app }) => {
  const { title, description, technology, githubURL, image } = app;
  return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
          <Card.Text>{technology}</Card.Text>
          <Card.Link href={githubURL}>GitHub Repo</Card.Link>
        </Card.Body>
      </Card>
  )
}

export default Application;
