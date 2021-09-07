import React, { useState } from 'react';

 function Africa() {

  

  const questions = [
    {
      questionText: 'How many countries in Africa?',
			answerOptions: [
				{ answerText: '53', isCorrect: false },
				{ answerText: '16', isCorrect: false },
				{ answerText: '54', isCorrect: true },
				{ answerText: '19', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is the current prime ministry of Lesotho?',
			answerOptions: [
				{ answerText: 'Motsoa-hae Tom Thabane', isCorrect: false },
				{ answerText: 'Moeketsi Majoro', isCorrect: true },
				{ answerText: 'Pakalitha Mosisili', isCorrect: false },
				{ answerText: 'Leabua Jonathan', isCorrect: false },
      ],
    },
    {
      questionText: 'Which is the richest country in Africa?',
			answerOptions: [
				{ answerText: 'Nigeria', isCorrect: true },
				{ answerText: 'Morocco', isCorrect: false },
				{ answerText: 'South Africa', isCorrect: false },
				{ answerText: 'Lesotho', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is the riches man in Africa?',
			answerOptions: [
				{ answerText: 'Ntsokoane Sam Matekane', isCorrect: false },
				{ answerText: 'Patrice Motsepe', isCorrect: false },
				{ answerText: 'Cyril Ramaphosa', isCorrect: false },
				{ answerText: 'Aliko Dangote', isCorrect: true },
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
  };

  /*const data = JSON stringify(localStorage getItem("player"));
  const name = data.replace(''','');
  const username = name.replace(''','');*/

  return (
    <>
      <h1 className='header'>KNOW AFRICA</h1>
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

export default Africa;

