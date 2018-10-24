import React, { Component } from 'react';
import '../App.css';
import { observer, inject } from 'mobx-react';

@inject(allStores => ({
    display: allStores.store.display,
}))

@observer
class Screen extends Component {
    calculate = () => {
        
    }
    render() {
        return (
            <div className="screen">
            {this.props.display}
            </div>
        );
    }
}

export default Screen;
