import React, { useState } from 'react';

 /*function Sports() {

  const questions = [
    {
      questionText: 'Varun Singh Bhati who won the Bronze at the 2016 Rio Paralympic games is associated with which sport?',
      answerOptions: [
        { answerText: 'Shot put', isCorrect: false },
        { answerText: 'Javelin Throw', isCorrect: false },
        { answerText: 'High jump', isCorrect: true },
        { answerText: 'Badminton', isCorrect: false },
      ],
    },
    {
      questionText: 'Who won the 2019 US Open Mens Singles title ?',
      answerOptions: [
        { answerText: 'Rafael Nadal', isCorrect: false },
        { answerText: 'Roger Federer', isCorrect: true },
        { answerText: 'Daniil Medvedev', isCorrect: false },
        { answerText: 'Novak Djokovic', isCorrect: false },
      ],
    },
    {
      questionText: 'Indian sportsperson Lakshya sen is a _________ player.',
      answerOptions: [
        { answerText: 'Judo', isCorrect: false },
        { answerText: 'Badminton', isCorrect: true },
        { answerText: 'Kabaddi', isCorrect: false },
        { answerText: 'Wrestling', isCorrect: false },
      ],
    },
    {
      questionText: 'Which of the following football club wins FIFA Club World Cup 2020?',
      answerOptions: [
        { answerText: 'FC Barcelona', isCorrect: false },
        { answerText: 'Manchester United', isCorrect: false },
        { answerText: 'Juventus F. C', isCorrect: false },
        { answerText: 'Bayern Munich', isCorrect: true },
      ],
    },
    {
        questionText: ' Who Won 10th italian open title 2021 ?',
        answerOptions: [
          { answerText: 'Rafael Nadal', isCorrect: true },
          { answerText: 'Novak Djokovic', isCorrect: false },
          { answerText: 'Dominic Thiem', isCorrect: false },
          { answerText: 'Stefanos Tsitsipas', isCorrect: false },
        ],
      },
      {
        questionText: ' Who was honoured as the AIFF Mens Footballer of the year for 2019-20?',
        answerOptions: [
          { answerText: 'Gurpreet Singh Sandhu', isCorrect: true },
          { answerText: 'Sunil Chetri', isCorrect: false },
          { answerText: 'Jackichand Singh', isCorrect: false },
          { answerText: 'Sandesh Jhingan', isCorrect: false },
        ],
      },
      {
        questionText: ' Which of the following footballers has a world record of highest goal score for a single club?',
        answerOptions: [
          { answerText: 'Lionel Messi (Barcelona FC)', isCorrect: true },
          { answerText: 'Pele (Santos FC)', isCorrect: false },
          { answerText: 'Gerd Muller (Bayern Munich)', isCorrect: false },
          { answerText: 'Fernando Peyrotes (Sporting CP)', isCorrect: false },
        ],
      },
      {
        questionText: ' Puskas Award is associated with the game of',
        answerOptions: [
          { answerText: 'Cricker', isCorrect: false},
          { answerText: 'Football', isCorrect: true },
          { answerText: 'Badminton', isCorrect: false },
          { answerText: 'Tennis', isCorrect: false },
        ],
      },
      {
        questionText: 'Wanamaker Trophy is associated with the game of ',
        answerOptions: [
          { answerText: 'Chess', isCorrect: false },
          { answerText: 'Squash', isCorrect: false },
          { answerText: 'Golf', isCorrect: true},
          { answerText: 'Skating', isCorrect: false },
        ],
      },
      {
        questionText: 'Wembly is a famous football stadium in',
        answerOptions: [
          { answerText: 'Dallas', isCorrect: false },
          { answerText: 'London', isCorrect: true },
          { answerText: 'Barcelona)', isCorrect: false },
          { answerText: 'Seoul', isCorrect: false },
        ],
      },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;
    
    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    }
    else {
      setShowScore(true)
    }
  }

  return (
    <>
      <h1 className='header'>SPORTS</h1>
      <div className="app">
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {questions.length}
          </div>
        )
          :
          (
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question {currentQuestion + 1}</span>{questions.length}
                </div>
                <div className='question-text'>
                  {questions[currentQuestion].questionText}
                </div>
              </div>

              <div className='answer-section'>
                {
                  questions[currentQuestion].answerOptions.map((answerOptions) => (
                    <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>
                      {answerOptions.answerText}</button>
                  ))
                }
              </div>
            </>
          )}
      </div>
    </>
  );
}

export default Sports;*/

function Sports() {

  const questions = [
    {questionText: 'Varun Singh Bhati who won the Bronze at the 2016 Rio Paralympic games is associated with which sport?',
    answerOptions: [
      { answerText: 'Shot put', isCorrect: false },
      { answerText: 'Javelin Throw', isCorrect: false },
      { answerText: 'High jump', isCorrect: true },
      { answerText: 'Badminton', isCorrect: false },
      ],
    },
    {
      questionText: 'Who won the 2019 US Open Mens Singles title ?',
      answerOptions: [
        { answerText: 'Rafael Nadal', isCorrect: false },
        { answerText: 'Roger Federer', isCorrect: true },
        { answerText: 'Daniil Medvedev', isCorrect: false },
        { answerText: 'Novak Djokovic', isCorrect: false },
      ],
    },
    {
      questionText: 'Indian sportsperson Lakshya sen is a _________ player.',
      answerOptions: [
        { answerText: 'Judo', isCorrect: false },
        { answerText: 'Badminton', isCorrect: true },
        { answerText: 'Kabaddi', isCorrect: false },
        { answerText: 'Wrestling', isCorrect: false },
      ],
    },
    
    {
      questionText: 'Which of the following football club wins FIFA Club World Cup 2020?',
      answerOptions: [
        { answerText: 'FC Barcelona', isCorrect: false },
        { answerText: 'Manchester United', isCorrect: false },
        { answerText: 'Juventus F. C', isCorrect: false },
        { answerText: 'Bayern Munich', isCorrect: true },
      ],
    },
  ]

  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;
    
    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    }
    else {
      setShowScore(true)
    }
  }

  return (
    <>
      <h1 className='header'>SPORTS</h1>
      <div className="app">
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {questions.length}
          </div>
        )
          :
          (
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question {currentQuestion + 1}</span>{questions.length}
                </div>
                <div className='question-text'>
                  {questions[currentQuestion].questionText}
                </div>
              </div>

              <div className='answer-section'>
                {
                  questions[currentQuestion].answerOptions.map((answerOptions) => (
                    <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>
                      {answerOptions.answerText}</button>
                  ))
                }
              </div>
            </>
          )}
      </div>
    </>
  );
}

export default Sports;
