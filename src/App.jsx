import { Component } from 'react';
import Mycars from './components/Mycars';
import './App.css';
import Welcome from './components/Welcome';

class App extends Component {

  render() {
    return (
      <div className='App'>
      
        {/* <Mycars title={this.state.title} style={{ color: this.state.color }} /> */}

      <Mycars />
      <Welcome />

      </div>
    )
  }
}

export default App;