import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';



class Header extends Component {
    state = {  }
    render() { 
        return ( <div>
            <Card>
                <CardBody>
                    <CardTitle 
                    className="display-3 font-weight-bold text-center"
                    style={{background:"yellow"}}>
                        Welcome to Courses Application
                    </CardTitle>
                </CardBody>
            </Card>
        </div> );
    }
}
 
export default Header;