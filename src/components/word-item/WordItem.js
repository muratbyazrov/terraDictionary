import React, { Component } from 'react';
import './WordItem.css'


export default class WordItem extends Component {

    state = {
        classToogle: "btn btn-outline-info",
    }

    onCheckWord = async (key) => {
        const { setNewState, successCounter, errorCounter, taskWord } = this.props;
        if (key === taskWord.id) {
            await successCounter();
            this.setState({
                classToogle: "btn btn-success"
            })
        } else {
            await errorCounter();
            this.setState({
                classToogle: "btn btn-danger"
            })
        }

        setTimeout(() => {
            this.setState({
                classToogle: "btn btn-outline-info"
            })
        }, 500);

        setTimeout(() => {
            setNewState();
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
        this.toSpeaCurrentWord();
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