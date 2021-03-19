import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Todo extends Component {

  constructor(props){
    super(props);
    this.state = {
      todos: [],
      todo:''
    }
  }
  

  handleSubmit = (event)=>{
    event.preventDefault();
    

    const mytodos = this.state.todos;
    mytodos.push(this.state.todo);
    this.setState({
      todos: mytodos
      
    })
    
    event.target.reset();
  }

  

  render() { 
    return ( 
      <div><h1 className="heading">
              To do list
            </h1>
      <form className="input" onSubmit={this.handleSubmit}>
        <input type="text" onChange={(event) =>{ this.setState({ todo: event.target.value})}}/>&nbsp;&nbsp;
        <input type="submit" value="Add" className="btn btn-primary"/>
      </form>
      <div className="todoList">
        <ul>
          {this.state.todos.map( todo =>{
              return (<div><p><Input type="checkbox" />{todo} </p>
              </div>);
          })}
        </ul>
        </div>
   </div>)   
    
  }
}
 
export default Todo;