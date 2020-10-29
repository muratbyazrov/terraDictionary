import React, { Component } from 'react';
import './WordList.css';
import WordItem from '../word-item/WordItem';


export default class WordList extends Component {
  
    render() {
        const { setNewState, taskWord, wordsArr, 
            listLang, speakFunc, successCounter, 
            errorCounter, ratingCounter, showErrWin, 
            nextTask } = this.props;
        
        const elements = wordsArr.map((item) => {
            return <WordItem
                key={item.id}
                setNewState={setNewState}
                taskWord={taskWord}
                currentWord={item}
                listLang={listLang}
                speakFunc={speakFunc}
                successCounter={successCounter}
                errorCounter={errorCounter}
                ratingCounter={ratingCounter}
                showErrWin={showErrWin}
                nextTask={nextTask}
            />
        })
        return <div className='word-list'>{elements}</div> 
    }
}