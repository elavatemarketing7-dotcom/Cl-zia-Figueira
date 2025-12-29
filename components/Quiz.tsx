
import React, { useState } from 'react';
import { QUIZ_QUESTIONS, EXPERT, IMAGES } from '../constants';

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
      <div className="min-h-screen flex flex-col p-6 max-w-lg mx-auto relative">
        
        {/* Header: Nome e Botão Pular - Posicionado no topo extremo */}
        <div className="flex justify-between items-start pt-2 z-20">
          <div className="flex flex-col">
            <span className="text-emerald-900 font-serif text-2xl font-bold leading-tight tracking-tight">
              {EXPERT.name}
            </span>
            <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-[0.2em]">
              Avaliação Exclusiva
            </span>
          </div>
          <button 
            onClick={onSkip} 
            className="text-neutral-400 text-xs py-1 px-3 border border-neutral-200 rounded-full hover:bg-neutral-100 transition-colors"
          >
            Pular
          </button>
        </div>

        {/* Floating Framed Hero Photo - Posicionada um pouco mais para baixo do nome */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-10">
          <div className="w-24 h-24 rounded-full p-1 bg-white shadow-2xl border border-emerald-100 overflow-hidden animate-subtle-bounce">
            <img 
              src={IMAGES.hero} 
              alt={EXPERT.name} 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Espaçador para compensar a foto flutuante */}
        <div className="h-44"></div>

        {/* Barra de Progresso */}
        <div className="mb-10">
          <div className="flex justify-between items-end mb-2">
            <span className="text-emerald-600 font-bold text-[10px] tracking-widest uppercase">Análise de Perfil</span>
            <span className="text-neutral-400 text-xs">{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 w-full bg-neutral-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-500 transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Pergunta e Opções */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 border border-emerald-100">
              Passo {currentStep + 1} de {QUIZ_QUESTIONS.length}
            </span>
            <h2 className="text-3xl font-serif text-neutral-800 leading-tight">
              {QUIZ_QUESTIONS[currentStep].question}
            </h2>
          </div>

          <div className="space-y-4">
            {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionSelect(option)}
                className="w-full text-left p-5 rounded-2xl border border-neutral-200 bg-white shadow-sm hover:border-emerald-300 hover:shadow-md transition-all active:scale-[0.98] flex items-center group"
              >
                <span className="flex-1 text-neutral-700 font-medium text-lg">{option}</span>
                <span className="w-8 h-8 rounded-full border border-neutral-100 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer do Quiz */}
        <div className="py-8 text-center mt-auto">
           <p className="text-neutral-400 text-[10px] uppercase tracking-widest leading-relaxed">
             Suas respostas são confidenciais e ajudam a <br/> planejar seu protocolo exclusivo Clézia Figueira.
           </p>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
