import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = { 
            value: this.props.value
         }
    }
    
    render() { 

        console.log("props",this.props);

        return (<div>
            { this.state.value > 0 ?
                <h1>{this.state.value}</h1> : <h1>Zero</h1>
        }
            
            <Button color="primary" onClick= {this.increaseCount}>Increase</Button>
            <Button color="danger" onClick= {() => this.props.onDelete(this.props.id)}>Delete</Button>
        </div> );
    }

    increaseCount = () => {
        this.setState ({
            value: this.state.value + 1 
        })
    }
}
 
export default Counter;