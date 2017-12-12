import React, { Component } from 'react';
import './App.css';
import {Row,Col,Jumbotron} from 'react-bootstrap';


class App extends Component {

	 componentDidMount() {
   		 this.props.getQuotes(); // FB DB object set to redux
  	 }

  render() {
    return (
      <div className="App">
         <p>hello world</p>
      </div>
    );
  }
}

export default App;
