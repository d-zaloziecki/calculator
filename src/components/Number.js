import React, { Component } from 'react';
import '../App.css';
import Button from './Button';
import { inject } from 'mobx-react';

@inject(allStores => ({
    pressANumber: allStores.store.pressANumber
}))

class Number extends Component {
    numbers = [7,8,9,4,5,6,1,2,3,0]
    render() {
        return (
            <div className="number">
                {this.numbers.map(n=>{return(
                    <Button key={n} value={n} onClickEvent={this.props.pressANumber} />
                )})}
            </div>
        );
    }
}

export default Number;
