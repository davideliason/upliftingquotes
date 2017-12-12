import React, { Component } from 'react';
// import './AppButtonOne.css';
import {Row,Col,Jumbotron} from 'react-bootstrap';
const colorStyle = {
	color: 'red'
}


class RandomQuote extends Component {
  constructor(){
    super();
    this.state = {
      quotes: []
    };
  }

	 componentDidMount() {

       fetch('https://random-quote-generator.herokuapp.com/api/quotes/')
       .then(results => {
         return results.json();
       }).then(data => {
        let quotes = data.map((quote) => {
          return (
              <div key={quote.results}>
               {quote.quote}
              </div>
            )
        })
          this.setState({quotes: quotes,
                      });
       })
  	 }

  render() {

    return (
      <div >
        <p>Quote</p>
        <div>
          <h3>Look: {this.state.quotes} </h3>
        </div>
      </div>
    );
  }
}

export default RandomQuote;
