import React, { useState } from 'react';

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
      questionText: 'Which team does Lionel Messi currently play for?',
      answerOptions: [
        { answerText: 'FC Barcelona', isCorrect: false },
        { answerText: 'Paris Saint-Germain', isCorrect: true },
        { answerText: 'Manchester United', isCorrect: false },
        { answerText: 'Juventus', isCorrect: false },
      ],
    },
    {
      questionText: 'How many regulation strokes are there in swimming?',
      answerOptions: [
        { answerText: '5', isCorrect: false },
        { answerText: '4', isCorrect: true },
        { answerText: '6', isCorrect: false },
        { answerText: '10', isCorrect: false },
      ],
    },
    {
      questionText: 'Which country won the first ever football world cup?',
      answerOptions: [
        { answerText: 'France', isCorrect: false },
        { answerText: 'Uruguay', isCorrect: true },
        { answerText: 'Agentina', isCorrect: false },
        { answerText: 'Spain', isCorrect: false },
      ],
    },
    {
      questionText: 'How many NBA championships did Michael Jordan win with the Chicago Bulls?',
      answerOptions: [
        { answerText: '6', isCorrect: true },
        { answerText: '5', isCorrect: false },
        { answerText: '7', isCorrect: false },
        { answerText: '3', isCorrect: false },
      ],
    },
    {
      questionText: 'What five colours make up the Olympic rings?',
      answerOptions: [
        { answerText: 'blue,green,purple, white and red', isCorrect: false },
        { answerText: 'blue,pink,brown, white and gold', isCorrect: false },
        { answerText: 'blue,green,brown, white and silver', isCorrect: false },
        { answerText: ' blue, yellow, black, green and red', isCorrect: true },
      ],
    },
    {
      questionText: 'How many gold medals has Usain Bolt won?',
      answerOptions: [
        { answerText: '10', isCorrect: false },
        { answerText: '9', isCorrect: false },
        { answerText: '8', isCorrect: true },
        { answerText: '4', isCorrect: false },
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
      questionText: 'In which sport would competitors use a piece of equipment known as a foil?',
      answerOptions: [
        { answerText: 'Hockey', isCorrect: false },
        { answerText: 'Cricket', isCorrect: false },
        { answerText: 'Judo', isCorrect: false },
        { answerText: 'fencing', isCorrect: true },
      ],
    },
  ]



  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [random, setRandom] = useState(questions);
  //const random_question = Math.floor(Math.random()* questions.length);
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

  function shuffleMyArray(array){
    var number = array.length,
    temp, index;

    while(number> 0){
      index = Math.floor(Math.random() * number);
      number--;

      temp = array[number];
      array[number] = array[index];
      array[index] = temp;
    }
    return array;
  }
  //DROP DOWN
const [option,setOption] = useState();
const [selected_number, setSelected_number] = useState(10);

  function selectedOption(event){
    setOption(event.target.value);
     setSelected_number(event.target.value);

     
    if(selected_number === 5){
      shuffleMyArray(questions);
      questions.splice(5, 5);
      let temp = questions;
      setRandom(temp);
  
    }
    else{
      shuffleMyArray(questions);
      questions.splice(7, 3);
      let temp = questions;
      setRandom(temp);
    }

    return selected_number;
  }

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;
    
    if (nextQuetions <selected_number) {
      setCurrentQuestion(nextQuetions);
    }
    else {
      setShowScore(true)
    }
  }

  return (
    <> 
      <div>
  <select name='option' onChange={selectedOption}>
    <option value="10">All questions</option>
    <option value="5">5 questions</option>
    <option value="7">7 questions</option>
  </select>
  </div>
      <h1 className='header'>SPORTS</h1>
      <div className="app">
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {selected_number}
          </div>
        )
          :
          (
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question {currentQuestion + 1}/</span>{selected_number}
                </div>
                <div className='question-text'>
                {random[currentQuestion].questionText}
                </div>
              </div>

              <div className='answer-section'>
                {
                  random[currentQuestion].answerOptions.map((answerOptions) => (
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
