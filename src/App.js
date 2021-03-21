import { Component } from 'react';
import './App.css';
import Home from './components/home';
import Course from './components/course';
import Allcourses from './components/Allcourses';
// import Movies from './components/movies';
// import Counters from './components/counters';
import Counter from './mycomponents/counter';
import Counters from './mycomponents/counters';
import Todo from './components/todo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container , Row, Col } from 'reactstrap';
import Header from './components/Header';
import Menu from './components/Menu';
import {
  BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

class App extends Component {
  render(){
  return (<div>
            <Todo/>
          </div>
  );
 }
}

export default App;
