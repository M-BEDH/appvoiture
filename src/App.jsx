import { Component } from 'react';
import Mycars from './components/Mycars';
import './App.css';
import Welcome from './components/Welcome';
import Maman from './components/Maman';
import Image from './components/Image';
import Form from './components/Form';

class App extends Component {

  render() {
    return (
      <div className='App'>

      <Mycars />
      <Welcome />
      {/* <Image /> */}
       <Form /> 
      <Maman />

      </div>
    )
  }
}

export default App;