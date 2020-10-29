import React, { Component } from 'react';
import './WordItem.css'


export default class WordItem extends Component {

    state = {
        classToogle: "btn btn-outline-info",
    }

    onCheckWord = async (key) => {
        const { successCounter, errorCounter, taskWord, showErrWin, nextTask } = this.props;
        if (key === taskWord.id) {
            await successCounter();
            this.setState({
                classToogle: "btn btn-success"
            })
            this.toSpeaCurrentWord();
            nextTask(1700);
        } else {
            await errorCounter();
            this.setState({
                classToogle: "btn btn-danger"
            })
            showErrWin()
        }

        setTimeout(() => {
            this.setState({
                classToogle: "btn btn-outline-info"
            })
        }, 1000);

    }

    toSpeaCurrentWord = () => {
        const { currentWord, listLang, speakFunc } = this.props;
        if (!listLang) {
            speakFunc(currentWord.en)
        }
    }


    onRun = async (key) => {
        await this.onCheckWord(key);
        const { ratingCounter } = this.props;
        await ratingCounter();
        
    }


    render() {
        const { listLang, currentWord } = this.props;
        return (
            <button onClick={() => this.onRun(currentWord.id)} className={this.state.classToogle}>
                {listLang ? currentWord.ru : currentWord.en}
            </button>
        )
    }
}