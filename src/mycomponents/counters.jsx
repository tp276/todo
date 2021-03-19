import React, { Component } from 'react';
import Counter from './counter'
import { Button } from 'reactstrap';

class Counters extends Component {
    state = { 
        counters: [
            {id:1,init_count:4},
            {id:2,init_count:0},
            {id:3,init_count:0},
            {id:4,init_count:0}
        ]
     }

        handleReset = ()=>{
           const counters =  this.state.counters.map( counter =>{
                counter.init_count = 0;
                return counter;
            })

            this.setState({
                counters
            })
        }



    render() { 
        return ( <div>
            <h1>List of counter buttons :</h1>
            <Button color="primary" onClick={this.handleReset}>Reset</Button>

            {
                this.state.counters.map( item =>
                    <Counter key={item.id} id = {item.id} value={item.init_count} selected= {true}
                    onDelete={ this.handleDelete }/>
                )
            }

        </div> );
    }

    handleDelete = counterId =>{
        console.log("handle delete clicked", counterId);
        const counter = this.state.counters.filter(c => c.id !== counterId);

        this.setState({
            counters: counter
        });
    }
}
 
export default Counters;