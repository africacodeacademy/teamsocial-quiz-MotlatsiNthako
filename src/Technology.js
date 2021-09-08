import React, { useState } from 'react';

 function Technology() {

  const questions = [
    {
      questionText: 'Which one is the first search engine in internet',
      answerOptions: [
        { answerText: 'Google', isCorrect: false },
        { answerText: 'Altavista', isCorrect: false },
        { answerText: 'Archie', isCorrect: true },
        { answerText: 'WAIS', isCorrect: false },
      ],
    },
    {
      questionText: 'Number of bit used by the IPv6 address',
      answerOptions: [
        { answerText: ' 32 bit', isCorrect: false },
        { answerText: ' 64 bit', isCorrect: true },
        { answerText: '128 bit', isCorrect: false },
        { answerText: '256 bit', isCorrect: false },
      ],
    },
    {
      questionText: 'Which one is the first web browser invented in 1990',
      answerOptions: [
        { answerText: 'Internet Explorer', isCorrect: false },
        { answerText: 'Nexus', isCorrect: true },
        { answerText: 'Mosaic', isCorrect: false },
        { answerText: 'Mozilla', isCorrect: false },
      ],
    },
    {
      questionText: 'Which of the following programming language is used to create programs like applets?',
      answerOptions: [
        { answerText: 'COBOL', isCorrect: false },
        { answerText: 'C Language', isCorrect: false },
        { answerText: 'BASIC', isCorrect: false },
        { answerText: 'Java', isCorrect: true },
      ],
    },
    {
        questionText: ' Which one programming language is exclusively used for artificial intelligence',
        answerOptions: [
          { answerText: 'Prolog', isCorrect: true },
          { answerText: 'C', isCorrect: false },
          { answerText: 'JAVA', isCorrect: false },
          { answerText: 'J2EE', isCorrect: false },
        ],
      },
      {
        questionText: 'Firewall in computer is used for',
        answerOptions: [
          { answerText: 'Security', isCorrect: true },
          { answerText: 'Data Transmission', isCorrect: false },
          { answerText: 'Authentication', isCorrect: false },
          { answerText: 'Monitoring', isCorrect: false },
        ],
      },
      {
        questionText: ' Which of the following is not an operating system',
        answerOptions: [
          { answerText: 'C', isCorrect: true },
          { answerText: 'DOS', isCorrect: false },
          { answerText: 'MAC', isCorrect: false },
          { answerText: 'LINUX', isCorrect: false },
        ],
      },
      {
        questionText: 'Which of the following is not a database management software',
        answerOptions: [
          { answerText: 'MySQL', isCorrect: false},
          { answerText: 'COBOL', isCorrect: true },
          { answerText: 'Oracle', isCorrect: false },
          { answerText: ' Sybase', isCorrect: false },
        ],
      },
      {
        questionText: 'Number of layers in the OSI (Open Systems Interconnection) Model',
        answerOptions: [
          { answerText: '9', isCorrect: false },
          { answerText: '3', isCorrect: false },
          { answerText: '7', isCorrect: true},
          { answerText: '11', isCorrect: false },
        ],
      },
      {
        questionText: 'Mac Operating System is developed by which company',
        answerOptions: [
          { answerText: 'IBM', isCorrect: false },
          { answerText: 'Apple', isCorrect: true },
          { answerText: 'Facebook', isCorrect: false },
          { answerText: 'Microsoft', isCorrect: false },
        ],
      },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const random_question = Math.floor(Math.random()* questions.length);
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
      <h1 className='header'>TECHNOLOGY</h1>
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
                  <span>Question {currentQuestion + 1}/</span>{questions.length}
                </div>
                <div className='question-text'>
                  {questions[random_question].questionText}
                </div>
              </div>

              <div className='answer-section'>
                {
                  questions[random_question].answerOptions.map((answerOptions) => (
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

export default Technology;