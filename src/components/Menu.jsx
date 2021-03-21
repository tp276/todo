import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
class Menu extends Component {
    state = {  }
    render() { 
        return ( <div>
            <ListGroup>
                <ListGroupItem tag="a" href="/">Home</ListGroupItem>
                <ListGroupItem tag="a" href="/allcourses">Courses</ListGroupItem>
                <ListGroupItem tag="a" href="#">Add Course</ListGroupItem>
                <ListGroupItem tag="a" href="#">Contact Us</ListGroupItem>
                <ListGroupItem tag="a" href="#">About Us</ListGroupItem>
            </ListGroup>
        </div> );
    }
}
 
export default Menu;