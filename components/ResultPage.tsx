
import React from 'react';
import { EXPERT, IMAGES } from '../constants';

interface ResultPageProps {
  answers: string[];
  onContinue: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ answers, onContinue }) => {
  const generateWhatsAppMessage = () => {
    const text = `Olá Dra. Clézia! Acabei de realizar o Quiz no site e gostaria de enviar minha avaliação:\n\n` +
      `1. Insatisfação: ${answers[0]}\n` +
      `2. Objetivo: ${answers[1]}\n` +
      `3. Experiência prévia: ${answers[2]}\n` +
      `4. Prioridade: ${answers[3]}\n\n` +
      `Poderia me ajudar?`;
    return `${EXPERT.whatsapp}&text=${encodeURIComponent(text)}`;
  };

  const openWhatsApp = (direct: boolean = false) => {
    if (direct) {
      window.open(generateWhatsAppMessage(), '_blank');
    } else {
      window.open(EXPERT.whatsapp, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      <div className="min-h-screen flex flex-col p-4 max-w-lg mx-auto">
        <header className="py-2 text-center border-b border-neutral-100 mb-4">
            <h3 className="text-emerald-800 font-serif text-lg font-bold">{EXPERT.name}</h3>
        </header>

        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Compact Image Container */}
          <div className="mb-4 relative w-full aspect-[16/9] sm:aspect-[4/5] max-h-[25vh] sm:max-h-[40vh] rounded-2xl overflow-hidden shadow-xl">
             <img src={IMAGES.authority} alt={EXPERT.name} className="w-full h-full object-cover object-top" />
             <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent"></div>
             <div className="absolute bottom-3 left-4 right-4 text-white">
                <p className="text-emerald-400 font-bold tracking-widest text-[10px] uppercase mb-0.5">Avaliação Concluída</p>
                <h2 className="text-lg sm:text-2xl font-serif leading-tight">Perfil Compatível. Você é a Paciente ideal.</h2>
             </div>
          </div>

          <div className="text-center mb-6 px-2">
            <p className="text-neutral-600 text-sm sm:text-base leading-snug">
              Com base nas suas respostas, o Método da <span className="font-bold text-neutral-800">{EXPERT.name}</span> consegue entregar exatamente a naturalidade e segurança que você procura.
            </p>
          </div>

          <div className="w-full space-y-3 mb-6">
            <button 
              onClick={() => openWhatsApp(true)}
              className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-emerald-500 transition-all active:scale-95 animate-subtle-bounce text-sm sm:text-base"
            >
              QUERO AGENDAR MINHA CONSULTA
            </button>
            
            <button 
              onClick={() => openWhatsApp(false)}
              className="w-full bg-neutral-900 text-white font-bold py-4 rounded-xl shadow-md hover:bg-neutral-800 transition-all active:scale-95 text-sm sm:text-base"
            >
              2- CHAMAR NO WHATSAPP SEM COMPROMISSO
            </button>

            <button 
              onClick={onContinue}
              className="w-full bg-neutral-50 text-neutral-400 font-medium py-3 rounded-xl hover:bg-neutral-100 transition-all active:scale-95 text-xs sm:text-sm"
            >
              3- NÃO ENVIAR E CONTINUAR NO SITE
            </button>
          </div>
        </div>
        
        <footer className="py-2 text-center">
           <p className="text-neutral-400 text-[10px] uppercase tracking-tighter">Exclusividade e Segurança em Gurupi-TO</p>
        </footer>
      </div>
    </div>
  );
};

export default ResultPage;
