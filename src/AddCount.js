import React, { Component } from 'react';

export default class AddCount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
   
    render() {
        return (
            <div className={`class-${this.state.count}`}>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    {`click ${this.state.count} time`}
                </button>
            </div>
        );
    }
}
