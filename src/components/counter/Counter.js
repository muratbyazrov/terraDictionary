import React, { Component } from 'react';
import './Counter.css';


export default class Counter extends Component {
    

    ratingColorStatus = () => {
        const {rating} = this.props;
        if(rating < 3) {
            this.color = 'red'
        } else if (rating > 3 && rating < 5) {
            this.color = 'orange'
        } else if (rating >= 5 && rating < 7.5) {
            this.color = 'yellow'
        } else if (rating >= 7.5) {
            this.color = 'Lime'
        }
    }
    
    render() {
        const {rating} = this.props;
        this.ratingColorStatus();
        return (
            <div className='counter' style={{backgroundColor: `${this.color}`}} >{rating}</div>
        )
    }
}