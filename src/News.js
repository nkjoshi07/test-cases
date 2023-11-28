import React, { Component } from 'react';

export default class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newsCount: 0,
            addNumbers: 1,
            countDown: 0
        }
    }

    componentDidMount() {
        this.addTwoNumbers(0, 1)
        this.addCountInTime()
    }
    addTwoNumbers = (a, b) => {
        const c = a + b
        this.setState({
            addNumbers: c
        })
        return c
    }
    addCountInTime = () => {
        return new Promise((resolve, reject) => {
            setInterval(() => {
                this.setState({
                    countDown: this.state.countDown + 1
                })
                this.addTwoNumbers(1, 3)
                // this.addTwoNumbers(12, 20)
                resolve(true)
            }, 1000)
        })
    }
    render() {
        return (
            <div>
                {this.state.addNumbers}
                <h1 onClick={() => this.addTwoNumbers(12, 43)}>
                    {this.state.countDown}
                </h1>
            </div>
        );
    }
}
