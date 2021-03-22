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
      taskDateOver:[]
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
      this.setState({
        todos:mytodos,
        todo:''
      })
    
    
    }

    if(this.state.todo !== '' && this.state.date !== ''){
      const mydates = this.state.dates;
      mydates.push(this.state.date);
      this.checkTaskDate(this.state.date);
      this.setState({
        dates: mydates,
        date:''
      })

      
    }

    

    if(this.state.todo == '' || this.state.date == ''){
      this.notifyIncomplete();
    }

    
  }

  checkTaskDate = (date)=>{
    let today = new Date();
      let curr_date = today.getDate();
      let curr_month = today.getMonth() + 1;
      let curr_year = today.getFullYear();
      let curr_full_date = curr_year + '-' + curr_month + '-' + curr_date;
      let p = curr_full_date.split('-');
      let md = new Date(p[0], p[1] - 1, p[2]);
      let todayDate = md.toDateString();
      console.log('current date',todayDate);

    
        let parts = date.split('-');
        let mydate = new Date(parts[0], parts[1] -1, parts[2]);
        let taskDate = mydate.toDateString();
        console.log('date fetched from array',taskDate);

      
        let b = taskDate < todayDate;
       

        const taskDateCheck = this.state.taskDateOver;
        taskDateCheck.push(b);
        this.setState({
          taskDateOver: taskDateCheck
        })
      
      

      
    
      console.log(this.state.taskDateOver.length);
      this.state.taskDateOver.map( res =>{
      console.log(res);
    });
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
    const deltaskCheckDate = this.state.taskDateOver;
     
    if(index > -1){
      deltodos.splice(index,1);
      deldates.splice(index,1);
      deltaskCheckDate.splice(index,1);
    }

    this.setState({
      todos:deltodos,
      todo:'',
      dates:deldates,
      date:'',
      taskDateCheck:deltaskCheckDate
    })

    event.target.checked = false;
    
  }

  handleDelete = (task)=>{
    console.log(task);
  }

  compareDate = ()=>{
    const today = new Date();
    console.log(today);
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
        <ToastContainer
        position="bottom-right" 
        autoClose={2000}/>
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
                </p>
                
                <p>
                {todo}&nbsp;</p>
                <p>
                  finish by: &nbsp; 
                {this.state.dates[index]}
                </p>
                <p>
                  {(this.state.taskDateOver[index] == true) ? <h4 style={{color:'red'}}>Task date over</h4>: <h4>Task pending</h4>}
                </p>
                
              </div>);
          })}
          
        </ul>
        </div>
        
   </div>);   
  }
}
 
export default Todo;