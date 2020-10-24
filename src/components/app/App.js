import React, { Component } from 'react';
import './App.css';
import Header from '../header/Header';
import Task from '../task/Task';
import WordList from '../word-list/WordList';
import data from '../../data/murat-dictionary.json';
import TerraWin from '../terra-window/TerraWin';


export default class App extends Component {

  state = {
    taskWord: {},
    wordsArr: [],
    taskLang: false,
    listLang: !this.setState.taskLang,
    successes: 0,
    errors: 0,
    rating: 0
  }

  arr = [];


  createNewTaskWord = () => {
    const random = Math.floor(Math.random() * Math.floor(data.length));
    const taskWord = data[random]
    this.arr = [taskWord]
    return taskWord;
  }

  createWordsArr = () => {
    while (this.arr.length <= 5) {
      const random = Math.floor(Math.random() * Math.floor(data.length));
      if (!this.arr.includes(data[random])) {
        this.arr.push(data[random])
      }
    }
    this.arr.sort(() => Math.random() - 0.5) // перемешивает порядок слов
    return this.arr
  }

  setNewState = async () => {
    const taskWord = this.createNewTaskWord();
    const arr = this.createWordsArr();
    const random = Math.random();
    const taskLang = random > 0.5 ? false : true

    await this.setState({
      taskWord: taskWord,
      wordsArr: arr,
      taskLang: taskLang,
      listLang: !taskLang,
    })

    this.toSpeakTaskWord();
  }

  speak = (text) => {
    const message = new SpeechSynthesisUtterance();
    message.lang = "en-En";
    message.text = text;
    window.speechSynthesis.speak(message);
  }

  toSpeakTaskWord = () => {
    if (!this.state.taskLang) {
      this.speak(this.state.taskWord.en)
    }
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
    console.log(this.state.successes, this.state.errors);
    newRating = newRating.toFixed(1);
    this.setState({
      rating: newRating
    })
  }


  render() {
    return (
      <>
        <TerraWin setNewState={this.setNewState}/>
        <Header className="alert alert-success" />
        <Task
          taskWord={this.state.taskWord}
          setNewState={this.setNewState}
          taskLang={this.state.taskLang}
          rating={this.state.rating}
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
        />
      </>
    )
  }
}
