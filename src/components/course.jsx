import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


    
    const Course = ( {course} ) => { 
        return ( <div>
                    <Card className="text-center">
                        <CardBody>
                        <CardTitle tag="h5">{ course.name }</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2  font-weight-bold">{course.description}</CardSubtitle>
                        <CardText>{course.description }</CardText>
                        <Button color="danger">Delete</Button>&nbsp;<Button color="primary">Update</Button>
                        </CardBody>
                    </Card>
                </div>
         );
    }

 
export default Course;