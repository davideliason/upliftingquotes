import React, { Component } from 'react';
import './App.css';
import {Grid,Row,Col,Jumbotron,PageHeader} from 'react-bootstrap';
import Background from './Background.js';
import BackgroundPic from './sunshine-and-clouds-background.jpg';


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

      <div>
       <Jumbotron>
          <h3></h3>
      </Jumbotron>
      <PageHeader>Inspirational Quotes<small>  because life can be hard</small></PageHeader>
      <Grid>
        <Row>
              <Col xs={1}></Col>
              <Col xs={4}>
              </Col>
              <Col xs={5}></Col>
              <Col xs={3}>
                  <a href="https://github.com/davideliason/upliftingquotes/commits/master">Repo</a>
              </Col>
               <Col xs={3}>
                  <a href="https://github.com/davideliason/davideliason.github.io">Github Portfolio</a>
               </Col>
              <Col xs={4}></Col>
        </Row>
         
        <Row>
            <Col xs={5}></Col>
            <Col xs={10}>
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
            <Col xs={5}></Col>
        </Row>
        <Row>
            <Col xs={5}></Col>
            <Col xs={10}>
               {quotes && quotes.length > 0 ? (
              <ul>
                {quotes.map((quote, index) => {
                  return (
                    <li key={index}>
                      {quote.quote}  -{quote.author} ({quote.genre})
                    </li>
                  );
                })}
              </ul>
            ) : null}
            </Col>
            <Col xs={5}></Col>
        </Row>
      </Grid>

        <Background />

      </div>
    );
  }
}

export default App;
