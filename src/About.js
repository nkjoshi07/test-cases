import React, { Component } from 'react';

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Naveen Sharma',
            id: 10
        }
    }
    returnNumber = () => {
        return this.state.id
    }
    render() {
        return (
            <div>
                About
                <div className='divClass'>
                    Hello{this.returnNumber()}
                </div>
            </div>
        );
    }
}
