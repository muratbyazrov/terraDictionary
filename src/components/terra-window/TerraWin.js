import React, { Component } from 'react';
import './TerraWin.css'

export default class TerraWin extends Component {
    
    state = {
        className: 'terra'
    }
    
    hideStartWin = () => {
        this.setState({
            className: 'terra-hide'
        })
    }
    
    start = () => {
        const {setNewState} = this.props;
        this.hideStartWin()
        setNewState();
    }

    render() {
        return (
            <div className={this.state.className}>
                <div className='terra__logo'></div>
                <h1 className='terra__title display-4'>terraDictionary</h1>
                <button className='btn btn-info terra__button' onClick={ () => this.start() }>Учиться!</button>
            </div>
        )
    }
}