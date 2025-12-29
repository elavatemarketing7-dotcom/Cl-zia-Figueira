
import React, { useState } from 'react';
import { QUIZ_QUESTIONS, EXPERT } from '../constants';

interface QuizProps {
  onFinish: (answers: string[]) => void;
  onSkip: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onFinish, onSkip }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleOptionSelect = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onFinish(newAnswers);
    }
  };

  const progress = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="fixed inset-0 z-50 bg-neutral-50 overflow-y-auto">
      <div className="min-h-screen flex flex-col p-6 max-w-lg mx-auto">
        <div className="flex justify-between items-center mb-10 pt-4">
          <span className="text-emerald-800 font-serif text-2xl font-bold">{EXPERT.name}</span>
          <button onClick={onSkip} className="text-neutral-400 text-sm">Pular Quiz</button>
        </div>

        <div className="mb-10">
          <div className="flex justify-between items-end mb-2">
            <span className="text-emerald-600 font-bold text-sm tracking-widest uppercase">Passo {currentStep + 1} de {QUIZ_QUESTIONS.length}</span>
            <span className="text-neutral-400 text-xs">{Math.round(progress)}% Concluído</span>
          </div>
          <div className="h-1.5 w-full bg-neutral-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-500 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl font-serif text-neutral-800 mb-8 leading-tight">
            {QUIZ_QUESTIONS[currentStep].question}
          </h2>

          <div className="space-y-4">
            {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionSelect(option)}
                className="w-full text-left p-6 rounded-2xl border-2 border-neutral-100 bg-white shadow-sm hover:border-emerald-200 hover:bg-emerald-50 transition-all active:scale-[0.98] flex items-center group"
              >
                <span className="flex-1 text-neutral-700 font-medium text-lg">{option}</span>
                <span className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="py-8 text-center">
           <p className="text-neutral-400 text-xs italic">Sua resposta é o primeiro passo para o método natural exclusivo de Clézia Figueira.</p>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
