
import React from 'react';
import { EXPERT, IMAGES } from '../constants';

const MainSite: React.FC = () => {
  const openWA = () => window.open(EXPERT.whatsapp, '_blank');

  return (
    <div className="bg-white">
      {/* 1. HEROI */}
      <section className="relative min-h-screen flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.hero} alt={EXPERT.name} className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-6 pb-16 text-white max-w-3xl mx-auto w-full">
          <p className="text-emerald-400 font-bold tracking-widest text-sm uppercase mb-3">
            {EXPERT.profession} 💚
          </p>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-[1.1]">
            Eu sou Clézia Figueira.
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 font-light mb-10 max-w-lg leading-relaxed">
            Realço sua beleza única com segurança, naturalidade e o cuidado que você merece.
          </p>
          
          <div className="space-y-4">
            <button onClick={openWA} className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-6 rounded-2xl shadow-2xl transition-all active:scale-95 text-lg">
              Agendar consulta no whatsapp
            </button>
            <p className="text-neutral-400 text-sm tracking-wide">Sem compromisso e totalmente personalizado</p>
          </div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[3/4]">
            <img src={IMAGES.authority} alt="Clézia Atendendo" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-serif text-neutral-900 mb-6 leading-tight">
              Uma abordagem humana, focada em quem você realmente é.
            </h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed font-light">
              Sou apaixonada por transformar vidas através da autoestima. Em Gurupi-TO, desenvolvi um método onde a "clínica" dá lugar ao acolhimento. Aqui, você não é apenas um paciente, é alguém que busca se sentir bem na própria pele.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Avaliação minuciosa e honesta",
                "Atendimento exclusivo direto comigo",
                "Foco em resultados imperceptíveis aos olhos alheios",
                "Acompanhamento humanizado pós-procedimento"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-emerald-600 bg-emerald-100 p-1 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-neutral-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Resultados que inspiram</h2>
            <p className="text-neutral-500 font-light">Transformações pautadas na naturalidade e harmonia facial e corporal.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {IMAGES.results.map((img, i) => (
              <div key={i} className="group relative aspect-square rounded-2xl overflow-hidden bg-neutral-100 shadow-sm hover:shadow-xl transition-all">
                <img src={img} alt={`Resultado ${i+1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              </div>
            ))}
          </div>
          <p className="text-center text-neutral-400 text-xs mt-8 italic">* Resultados podem variar de pessoa para pessoa.</p>
        </div>
      </section>

      {/* 4. POR QUE CONFIAR */}
      <section className="py-24 px-6 bg-neutral-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">A Diferença Clézia Figueira</h2>
            <p className="text-neutral-400">Por que centenas de mulheres escolhem meu método todos os meses.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Avaliação Honestíssima", text: "Só recomendo o que realmente trará benefício estético e emocional para você." },
              { title: "Segurança Absoluta", text: "Uso das melhores tecnologias e produtos certificados com técnicas avançadas." },
              { title: "Ouro na Naturalidade", text: "O objetivo é que digam que você está descansada, não 'mexida'." },
              { title: "Ambiente Exclusivo", text: "Um espaço pensado para o seu relaxamento e privacidade total." },
              { title: "Foco no Detalhe", text: "Cada rosto é uma obra de arte única que merece um planejamento individual." },
              { title: "Suporte 24h", text: "Dúvidas pós-procedimento? Estarei sempre à disposição para te guiar." }
            ].map((card, i) => (
              <div key={i} className="p-8 rounded-3xl bg-neutral-800 border border-neutral-700 hover:border-emerald-500/50 transition-colors">
                <div className="w-12 h-12 bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-6 text-emerald-400">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-neutral-400 font-light leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif mb-6 italic">"Ainda tenho receio de ficar artificial..."</h2>
          <p className="text-lg text-neutral-600 mb-8">
            Minha missão é justamente evitar isso. Clique abaixo e vamos conversar sobre seus medos e objetivos de forma clara.
          </p>
          <button onClick={openWA} className="bg-emerald-600 text-white font-bold px-10 py-5 rounded-2xl shadow-xl hover:bg-emerald-500 transition-all flex items-center justify-center gap-3 mx-auto">
            Conversar no WhatsApp
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          </button>
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-24 px-6 bg-emerald-50/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-16">O caminho para sua transformação</h2>
          <div className="space-y-12">
            {[
              { step: "01", title: "Primeiro Contato", desc: "Clique no WhatsApp. Minha equipe ou eu mesma faremos uma pré-triagem rápida das suas necessidades." },
              { step: "02", title: "Avaliação Presencial", desc: "No meu espaço em Gurupi, faremos uma análise profunda da sua anatomia e expectativas. É gratuito e sem pressão." },
              { step: "03", title: "O Procedimento", desc: "Com um plano aprovado, realizamos sua harmonização focando em realçar o que você já tem de melhor." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <span className="text-4xl font-serif text-emerald-200 font-bold leading-none">{item.step}</span>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-neutral-600 text-lg font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MAIS PROVAS */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-serif mb-4">Bastidores & Autoridade</h2>
             <p className="text-neutral-500">A excelência está no cuidado de cada detalhe.</p>
          </div>
          
          <div className="flex overflow-x-auto gap-4 pb-8 snap-x no-scrollbar">
            {IMAGES.backstage.map((img, i) => (
              <div key={i} className="flex-none w-72 h-96 rounded-3xl overflow-hidden snap-center shadow-lg">
                <img src={img} alt={`Expert ${i+1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-24 px-6 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px]"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
            Pronta para redescobrir sua melhor versão?
          </h2>
          <p className="text-xl text-neutral-400 mb-12 font-light">
            Sua jornada começa com uma conversa honesta. Agende agora sua primeira consulta personalizada e sem custos.
          </p>
          <button onClick={openWA} className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-12 py-6 rounded-2xl shadow-2xl transition-all active:scale-95 text-xl flex items-center justify-center gap-3 mx-auto">
             Agendar minha consulta no whatsapp
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
             </svg>
          </button>
          <p className="mt-6 text-neutral-500 uppercase tracking-widest text-xs">Vagas limitadas por mês para garantir exclusividade</p>
        </div>
      </section>

      {/* 9. RODAPE */}
      <footer className="py-16 px-6 bg-white border-t border-neutral-100 text-center">
        <div className="max-w-xl mx-auto">
          <div className="font-serif italic text-4xl mb-6 text-emerald-900">{EXPERT.signature}</div>
          <p className="text-neutral-800 font-bold text-sm tracking-widest uppercase mb-2">{EXPERT.profession}</p>
          <p className="text-neutral-500 mb-8">{EXPERT.location}</p>
          
          <div className="flex justify-center gap-6 mb-10">
            <a href={EXPERT.instagram} target="_blank" className="text-neutral-400 hover:text-emerald-600 transition-colors">Instagram</a>
            <a href={EXPERT.whatsapp} target="_blank" className="text-neutral-400 hover:text-emerald-600 transition-colors">WhatsApp</a>
          </div>
          
          <div className="text-[10px] text-neutral-300 uppercase tracking-widest">
            © 2024 Todos os direitos reservados • Clézia Figueira
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainSite;
