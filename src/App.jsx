import { Component } from 'react';
import Mycars from './components/MyCars';
import MyHeader from './components/MyHeader';
import './App.css';

class App extends Component {

  render() {
    return (
       <div>

        <MyHeader />

        <Mycars />

        </div>
      
    );
  }
}

export default App;
