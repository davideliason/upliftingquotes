import React, { Component } from 'react';
// import './AppButtonOne.css';
import {Row,Col,Jumbotron} from 'react-bootstrap';
const colorStyle = {
	color: 'blue'
}


class Background extends Component {
  constructor(){
    super();
    this.state = {
      pictures: [],
      quotes: []
    };
  }

	 componentDidMount() {
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
               {quote.author}
              </div>
            )
        })
          this.setState({quotes: quotes});
       })
  	 }

  render() {

    return (
      <div >
        <p>Background</p>
        <div>
          {this.state.quotes}
          {this.state.pictures}
        </div>
      </div>
    );
  }
}

export default Background;
