import React, { Component } from 'react';
import './App.css';
import Number from './Number';
import Operator from './Operator';

class Buttons extends Component {
    render() {
        return (
            <div className="buttons">
                <Number />
                <Operator />
            </div>
        );
    }
}

export default Buttons;
