import React, { Component } from 'react';
import './App.css';
import {Row,Col,Jumbotron} from 'react-bootstrap';
import AppButtonOne from './AppButtonOne.js';
import Background from './Background.js';
import BackgroundPic from './sunshine-and-clouds-background.jpg';
import RandomQuote from '../RandomQuote/RandomQuote.js';

var sectionStyle = {
  width: "100%",
  height: "100%",
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

	 componentWillMount() {
   		 this.props.getQuotes(); // FB DB object set to redux
  	 }

     andleOnChange = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  handleOnChangeGenre = (e) => {
    this.setState({
      genre: e.target.value
    })
  }

  render() {
	const {quotes} = this.props.quotes;

    return (
      <div style = { sectionStyle } >
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
          <AppButtonOne />
          <Background />
      </div>
    );
  }
}

export default App;
