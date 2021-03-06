import React, { Component } from 'react';
// import './AppButtonOne.css';
import {Row,Col,Jumbotron} from 'react-bootstrap';
const colorStyle = {
	color: 'green'
}


class Background extends Component {
  constructor(){
    super();
    this.state = {
      pictures: [],
      quotes: []
    };
  }

	 componentWillMount() {
      fetch('https://randomuser.me/api/?results=500')
       .then(results => {
         return results.json();
       }).then(data => {
        let pictures = data.results.map((pic) => {
          return (
              <div key={pic.results}>
                <img src={pic.picture.medium} />
              </div>
            )
        })
          this.setState({pictures: pictures});
       })

       fetch('https://random-quote-generator.herokuapp.com/api/quotes/')
       .then(results => {
         return results.json();
       }).then(data => {
        let quotes = data.map((quote) => {
          return (
              <div key={quote.results}>
               {quote.quote} -{quote.author}
              </div>
            )
        })
          this.setState({quotes: quotes});
       })
  	 }

  render() {

    return (
        <Row>
            <Col xs={3}></Col>
            <Col xs={6}>
               <div>
                {this.state.quotes[Math.floor((Math.random() * this.state.quotes.length) + 1)]}
              </div>
            </Col>
            <Col xs={3}></Col>
        </Row>
    );
  }
}

export default Background;
