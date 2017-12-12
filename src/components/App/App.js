import React, { Component } from 'react';
import './App.css';
import {Row,Col,Jumbotron} from 'react-bootstrap';
const colorStyle = {
	color: 'green'
}


class App extends Component {

	 componentDidMount() {
   		 this.props.getQuotes(); // FB DB object set to redux
  	 }

  render() {
	const {quotes} = this.props.quotes;

    return (
      <div className="App">
        <Jumbotron>
          <h3>Inspirational Quotes</h3>
        	<Row>
             	<Col xs={2}></Col>
             	<Col xs={2}>
                	<a href="https://github.com/davideliason/upliftingquotes/commits/master">Repo</a>
            	 </Col>

             	<Col xs={2}></Col>
                <Col xs={2}>
              	  <a href="https://github.com/davideliason/davideliason.github.io">Github Portfolio</a>
             	 </Col>
             	<Col xs={2}></Col>
           </Row>
        </Jumbotron>
        <Row>
            <Col xs={3}></Col>
            <Col xs={6}>
               {quotes && quotes.length > 0 ? (
              <ul>
                {quotes.map((quote, index) => {
                  return (
                    <li key={index} style={colorStyle} >
                      {quote.quote}  -{quote.author} ({quote.genre})
                    </li>
                  );
                })}
              </ul>
            ) : null}
            </Col>
            <Col xs={3}></Col>
          </Row>
      </div>
    );
  }
}

export default App;
