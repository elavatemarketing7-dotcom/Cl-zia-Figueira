
import React, { useState } from 'react';
import Quiz from './components/Quiz.tsx';
import ResultPage from './components/ResultPage.tsx';
import MainSite from './components/MainSite.tsx';
import { EXPERT, IMAGES } from './constants.ts';

type AppState = 'welcome' | 'quiz' | 'result' | 'site';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppState>('welcome');
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);

  const startQuiz = () => setCurrentView('quiz');
  const goToSite = () => setCurrentView('site');
  
  const finishQuiz = (answers: string[]) => {
    setQuizAnswers(answers);
    setCurrentView('result');
  };

  if (currentView === 'welcome') {
    return (
      <div className="relative min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-emerald-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-emerald-800/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 w-full max-w-md">
          <div className="mb-8 overflow-hidden rounded-full w-32 h-32 mx-auto border-2 border-emerald-500 p-1">
             <img src={IMAGES.hero} alt={EXPERT.name} className="w-full h-full object-cover rounded-full" />
          </div>
          
          <h1 className="text-4xl font-serif text-white mb-4 leading-tight">
            Seja bem-vinda ao universo de <span className="text-emerald-400">{EXPERT.name}</span>
          </h1>
          
          <p className="text-neutral-400 text-lg mb-10 font-light">
            Descubra o caminho para sua melhor versão através de uma avaliação exclusiva e personalizada.
          </p>
          
          <div className="space-y-4 w-full">
            <button 
              onClick={startQuiz}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-5 rounded-2xl shadow-xl transition-all active:scale-95 text-lg flex items-center justify-center gap-2"
            >
              Iniciar Avaliação Personalizada
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            <button 
              onClick={goToSite}
              className="w-full bg-transparent border border-neutral-700 text-neutral-300 py-4 rounded-2xl transition-all active:scale-95 text-md"
            >
              Ir direto para o site
            </button>
          </div>
        </div>
        
        <footer className="absolute bottom-6 text-neutral-600 text-xs tracking-widest uppercase">
          {EXPERT.location}
        </footer>
      </div>
    );
  }

  if (currentView === 'quiz') {
    return <Quiz onFinish={finishQuiz} onSkip={goToSite} />;
  }

  if (currentView === 'result') {
    return <ResultPage answers={quizAnswers} onContinue={goToSite} />;
  }

  return <MainSite />;
};

export default App;
