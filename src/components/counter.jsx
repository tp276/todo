import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0
      }

      formatCount(){
          const {count} = this.state;
          return count === 0? 'Zero': count;

      }

      getBadgeClasses(){
        let classes = "badge m-2 ";
        if(this.state.count ===0){
            classes = classes + "badge-warning"
        }
        else{
            classes = classes + "badge-primary"
        }
      }

      increamentCounter = () =>{
          this.setState({
              count : this.state.count + 1
          });
        }

    render() {      
        
        return ( 

        <React.Fragment>
        <div>
            <span className={this.getBadgeClasses()}><h3>{this.formatCount()}</h3></span>
            <button className='btn btn-sm badge-primary' onClick={this.increamentCounter}>Increament</button>
        </div>
        </React.Fragment>
        )}
}
 
export default Counter;