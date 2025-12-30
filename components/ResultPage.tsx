
import React from 'react';
import { EXPERT, IMAGES } from '../constants';

interface ResultPageProps {
  answers: string[];
  onContinue: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ answers, onContinue }) => {
  // Conforme solicitação do usuário, utilizaremos o link exato fornecido
  const openWhatsApp = () => {
    window.open(EXPERT.whatsapp, '_blank');
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
              onClick={openWhatsApp}
              className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-emerald-500 transition-all active:scale-95 animate-subtle-bounce text-sm sm:text-base flex items-center justify-center gap-2"
            >
              QUERO AGENDAR MINHA CONSULTA
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            </button>
            
            <button 
              onClick={openWhatsApp}
              className="w-full bg-neutral-900 text-white font-bold py-4 rounded-xl shadow-md hover:bg-neutral-800 transition-all active:scale-95 text-sm sm:text-base"
            >
              FALAR COM A DRA. CLÉZIA
            </button>

            <button 
              onClick={onContinue}
              className="w-full bg-neutral-50 text-neutral-400 font-medium py-3 rounded-xl hover:bg-neutral-100 transition-all active:scale-95 text-xs sm:text-sm"
            >
              CONTINUAR NO SITE
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
