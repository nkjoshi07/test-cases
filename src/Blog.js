import React, { Component } from 'react';

export default class Blog extends Component {
    render() {
        return (
            <div className='maincls'>
                <ul>
                    <li className='licls' key='angular'>Angular</li>
                    <li className='licls' key='node'>Node</li>
                    <li className='licls' key='react'>React</li>
                </ul>
                <div className='number'>
                    <span>one</span>
                    <span>two</span>
                </div>
                <div>
                    <button className='button my-button'>save</button>
                </div>
            </div>
        );
    }
}
