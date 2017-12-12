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
        console.log("state", this.state.pictures);
      })
  	 }

  render() {

    return (
      <div >
        <p>Background</p>
        <div>
          {this.state.pictures}
        </div>
      </div>
    );
  }
}

export default Background;
