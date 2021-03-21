import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

class Todo extends Component {

  constructor(props){
    super(props);
    this.state = {
      todos: [],
      todo:'',
      dates:[],
      date:'',
      id:0
    }
  }
  

  handleSubmit = (event)=>{
    
    event.preventDefault();
    event.target.reset();

    if(this.state.todo !== '' && this.state.date !== ''){
      this.notify();
    }
    
    if(this.state.todo !== '' && this.state.date !== ''){
      const mytodos = this.state.todos;
    mytodos.push(this.state.todo);
    
    let inc_id = this.state.id;
      inc_id = inc_id + 1;
    this.setState({
      todos: mytodos,
      todo:'',
      id: inc_id
    })
    }

    if(this.state.todo !== '' && this.state.date !== ''){
      const mydates = this.state.dates;
      mydates.push(this.state.date);
      this.setState({
        dates: mydates,
        date:''
      })
    }

    if(this.state.todo == '' || this.state.date == ''){
      this.notifyIncomplete();
    }

    
  }

  notify = ()=>{
    toast.success("Task added");
  }

  notifyIncomplete = ()=>{
    toast.error("Enter both fields");
  }

  handleCheckbox = (event)=>{
    const task = event.target.value;   
    const deltodos = this.state.todos;
    const index = deltodos.indexOf(task);
    const deldates = this.state.dates;
     
    if(index > -1){
      deltodos.splice(index,1);
      deldates.splice(index,1);
    }

    this.setState({
      todos:deltodos,
      todo:'',
      dates:deldates,
      date:''
    })

    event.target.checked = false;

  }

  handleDelete = (task)=>{
    console.log(task);
  }
  

  render() { 
    return ( 
      <div>
        
        <h1 className="heading">
              To do list
            </h1>
      <form className="input" onSubmit={this.handleSubmit}>
        <input type="text" onChange={(event) =>{ this.setState({ todo: event.target.value})}}/>&nbsp;&nbsp;
        <label>Finish date</label>&nbsp;
        <input type = "date"
          onChange={(event)=>{this.setState({date: event.target.value})}}/>&nbsp;
        <input type="submit" value="Add" className="btn btn-primary"/>
        <ToastContainer/>
      </form>
      <div className="todoList">
        <ul>
          {this.state.todos.map( todo =>{
              let index = this.state.todos.indexOf(todo);
              
              return (<div>
                <p>
                <Input 
                type="checkbox"
                onClick={this.handleCheckbox.bind(this.value)}
                value={todo}/>
                {todo}&nbsp;</p><p>
                  finish by: &nbsp; 
                {this.state.dates[index]}
                </p>
              </div>);
          })}
          
        </ul>
        </div>
        
   </div>);   
  }
}
 
export default Todo;