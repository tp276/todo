import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Jumbotron,Row,Col,Container } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

class Todo extends Component {

  constructor(props){
    super(props);
    this.state = {
      todos: [],
      todo:'',
      dates:[],
      date:'',
      taskDateOver:[],
      srcs:[],
      flag:0,
      data: []
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
      
      this.setState({
        dates: mydates,
        date:''
      })
    }
    if(this.state.flag == 0){
      const emp_srcs = this.state.srcs;
      emp_srcs.push("");
      this.setState({
        srcs:emp_srcs
      })
    }
    this.setState({
      flag:0
    })   
    if(this.state.todo == '' || this.state.date == ''){
      this.notifyIncomplete();
    }
   if(this.state.todo !== '' && this.state.date !== '')
      this.checkTaskDate();


    let temp_array = [];
    let data_array=[];
    let i,j;
    for(i=0; i< this.state.todos.length; i++){
      
        temp_array.push(this.state.todos[i]);
        temp_array.push(this.state.dates[i]);
        temp_array.push(this.state.taskDateOver[i]);
        temp_array.push(this.state.srcs[i]);
      
        data_array.push(temp_array);
        temp_array=[];
    }
    const final = this.state.data;
    final.push(data_array);
    this.setState({
      data:final
    })
    }

  checkTaskDate = ()=>{

      console.log('printing the dates array',this.state.dates);
      let today = new Date();
      let curr_date = today.getDate();
      let curr_month = today.getMonth() + 1;
      let curr_year = today.getFullYear();
      let curr_full_date = curr_year + '-' + curr_month + '-' + curr_date;
      let p = curr_full_date.split('-');
      let md = new Date(p[0], p[1] - 1, p[2]);
      let todayDate = md.toDateString();
      console.log('current date',todayDate);
        
        let taskDateCheck= [];
        let length = this.state.dates.length;
        let index = length -1;
        //console.log(index)
        let date = this.state.dates[index];
        let parts = date.split('-');
        let mydate = new Date(parts[0], parts[1] -1, parts[2]);
        let taskDate = mydate.toDateString();
        console.log('date fetched from array',taskDate);
         

        taskDateCheck = this.state.taskDateOver;
        

        var g1 = new Date(todayDate);
        console.log('g1 = ',g1);
        var g2 = new Date(taskDate);
        console.log('g2=', g2);

        if (g1.getTime() < g2.getTime())
          taskDateCheck.push(false);
        if (g1.getTime() === g2.getTime())
          taskDateCheck.push(false);  
        if (g1.getTime() > g2.getTime())
          taskDateCheck.push(true);  
      this.setState({
        taskDateOver: taskDateCheck
      })
      console.log('printing the length of the taskDateOver array',this.state.taskDateOver.length);
      this.state.taskDateOver.map( res =>{
      console.log("task date over array each element: ",res);
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
    const delsrcs = this.state.srcs;
     
    if(index > -1){
      deltodos.splice(index,1);
      deldates.splice(index,1);
      deltaskCheckDate.splice(index,1);
      delsrcs.splice(index,1);
    }

    this.setState({
      todos:deltodos,
      todo:'',
      dates:deldates,
      date:'',
      taskDateCheck:deltaskCheckDate,
      srcs:delsrcs
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

  getImage = (event)=>{
    let file = event.target.files;
    if(file)
    {
      this.setState({
        flag:1
      });

        let reader = new FileReader();
        reader.readAsDataURL(file[0]);

        reader.onload = (e) =>{
        const mysrcs = this.state.srcs;
        mysrcs.push(e.target.result);
    }
    }
    }
    
  render() { 
    return ( 
      <div>
        
        <Jumbotron>
        <h1 className="display-3 text-center">To Do App</h1>
        <p className="lead text-center">This is a simple to app to keep your life easy...</p>      
        </Jumbotron>
        
        
        <form className="input" onSubmit={this.handleSubmit} className="text-center">
          <input type="text" onChange={(event) =>{ this.setState({ todo: event.target.value})}}/>&nbsp;&nbsp;
          <label>Finish date</label>&nbsp;
          <input type = "date"
            onChange={(event)=>{this.setState({date: event.target.value})}}/>&nbsp;&nbsp;
          <input type="file" 
          className="btn btn-lg btn-primary" 
          id="file-selector"
          accept=".jpg, .jpeg, .png"
          onChange={(e) => this.getImage(e)}/> &nbsp;&nbsp;
          <input type="submit" value="Add" className="btn btn-lg btn-primary"/>

          <ToastContainer
          position="bottom-right" 
          autoClose={2000}/>
        </form>
      
        <br/>
        <br/>
        <div className="todoList">
          <ul>
            {this.state.todos.map( todo =>{
                let index = this.state.todos.indexOf(todo);
                
                return (<div>
                  
                  <Container>
                  <Row>
                  <Input 
                  type="checkbox"
                  onClick={this.handleCheckbox.bind(this.value)}
                  value={todo}/></Row> 
                  
                  
                  <Row>
                  <Col style={{fontWeight:'bold'}}>
                  
                  {todo}
                  </Col>
                  <Col>
                    finish by: &nbsp; 
                  {this.state.dates[index]}&nbsp;</Col>
                  
                  <Col>
                    {
                    (this.state.taskDateOver[index] == true) ? 
                    <p style={{color:'red'}}>Task date over</p>: <p>Task pending</p>
                    }
                  </Col>
                  
                  <Col>
                      <img src = {this.state.srcs[index]} height= "200"/>
                  </Col>

                  
                  </Row>
                  </Container>
                </div>);
            })}
          </ul>
          </div>
        </div>);   
  }
}

export default Todo;