import React, { Component } from 'react';
import './Task.css';
import Counter from '../counter/Counter';
import Speaker from '../speaker/Speaker';

export default class Task extends Component {

    render() {
        const { taskWord, taskLang, rating, speak } = this.props;
        return (
            <div className='task'>
                <h2 className='task__title'>{taskLang ? taskWord.ru : taskWord.en}</h2>
                <div className='task__buttons'>
                    <Counter rating={rating} />
                    <div className={!taskLang? 'show' : 'hide'}>
                        <Speaker
                            taskWord={taskWord}
                            speak={speak}
                        />
                    </div>

                </div>

            </div>
        )
    }
}
