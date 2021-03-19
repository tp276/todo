import React, { Component } from 'react';
import { Jumbotron,Button } from 'reactstrap';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <Jumbotron className="text-center">
                <h1 className = "display-3">Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        </div> );
    }
}
 
export default Home;