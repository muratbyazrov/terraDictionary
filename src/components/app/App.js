import React, { Component } from 'react';
import './App.css';
import Header from '../header/Header';
import Task from '../task/Task';
import WordList from '../word-list/WordList';
import dictionary from '../../data/base-1.json';
import TerraWin from '../terra-window/TerraWin';
import ErrorWindow from '../error-window/ErrorWindow';


export default class App extends Component {

  state = {
    taskWord: {},
    wordsArr: [],
    taskLang: false,
    listLang: !this.setState.taskLang,
    successes: 0,
    errors: 0,
    rating: 0,
    errorWindowVisable: false
  }

  arr = [];
  data = dictionary.map((item) => {
    return item.id = dictionary.indexOf(item);
  });



  createNewTaskWord = () => {
    const random = Math.floor(Math.random() * Math.floor(dictionary.length));
    const taskWord = dictionary[random]
    this.arr = [taskWord]
    return taskWord;
  }

  createWordsArr = () => {
    while (this.arr.length <= 5) {
      const random = Math.floor(Math.random() * Math.floor(dictionary.length));
      if (!this.arr.includes(dictionary[random])) {
        this.arr.push(dictionary[random])
      }
    }
    this.arr.sort(() => Math.random() - 0.5) // перемешивает порядок слов
    return this.arr
  }

  setNewState = async () => {
    const taskWord = this.createNewTaskWord();
    const arr = this.createWordsArr();
    const random = Math.random();
    const taskLang = random <= 0.5

    await this.setState({
      taskWord: taskWord,
      wordsArr: arr,
      taskLang: taskLang,
      listLang: !taskLang,
    })

    this.toSpeakTaskWord();
  }

  toSpeakTaskWord = () => {
    if (!this.state.taskLang) {
      this.speak(this.state.taskWord.en)
    }
  }

  speak = (text) => {
    const message = new SpeechSynthesisUtterance();
    message.lang = "en-US";
    message.text = text;
    window.speechSynthesis.speak(message);
  }

  successCounter = () => {
    this.setState({
      successes: this.state.successes + 1
    })
  }
  errorCounter = () => {
    this.setState({
      errors: this.state.errors + 1
    })
  }

  ratingCounter = () => {
    let newRating = this.state.successes / (this.state.successes + this.state.errors) * 10;
    newRating = newRating.toFixed(1);
    this.setState({
      rating: newRating
    })
  }

  errorWinToogle = () => {
    this.setState({
      errorWindowVisable: !this.state.errorWindowVisable
    })
  }

  nextTask = (mlsec) => {
    setTimeout(() => {
        this.setNewState();
    }, mlsec);
}

  render() {
    return (
      <div className='eclipse'>
        <TerraWin setNewState={this.setNewState} />
        <ErrorWindow
          taskWord={this.state.taskWord}
          visable={this.state.errorWindowVisable}
          errorWinToogle={this.errorWinToogle}
          nextTask={this.nextTask}
          speak={this.speak}
        />
        <Header className="alert alert-success" />
        <Task
          taskWord={this.state.taskWord}
          setNewState={this.setNewState}
          taskLang={this.state.taskLang}
          rating={this.state.rating}
          speak={this.speak}

        />
        <WordList
          wordsArr={this.state.wordsArr}
          setNewState={this.setNewState}
          taskWord={this.state.taskWord}
          listLang={this.state.listLang}
          speakFunc={this.speak}
          successCounter={this.successCounter}
          errorCounter={this.errorCounter}
          ratingCounter={this.ratingCounter}
          taskLang={this.state.taskLang}

          showErrWin={() => this.errorWinToogle()}

          nextTask={this.nextTask}
        />
      </div>
    )
  }
}
