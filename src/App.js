import React, {Component} from 'react';
import Navigation from './component/Navigation/Navigation';
import './App.css';

class App extends Component {

  toggle = () => {
    console.log("clicked")
  }
  render() {
  return (
    <div className="App">
      <Navigation/>

    </div>
  );
  }
}

export default App;
