import { Component } from 'react';
import Mycars from './components/Mycars';
import './App.css';
import MyHeader from './components/MyHeader';

class App extends Component {

  render() {
    return (
      <div className='App'>
      
        {/* <Mycars title={this.state.title} style={{ color: this.state.color }} /> */}

      <Mycars />

      </div>
    )
  }
}

export default App;