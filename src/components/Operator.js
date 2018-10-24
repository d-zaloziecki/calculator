import React, { Component } from 'react';
import '../App.css';
import Button from './Button';
import { inject } from 'mobx-react';

@inject(allStores => ({
    pressAnOperant: allStores.store.pressAnOperant
}))

class Operator extends Component {
    operants = ["Clr", "+", "-", "/", "*", "=" ]
    render() {
        return (
            <div className="operator">
            {this.operants.map(o=>{return(
                <Button key={o} value={o} onClickEvent={this.props.pressAnOperant}/>
            )})}
            </div>
        );
    }
}

export default Operator;
