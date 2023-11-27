import React, { Component } from 'react';
import AddCount from './AddCount';
import About from './About';

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div>
          done
        </div>
        <AddCount />
        {/* <About /> */}
      </>
    );
  }
}
