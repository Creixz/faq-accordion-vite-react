import React from 'react'
import './AnswerQuestion.css'

const AnswerQuestion = ({ qa, isOpen, onToggleAnswer }) => {
  return (
    <>
      <div className="question__button" onClick={onToggleAnswer}>
        <p className="question__text">{qa.question}</p>
        {isOpen ?
          <img className='question__icon' src="./icon-minus.svg" alt="minus" />
          :
          <img className='question__icon' src="./icon-plus.svg" alt="plus" />}
      </div>
      {isOpen && (
        <p className="answer">{qa.answer}</p>
      )}
      <hr className='divider'/>
    </>
  )
}

export default AnswerQuestion