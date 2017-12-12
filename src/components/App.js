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
        <Jumbotron>
          <h3>Inspirational Quotes</h3>
        	<Row>
             	<Col xs={2}></Col>
             	<Col xs={2}>
                	<a href="https://github.com/davideliason/favorite-books-react-redux-firebase">Repo</a>
            	 </Col>

             	<Col xs={2}></Col>
                <Col xs={2}>
              	  <a href="https://github.com/davideliason/davideliason.github.io">Github Portfolio</a>
             	 </Col>
             	<Col xs={2}></Col>
           </Row>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
