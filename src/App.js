import { Component } from 'react';
import './App.css';
import Home from './components/home';
import Course from './components/course';
import Allcouses from './components/Allcourses';
// import Movies from './components/movies';
// import Counters from './components/counters';
import Counter from './mycomponents/counter';
import Counters from './mycomponents/counters';
import Todo from './components/todo';

class App extends Component {
  render(){
  return (<div>
    <Todo/>
  </div>
  );
 }
}

export default App;
