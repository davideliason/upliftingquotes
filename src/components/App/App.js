import React, { Component } from 'react';
import './App.css';
import {Row,Col,Jumbotron} from 'react-bootstrap';
import Background from './Background.js';
import BackgroundPic from './sunshine-and-clouds-background.jpg';

var sectionStyle = {
  width: "100%",
  height: "1000px",
  backgroundImage: "url(" + BackgroundPic + ")",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};

const colorStyle = {
	color: 'green'
}


class App extends Component {
  
  constructor(){
    super();
    this.state={
      quote : "",
      author : ""
    }
  }

	 componentDidMount() {
   		 this.props.getQuotes(); // FB DB object set to redux
  	 }

  render() {
	const {quotes} = this.props.quotes;

    return (
      <div style = { sectionStyle } >
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
        <Row>
            <Col xs={3}></Col>
            <Col xs={6}>
                <input
                  placeholder = "quote"
                  type="text"
                  value={this.state.quote}
                  onChange={e => this.setState({ quote: e.target.value })}
                />
                <input
                  type="text"
                  placeholder = "author"
                  value={this.state.author}
                  onChange={e => this.setState({ author: e.target.value })}
                />
               
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => this.props.addQuote(this.state.quote,this.state.author)}
                >
                  Add Quote
                </button>
            </Col>
            <Col xs={3}></Col>
        </Row>
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

        <Row>
            <Col xs={5}></Col>
            <Col xs={4}>
               <Background />
            </Col>
            <Col xs={3}></Col>
        </Row>

      </div>
    );
  }
}

export default App;
