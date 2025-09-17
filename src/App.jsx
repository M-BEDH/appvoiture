import { Component } from "react";
import Mycars from "./components/Mycars";
import "./App.css";
import Welcome from "./components/Welcome";
import Maman from "./components/Maman";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Mycars />
        <Welcome />
        <Maman />
        <Form head={true} />
      </div>
    );
  }
}

export default App;
