import { LayoutGroup } from 'framer-motion';
import { useState } from 'react';
import { questions } from './constants';
import Toggle from '../../helpers/Toggle';

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState('');

  const handleToggle = idx => {
    if (activeIndex === idx) {
      setActiveIndex('');
    } else {
      setActiveIndex(idx);
    }
  };

  return (
    <div>
      <LayoutGroup>
        {questions.map((question, idx) => (
          <Toggle
            title={question.question}
            key={idx}
            isOpen={activeIndex === idx}
            onClick={() => handleToggle(idx)}
            className="border-b-2 border-orange-400"
          >
            <div className="mt-8 p-4 border-b-2 border-orange-400">
              <p>
                {question.answer.map((answer, idx) => (
                  <div key={idx}>
                    <p>{answer.one}</p>
                    <p>{answer.two}</p>
                  </div>
                ))}
              </p>
            </div>
          </Toggle>
        ))}
      </LayoutGroup>
    </div>
  );
};
export default Questions;
