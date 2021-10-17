import React from "react"
import { ListGroup, ListGroupItem, Card } from "react-bootstrap";
import "./session.css"
import { Jumbotron } from "react-bootstrap";
import { Button } from "react-bootstrap";
function DisplaySession(props)
{
    return(
    // <div className="divCard">
    // <div className="alignCard">
    // <Card style={{ width: '18rem' }}>
    // <Card.Img variant="top" src={props.params.img} id="img-props-card" />
    // <Card.Body>
    //     <Card.Title>{props.params.title}</Card.Title>
    //     <Card.Text>
    //     <strong>{props.params.speaker}</strong>
    //     </Card.Text>
    // </Card.Body>
    // <ListGroup className="list-group-flush">
    //     <ListGroupItem>{props.params.feature1}</ListGroupItem>
    //     <ListGroupItem>{props.params.feature2}</ListGroupItem>
    //     <ListGroupItem>{props.params.feature3}</ListGroupItem>
    // </ListGroup>
    // <Card.Body>
    //     <Card.Link href="#">{props.params.date}</Card.Link>
    //     <Card.Link href="#">{props.params.time}</Card.Link>
    // </Card.Body>
    // </Card>
    // </div>
    // <br></br>
    // </div>
    <Jumbotron>
    <h1>{props.params.title}</h1>
    <Card.Img variant="top" src={props.params.img} id="img-props-card" />
    <p>
    {props.params.speaker}
    </p>
    <p>
        <Button variant="primary">Learn more</Button>
    </p>
    </Jumbotron>
    );
}

export default DisplaySession;