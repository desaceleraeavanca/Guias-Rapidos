import React from 'react';
import { CheckCircle2, AlertCircle, ArrowRight, Check, XCircle, Lightbulb, Sparkles } from 'lucide-react';

import { Footer } from '../components/Footer';
import { Logo } from '../components/Logo';

const steps = [
  {
    id: 1,
    title: "Clareza Mínima Viável",
    problem: "A Bússola do Dia",
    truth: "Qual o maior ladrão de produtividade? A falta de clareza. Quando não sabemos o que é realmente importante, pulamos de tarefa em tarefa, reagimos às urgências dos outros e terminamos o dia sem ter movido a agulha naquilo que traria o maior impacto.",
    fixes: [
      "A solução não é um planejamento de horas, mas sim uma clareza mínima viável.",
      "Em vez de uma lista gigante, defina UMA ÚNICA PRIORIDADE PRINCIPAL para o seu dia.",
      "Ao começar seu dia (ou na noite anterior), respire fundo e pergunte-se: 'Se eu só pudesse fazer UMA coisa hoje para sentir que o dia valeu a pena e me deixou mais perto dos meus objetivos importantes, qual seria essa coisa?'",
      "Essa é sua Prioridade #1, sua Bússola do Dia. Todo o resto é secundário. Anote-a em um lugar visível."
    ],
    reflection: "Pare AGORA por 1 minuto. Qual será sua Prioridade #1 para amanhã? Anote!",
    quickSolution: "Defina UMA única prioridade"
  },
  {
    id: 2,
    title: "A Regra dos 5 Minutos",
    problem: "Vença a Procrastinação Inicial",
    truth: "Sabe aquela tarefa importante (talvez até a sua Prioridade #1) que você fica adiando porque parece grande, chata ou difícil? A procrastinação muitas vezes não está na tarefa em si, mas na dificuldade de começar. Nosso cérebro busca evitar o desconforto inicial.",
    fixes: [
      "A Regra dos 5 Minutos é uma arma simples e poderosa contra isso.",
      "Você se compromete a trabalhar na tarefa temida por apenas 5 minutos. Cronometrados!",
      "Você se dá a permissão total de parar assim que o alarme tocar.",
      "Começar é a parte mais difícil. Uma vez que você iniciou, a resistência diminui e frequentemente você decide continuar."
    ],
    reflection: "Pense em UMA tarefa que você está adiando agora. Pegue um timer, ajuste para 5 minutos e simplesmente COMECE. Veja o que acontece.",
    quickSolution: "Trabalhe por apenas 5 minutos"
  },
  {
    id: 3,
    title: "Bloco de Foco Intencional",
    problem: "(Mesmo que Curto)",
    truth: "O mito da multitarefa já caiu por terra. Tentar fazer várias coisas ao mesmo tempo significa, na verdade, não fazer nenhuma delas bem feita. Cada vez que mudamos nossa atenção, nosso cérebro paga um 'pedágio' – perdemos tempo e energia nessa troca de contexto.",
    fixes: [
      "Para realizar trabalho que exige concentração, precisamos de blocos de foco intencional.",
      "Isso não significa passar 8 horas seguidas sem interrupção. Significa criar pequenas janelas de trabalho dedicado.",
      "Experimente blocos de 25, 40 ou 50 minutos. Durante esse tempo: ZERO distrações.",
      "Feche abas desnecessárias, silencie o celular, avise as pessoas ao redor. Mergulhe na tarefa."
    ],
    reflection: "Olhe para sua agenda de amanhã. Agende UM bloco de foco (ex: 45 minutos) dedicado exclusivamente à sua Prioridade #1.",
    quickSolution: "Crie janelas de trabalho dedicado"
  },
  {
    id: 4,
    title: "Simplifique Antes de Agir",
    problem: "Menos é Mais Eficaz",
    truth: "Muitas vezes, complicamos as coisas sem necessidade. Criamos processos elaborados, planejamos cada mínimo detalhe, buscamos a ferramenta perfeita... e acabamos não fazendo nada.",
    fixes: [
      "Antes de mergulhar em uma tarefa, faça uma pausa rápida para simplificar.",
      "Qual é o objetivo essencial desta tarefa? O que realmente precisa ser entregue?",
      "Existe alguma etapa que posso eliminar sem comprometer o essencial?",
      "Posso fazer uma versão mais simples disso agora e melhorar depois?",
      "Cortar o supérfluo antes de começar economiza tempo, energia e diminui a chance de paralisia."
    ],
    reflection: "Pegue uma tarefa da sua lista atual. Identifique UMA etapa ou detalhe que pode ser simplificado ou eliminado para entregar o essencial mais rápido.",
    quickSolution: "Corte o supérfluo antes de começar"
  },
  {
    id: 5,
    title: "Capture Tudo, Confie no Sistema",
    problem: "(Não na Mente)",
    truth: "Sua mente é incrível para ter ideias, resolver problemas, ser criativa... mas é PÉSSIMA para guardar listas de tarefas, lembretes e informações soltas. Tentar guardar tudo na cabeça gera estresse, ansiedade e a terrível sensação de 'estou esquecendo alguma coisa'.",
    fixes: [
      "Você precisa de um sistema de captura externo confiável. E não precisa ser nada complicado!",
      "Pode ser um caderno/bloco de notas físico, um aplicativo de notas simples ou um app básico de tarefas.",
      "O importante é: Capture imediatamente! Teve uma ideia? Anote. Lembrou de uma tarefa? Anote.",
      "Tire tudo da sua cabeça e coloque no seu sistema externo. Isso libera espaço mental para o que realmente importa: pensar e fazer."
    ],
    reflection: "Pegue seu sistema de captura (ou escolha um AGORA!). Anote 3 coisas (tarefas, ideias, lembretes) que estavam apenas na sua cabeça até este momento. Sinta o alívio!",
    quickSolution: "Anote tudo em um sistema externo"
  },
  {
    id: 6,
    title: "A Pausa Estratégica",
    problem: "Recarregue Para Avançar",
    truth: "Na cultura da correria constante, pausas são vistas como perda de tempo ou preguiça. Grande erro! Assim como um atleta precisa de descanso para render melhor, nosso cérebro e corpo precisam de pausas para manter o foco e a energia ao longo do dia.",
    fixes: [
      "Checar redes sociais ou responder e-mails rápidos não é uma pausa restauradora. É apenas trocar um tipo de estímulo por outro.",
      "Uma pausa estratégica é curta (5-10 minutos) e desconectada.",
      "Levante-se, alongue-se, beba um copo d'água, olhe pela janela, respire fundo, dê uma volta rápida.",
      "Essas micro-pausas ajudam a prevenir a fadiga mental, melhoram o humor e podem até destravar soluções para problemas que estavam te bloqueando."
    ],
    reflection: "Olhe para sua agenda de hoje. Agende UMA pausa estratégica de 5 minutos onde você se comprometa a NÃO olhar para nenhuma tela.",
    quickSolution: "Faça pausas curtas e desconectadas"
  },
  {
    id: 7,
    title: "Revisão Rápida no Fim do Dia",
    problem: "(Aprendizado Contínuo)",
    truth: "Como saber se estamos no caminho certo? Como ajustar a rota se algo não funcionou? Com uma revisão rápida e consistente. Não precisa ser um relatório complexo.",
    fixes: [
      "No final do seu dia de trabalho (ou antes de dormir), reserve 2 minutos para responder a 3 perguntas simples:",
      "1. O que funcionou bem hoje? (Qual tarefa fluiu? Qual pequena vitória você teve?)",
      "2. O que não funcionou tão bem? (Onde você travou? Qual imprevisto te pegou de surpresa?)",
      "3. O que eu aprendi ou qual pequeno ajuste posso fazer amanhã?",
      "Essa micro-reflexão diária é um motor poderoso de aprendizado e adaptação. Ela te ajuda a celebrar os ganhos, entender os desafios e começar o dia seguinte de forma mais inteligente."
    ],
    reflection: "Antes de encerrar seu dia HOJE, faça essa revisão de 2 minutos. Anote as respostas.",
    quickSolution: "Faça uma micro-reflexão diária"
  }
];

