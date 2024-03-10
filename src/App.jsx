import { useState } from 'react';
import './App.css'
import AnswerQuestion from './answerQuestion/AnswerQuestion'
import qas from './utils/QA.json'

function App() {

  const inicialStates = Array(qas.length).fill(false);
  inicialStates[0] = true;

  

  const [openStates, setOpenStates] = useState(inicialStates);

  const handleToggleAnswer = id => {
    const newOpenStates = [...openStates];
    const index = qas.findIndex(qas => qas.id === id);
    if (index != -1) {
      newOpenStates[index] = !newOpenStates[index];
      setOpenStates(newOpenStates)
    }

  }

  return (
    <main className="faq__wrapper">
      <div className="faq__container">
        <div className="faq__title">
          <img className='title__icon' src="./icon-star.svg" alt="estrella" />
          <h1 className='title__text'>FAQs</h1>
        </div>
        {qas.map(qa => (
          <AnswerQuestion key={qa.id} qa={qa} isOpen = {openStates[qas.findIndex(item => item.id === qa.id)]} onToggleAnswer = {() => handleToggleAnswer(qa.id)} />
        ))}
      </div>
    </main>
  )
}

export default App
