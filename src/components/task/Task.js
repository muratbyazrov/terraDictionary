import React, { Component } from 'react';
import './Task.css';
import Counter from '../counter/Counter';

export default class Task extends Component {

    render() {
        const { taskWord, taskLang, rating } = this.props;
        return (
            <div className='task'>
                <h2 className='task__title'>{taskLang ? taskWord.ru : taskWord.en}</h2>
                <Counter
                    rating={rating}
                />
            </div>
        )
    }
}