export default function Passos() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#F27D26] selection:text-white">
      {/* Hero Section - Editorial / Magazine Style */}
      <header className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#331A0A_0%,transparent_50%)] opacity-60 pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[1px] w-12 bg-[#F27D26]"></div>
            <p className="text-[#F27D26] font-mono text-xs tracking-[0.2em] uppercase font-bold">Guia Rápido</p>
          </div>
          
          <div className="title-wrapper transform -skew-x-6 mb-12">
            <h1 className="font-sans text-[12vw] md:text-[8vw] lg:text-[110px] leading-[0.85] tracking-tighter font-black uppercase text-white">
              7 Passos <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F27D26] to-[#FF4E00]">Simples</span> para <br/>
              Retomar o Controle
            </h1>
          </div>
          
          <p className="text-xl md:text-3xl text-white/60 font-light tracking-tight max-w-2xl mb-16 border-l-2 border-white/20 pl-6">
            Um guia prático para organizar seu dia, definir prioridades e começar a fazer o que realmente importa (sem fórmulas complexas).
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-[#F27D26] mb-4" />
              <p className="text-sm text-white/80 font-medium leading-relaxed">Ações práticas que você pode aplicar HOJE</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <Lightbulb className="w-5 h-5 text-[#F27D26] mb-4" />
              <p className="text-sm text-white/80 font-medium leading-relaxed">Mini-exercícios em cada passo</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <Sparkles className="w-5 h-5 text-[#F27D26] mb-4" />
              <p className="text-sm text-white/80 font-medium leading-relaxed">Foco em resultados rápidos e sustentáveis</p>
            </div>
          </div>
          
          <div className="mt-20 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <Logo className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-white/50">
              Por Desacelera & Avança <br/>
              <span className="text-white/30">Método da Produtividade Caótica™</span>
            </div>
          </div>
        </div>
      </header>

      {/* Intro Section - Split Layout */}
      <section className="py-24 px-6 border-y border-white/10 bg-[#111]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">A Corrida dos Ratos <br/> da Produtividade</h2>
            <div className="space-y-6 text-lg text-white/60 font-light leading-relaxed">
              <p>
                Você se sente assim? Começa o dia com uma lista gigante de tarefas, pula de uma reunião para outra, responde a um milhão de mensagens, apaga incêndios... e no final, apesar de toda a correria, a sensação é de que nada realmente importante avançou?
              </p>
              <p>
                Se a resposta for sim, você não está sozinho(a). Bem-vindo(a) à <strong className="text-white font-medium">'corrida dos ratos' da produtividade moderna.</strong>
              </p>
              <p>
                Muitos de nós já tentamos de tudo: planners elaborados, aplicativos com mil funcionalidades, rotinas matinais que exigem acordar antes do sol... e, na maioria das vezes, esses métodos falham no longo prazo. Por quê? Porque eles costumam ignorar um fator crucial: <strong className="text-white font-medium">a vida real.</strong>
              </p>
              <p>
                A vida real tem imprevistos. A vida real tem dias de baixa energia. A vida real tem demandas inesperadas e mudanças de plano.
              </p>
            </div>
          </div>
          
          <div className="bg-[#1A1A1A] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F27D26]/20 blur-[50px] rounded-full group-hover:bg-[#F27D26]/30 transition-colors"></div>
            <AlertCircle className="w-8 h-8 text-[#F27D26] mb-6 relative z-10" />
            <h3 className="text-xl font-bold text-white mb-4 relative z-10 uppercase tracking-wider text-sm">Atenção</h3>
            <p className="text-white/70 leading-relaxed relative z-10">
              Estes são os <strong className="text-white font-medium">primeiros socorros para sua produtividade</strong>. Pequenas ações que geram grandes resultados iniciais e te colocam no caminho certo. Preparado(a) para dar o primeiro passo e sair dessa corrida frustrante? Vamos lá!
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section - Brutalist / Technical Dashboard Vibe */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-20">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Os 7 Passos</h2>
            <div className="h-[1px] flex-grow bg-white/20"></div>
          </div>

          <div className="space-y-32">
            {steps.map((step, idx) => (
              <div key={step.id} className="relative">
                {/* Oversized Number */}
                <div className="absolute -top-20 -left-8 md:-left-16 text-[150px] md:text-[200px] font-black text-white/5 leading-none select-none pointer-events-none font-mono">
                  0{step.id}
                </div>
                
                <div className="relative z-10 grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
                  {/* Left Column: Title & Problem */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="font-mono text-xs text-[#F27D26] border border-[#F27D26]/30 px-2 py-1 rounded">PASSO {step.id}/7</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-8">{step.title}</h3>
                    
                    <div className="mb-8">
                      <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-3">O Contexto</h4>
                      <p className="text-white/70 leading-relaxed font-light">{step.problem}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-[#F27D26] mb-3">O Princípio</h4>
                      <p className="text-white/70 leading-relaxed font-light">{step.truth}</p>
                    </div>
                  </div>
                  
                  {/* Right Column: Fixes & Reflection */}
                  <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-8 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        Como Fazer
                      </h4>
                      <ul className="space-y-6 mb-12">
                        {step.fixes.map((fix, i) => (
                          <li key={i} className="flex items-start gap-4 group">
                            <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-emerald-500 group-hover:bg-emerald-500/10 transition-colors">
                              <Check className="w-3 h-3 text-white/40 group-hover:text-emerald-500 transition-colors" />
                            </div>
                            <span className="text-white/80 font-light leading-relaxed">{fix}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-8 border-t border-white/10">
                      <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#F27D26] mb-3">Mini-Exercício</h4>
                      <p className="text-white/60 italic text-sm leading-relaxed">
                        "{step.reflection}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary - Editorial Index Style */}
      <section className="py-32 px-6 bg-[#111] border-y border-white/10 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[300px] bg-[#F27D26]/5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col items-center mb-20 text-center">
            <span className="font-mono text-xs text-[#F27D26] border border-[#F27D26]/30 px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              Cheat Sheet
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              Resumo <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F27D26] to-[#FF4E00]">Visual</span>
            </h2>
          </div>
          
          <div className="flex flex-col">
            {/* Header Row (Hidden on mobile) */}
            <div className="hidden md:flex items-center gap-8 px-4 pb-6 border-b border-white/20 font-mono text-xs uppercase tracking-widest text-white/40">
              <div className="w-16">#</div>
              <div className="flex-1">O Passo Simples</div>
              <div className="w-12"></div>
              <div className="flex-1 text-right">A Solução Rápida</div>
            </div>

            {/* List Items */}
            {steps.map((step) => (
              <div 
                key={step.id} 
                className="group relative border-b border-white/10 py-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-8 hover:bg-white/[0.02] transition-all duration-300 px-4 -mx-4 rounded-2xl"
              >
                <div className="font-mono text-3xl md:text-4xl font-light text-white/10 group-hover:text-[#F27D26] transition-colors w-16">
                  0{step.id}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white/80 group-hover:text-white transition-colors">
                    {step.title}
                  </h3>
                </div>
                
                <div className="hidden md:flex w-12 justify-center">
                  <ArrowRight className="w-5 h-5 text-white/10 group-hover:text-[#F27D26] transition-colors transform group-hover:translate-x-2 duration-300" />
                </div>
                
                <div className="flex-1 md:text-right">
                  <div className="inline-flex items-center gap-3 bg-[#1A1A1A] group-hover:bg-[#F27D26]/10 border border-white/5 group-hover:border-[#F27D26]/30 px-5 py-3 rounded-full transition-all duration-300">
                    <Sparkles className="w-4 h-4 text-[#F27D26] opacity-50 group-hover:opacity-100 transition-opacity" />
                    <span className="text-white/60 group-hover:text-[#F27D26] font-medium text-sm md:text-base transition-colors">
                      {step.quickSolution}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Bold & Immersive */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-[#F27D26]/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
            Os Primeiros Passos Foram Dados... <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F27D26] to-[#FF4E00]">E Agora?</span>
          </h2>
          
          <p className="text-xl text-white/70 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
            Se você realizou os mini-exercícios ao longo destes 7 passos, você já começou a sentir uma diferença. Mas... e quando o caos realmente aperta? E quando a lista de demandas parece infinita e a energia some?
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 text-left mb-16">
            {[
              "Abraçar a incerteza e abandonar a busca pelo controle absoluto",
              "Usar erros como feedback estratégico (A Arte de Errar Melhor)",
              "Aplicar o Ciclo Orientar-Agir-Adaptar para navegar com flexibilidade",
              "Utilizar o Método TAE (Teste, Ajuste, Escale) para progredir",
              "Implementar o Planejamento 80/20 para criar folga e resiliência",
              "Gerenciar sua energia (não só seu tempo) e evitar o burnout"
            ].map((item, i) => (
              <div key={i} className="bg-[#111] border border-white/10 p-6 rounded-2xl flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Check className="w-4 h-4 text-[#F27D26]" />
                </div>
                <span className="text-white/80 font-light">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] border border-white/10 rounded-3xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F27D26] to-[#FF4E00]"></div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Quer parar de lutar contra a realidade?</h3>
            <p className="text-white/60 mb-10 max-w-xl mx-auto font-light leading-relaxed">
              Descubra o sistema completo para construir uma produtividade leve, eficaz e verdadeiramente sua — mesmo nos dias mais caóticos.
            </p>
            
            <a 
              href="https://www.desaceleraeavanca.com.br/metodo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-black font-bold text-lg px-10 py-5 rounded-full hover:bg-[#F27D26] hover:text-white transition-all hover:scale-105 active:scale-95"
            >
              Acesse o Método Completo
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="mt-6 font-mono text-xs text-white/40 tracking-widest uppercase">www.desaceleraeavanca.com.br/metodo</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
