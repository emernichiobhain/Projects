import React, { Component } from 'react';

function question(e) {
  if (document.querySelector('.question').value === '') {
    alert('Oops! Must ask a question!');
  }
  document.querySelector('.question').style.display = 'none';
  document.querySelector('.btn').style.display = 'none';
  document.querySelector('.answer').style.display = 'inline';
  e.preventDefault();
}

function clearTasks() {
  window.location.reload();
}

class Ask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: null,
    };
  }
  componentDidMount() {
    document.querySelector('.btn').addEventListener('click', question)
    document.querySelector('.clr-btn').addEventListener('click', clearTasks)
    fetch('/answers')
    .then(res => res.json())
    .then(data => {
      this.setState({ answer: data });
    })
    .catch(err => {
      console.log(err);
    });
  }
  
  componentWillUnmount() {
    document.querySelector('.btn').removeEventListener('click', question);
  }
  
  render() {
    const myAnswers = this.state.answer || {}
    const newArr = Object.values(myAnswers);
    const randomAnswer = newArr[Math.floor(newArr.length * Math.random())];
    
    const rendered = (<div className="answer"><h3>Your answer is:</h3><h4>{randomAnswer}</h4><br></br>
    <input type="submit" value="Ask a new question" className="clr-btn"></input></div>)
    
    return rendered;
    }
    
  }

export default Ask;