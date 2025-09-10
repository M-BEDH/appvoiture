import { Component } from 'react';
import Mycars from './components/MyCars';
import MyHeader from './components/MyHeader';
import './App.css';

function App() {
  return (
    <div>
      <MyHeader />
      <Mycars />
    </div>
  );
}

export default App;
