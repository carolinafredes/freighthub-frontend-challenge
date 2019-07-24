// /*-----------LIBRARIES---------------------------*/
import React, { Component } from "react";

class Shipments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/shipments')
      .then(response => response.json())
      .then(json => {

        setTimeout(_ => {
          this.setState({
            data: json
          });
        }, 2000);

      });
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        test
      </div>
    );
  }
}
export default Shipments;
