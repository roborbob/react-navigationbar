import React, {Component} from 'react';
import Navigation from './container/Navigation/Navigation';
import './App.scss';

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
