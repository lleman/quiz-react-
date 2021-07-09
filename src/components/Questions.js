import React, { useState } from "react";
import "../App.css";

function Questions() {
  const questions = [
    {
      question: "What is the capital of Italy?",
      options: [
        { answer: "London", correct: false },
        { answer: "Paris", correct: false },
        { answer: "Rome", correct: true },
      ],
    },

    {
      question: "The iPhone was created by which company?",
      options: [
        { answer: "Apple", correct: true },
        { answer: "Microsoft", correct: false },
        { answer: "IBM", correct: false },
      ],
    },

    {
      question: "Which is a JS framework?",
      options: [
        { answer: "Django", correct: false },
        { answer: "React", correct: true },
        { answer: ".Net", correct: false },
      ],
    },
    {
      question: "Which is not a React hook?",
      options: [
        { answer: "useState", correct: false },
        { answer: "useRedux", correct: true },
        { answer: "useRef", correct: false },
      ],
    },
    {
      question: "Reduce() is an array method.",
      options: [
        { answer: "True", correct: true },
        { answer: "False", correct: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const nextQuestion = currentQuestion + 1;

  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleSelect = (correct) => {
    if (correct) {
      setScore(score + 1);
    }

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <div className="score">
          <h1>You scored {score} out of {questions.length}</h1>
          <button>See Results</button>
          <button>Restart</button>
        </div>
      ) : (
        <>
          <div className="main">
              <h2 className="question-number">Question {currentQuestion + 1} out of {questions.length}</h2>
            <h3 className="question">{questions[currentQuestion].question}</h3>

            <div className="answer">
              {questions[currentQuestion].options.map((options) => (
                <button
                  key={options.answer}
                  onClick={() => handleSelect(options.correct)}
                >
                  {options.answer}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Questions;
