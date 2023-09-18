import React from 'react'
import { Button, Card } from 'react-bootstrap'
import ReactStars from 'react-stars';

function Movie_card({props}) {
    console.log(props);
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          description : {props.description}
        </Card.Text>
        
        <ReactStars
        value={props.rating}
  count={5}
  size={24}
  color2={'#ffd700'} />
      </Card.Body>
    </Card>
    </>
  )
}

export default Movie_card