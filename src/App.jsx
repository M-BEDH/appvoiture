import { Component } from 'react';
import Mycars from './components/Mycars';
import './App.css';
import Welcome from './components/Welcome';
import Maman from './components/Maman';
import Toto from './components/Toto'

class App extends Component {

  render() {
    return (
      <div className='App'>

      <Mycars />
      <Welcome />
      <Maman />

      </div>
    )
  }
}

export default App;