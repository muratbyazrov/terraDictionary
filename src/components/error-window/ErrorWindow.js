import React, { Component } from 'react';
import './ErrorWindow.css';
import Speaker from '../speaker/Speaker'

export default class ErrorWindow extends Component {
    hideAndNext = () => {
        const { errorWinToogle, nextTask } = this.props;
        errorWinToogle();
        nextTask(0);
    }

    render() {
        const { taskWord, visable, speak } = this.props;
        const className = `error-window ${visable ? 'show' : 'hide'}`
        return (
            <div className={className}>
                <h4 className='error-window__title'>Запомните</h4>
                <p className='error-window__task-word alert alert-warning'>{taskWord.en} - {taskWord.ru}</p>
                <div className='error-window__speaker'>
                    <Speaker
                        speak={() => speak(taskWord.en)}
                        taskWord={taskWord}
                    />
                </div>
                <button className='error-window__button btn btn-light' onClick={() => this.hideAndNext()}>Окей, дальше</button>
            </div>
        )
    }
}