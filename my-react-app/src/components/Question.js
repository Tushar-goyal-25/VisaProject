import React, { useState } from 'react';
// React Component
const QuestionComponent = ({ question }) => { //COMPONENT THAT CREATES THE QUESTION
  const [selectedOption, setSelectedOption] = useState(''); //SAVES THE OPTION SELECTED

  //OPTION CHANGE HANDLER
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value)   //LOGS THE SLEECTED OPTION IN THE CONSOLE
  };

  //HTML DIV
  return (
    <div>
      <h3>{question.getQuestion()}</h3>
      {question.getOptions().map((option, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              value={option}
              checked={selectedOption === option} //SLEECTED OPTION IS SAVED
              onChange={handleOptionChange}
            />
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default QuestionComponent;