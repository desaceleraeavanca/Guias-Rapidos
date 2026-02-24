import React from 'react';
import { CheckCircle2, AlertCircle, ArrowRight, Check, XCircle, Lightbulb, Sparkles } from 'lucide-react';

import { Footer } from '../components/Footer';
import { Logo } from '../components/Logo';

const errors = [
  {
    id: 1,
    title: "Buscar o Controle Absoluto",
    problem: "Você tenta prever e controlar cada minuto do seu dia. Cria listas detalhadas, planeja blocos de tempo perfeitos e espera que tudo se encaixe. Mas quando (inevitavelmente) surge um imprevisto, todo o sistema desmorona e você se sente um fracasso.",
    truth: "Quanto mais você tenta controlar tudo, mais frágil seu sistema fica. É como apertar areia na mão — quanto mais força você faz, mais escapa pelos dedos.",
    fixes: [
      "Planeje apenas 80% do seu tempo (deixe 20% de respiro para o inesperado)",
      "Foque no que você PODE controlar: suas prioridades, sua energia, suas respostas",
      "Substitua planos rígidos por ciclos adaptativos: Orientar → Agir → Aprender"
    ],
    reflection: "Olhe para sua agenda de hoje. Qual % está preenchido? Há espaço para imprevistos?",
    quickSolution: "Planeje 80%, deixe 20% de respiro"
  },
  {
    id: 2,
    title: "Esperar o 'Momento Perfeito'",
    problem: "\"Vou começar quando tiver mais tempo livre...\" \"Vou lançar isso quando estiver 100% pronto...\" Você adia indefinidamente, esperando condições ideais que nunca chegam.",
    truth: "O momento perfeito é uma ilusão. Enquanto você espera, oportunidades passam e seu potencial fica adormecido.",
    fixes: [
      "Comece AGORA com a versão mínima viável (mesmo que imperfeita)",
      "Use o Método TAE: Teste pequeno → Ajuste → Escale (depois de validar)",
      "Lembre-se: Ação imperfeita > Inação perfeita"
    ],
    reflection: "Qual tarefa você está adiando esperando 'o momento certo'? O que seria a versão mínima para começar hoje?",
    quickSolution: "Comece AGORA (versão mínima)"
  },
  {
    id: 3,
    title: "Tratar Todos os Erros Como Fracassos",
    problem: "Quando algo dá errado, você se critica duramente, desiste do projeto ou se paralisa pelo medo de repetir o 'fracasso'. O erro vira trauma, não aprendizado.",
    truth: "Cada erro é feedback valioso. Thomas Edison testou milhares de materiais antes da lâmpada funcionar. Ele não falhou 10.000 vezes — descobriu 10.000 formas que não funcionavam.",
    fixes: [
      "Distingua: Erro acidental (reativo) vs. Erro programado (proativo/teste)",
      "Faça a pergunta certa: 'O que posso aprender com isso?' em vez de 'Sou um fracasso'",
      "Crie um Diário de Aprendizados: Documente erros e suas lições"
    ],
    reflection: "Qual foi seu último 'erro'? Que lição ele trouxe que você pode usar a favor?",
    quickSolution: "Veja erros como feedback valioso"
  },
  {
    id: 4,
    title: "Dar a Mesma Importância a Tudo",
    problem: "Você trata cada item da lista como igualmente urgente e importante. Trabalha freneticamente, 'apagando incêndios' o dia todo, mas ao fim do dia não avançou no que realmente importa.",
    truth: "Pelo Princípio 80/20, apenas 20% das suas atividades geram 80% dos seus resultados. O resto é ruído.",
    fixes: [
      "Identifique seus '20% vitais': Quais 2-3 tarefas HOJE terão maior impacto?",
      "Elimine ou delegue os '80% triviais' sem culpa",
      "Faça o Ritual da Bússola: 5 min toda manhã definindo suas prioridades essenciais"
    ],
    reflection: "Das 10 coisas na sua lista hoje, quais 2 realmente movem a agulha? E se você só fizesse essas 2?",
    quickSolution: "Foque nos 20% vitais (80/20)"
  },
  {
    id: 5,
    title: "Gerenciar Apenas Tempo (E Ignorar Energia)",
    problem: "Você enche sua agenda de compromissos e tarefas, assumindo que terá a mesma energia o dia inteiro. Mas às 15h você está exausto, procrastinando e se culpando por 'falta de disciplina'.",
    truth: "Sua energia (física, mental, emocional) flutua ao longo do dia. Produtividade real não é só sobre TEMPO disponível, mas sobre energia + tempo.",
    fixes: [
      "Mapeie seus ritmos de energia: Quando você está no pico? Quando está em baixa?",
      "Aloque tarefas difíceis para horários de energia alta (e vice-versa)",
      "Proteja seu sono, pausas e descanso: Não são luxos, são combustível"
    ],
    reflection: "Em que horário do dia você se sente mais alerta? Está usando esse tempo nas tarefas mais importantes?",
    quickSolution: "Alinhe tarefas com energia disponível"
  },
  {
    id: 6,
    title: "A Mentalidade 'Tudo ou Nada'",
    problem: "Você começa um novo método/hábito com 100% de dedicação. No primeiro deslize, pensa 'Ah, já que falhei hoje, semana perdida'. Desiste completamente em vez de apenas retomar.",
    truth: "Perfeição é inatingível. Progresso vem da consistência imperfeita, não da execução perfeita. Um dia ruim não anula os 6 dias bons.",
    fixes: [
      "Substitua 'perfeição' por 'iteração': Pequenos ajustes constantes > Grande mudança única",
      "Celebre o progresso incremental: Fez 70% do planejado? Ótimo!",
      "Permita-se recomeçar sempre: Tropeçou hoje? Recalibre amanhã (sem drama)"
    ],
    reflection: "Que hábito você abandonou após 'quebrar a sequência'? Como seria retomá-lo hoje, sem exigir perfeição?",
    quickSolution: "Progresso imperfeito > Inação perfeita"
  },
  {
    id: 7,
    title: "Trabalhar Sozinho no Caos",
    problem: "Você enfrenta sozinho a sobrecarga, o burnout e a sensação de estar 'fazendo errado'. Não compartilha suas dificuldades porque acha que 'todo mundo consegue exceto eu'.",
    truth: "Todo mundo lida com caos. Compartilhar suas lutas (e lições) não é fraqueza — é como você constrói conexão, confiança e até autoridade. Além disso, sistemas de apoio aceleram seu progresso.",
    fixes: [
      "Encontre sua tribo: Pessoas que entendem a realidade do caos",
      "Compartilhe seus 'erros que ensinam': Transforma falhas em valor para outros",
      "Use ferramentas e sistemas testados: Não precisa reinventar a roda"
    ],
    reflection: "Com quem você poderia compartilhar suas dificuldades de produtividade sem julgamento?",
    quickSolution: "Encontre comunidade + ferramentas"
  }
];

export default function Erros() {
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
              Os 7 Erros <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F27D26] to-[#FF4E00]">Fatais</span> da <br/>
              Produtividade
            </h1>
          </div>
          
          <p className="text-xl md:text-3xl text-white/60 font-light tracking-tight max-w-2xl mb-16 border-l-2 border-white/20 pl-6">
            E como evitá-los para prosperar no caos.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <AlertCircle className="w-5 h-5 text-[#F27D26] mb-4" />
              <p className="text-sm text-white/80 font-medium leading-relaxed">Descubra os erros que sabotam 90% das pessoas</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-[#F27D26] mb-4" />
              <p className="text-sm text-white/80 font-medium leading-relaxed">Aprenda a navegar no caos sem burnout</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <Lightbulb className="w-5 h-5 text-[#F27D26] mb-4" />
              <p className="text-sm text-white/80 font-medium leading-relaxed">Transforme sua relação com a produtividade</p>
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Por que este <br/> guia existe?</h2>
            <div className="space-y-6 text-lg text-white/60 font-light leading-relaxed">
              <p>
                Se você já se sentiu frustrado porque seus planos 'perfeitos' desmoronaram antes do almoço... você não está sozinho.
              </p>
              <p>
                A maioria dos métodos de produtividade promete controle absoluto, rotinas impecáveis e planejamentos que nunca falham. O problema? <strong className="text-white font-medium">A vida real não funciona assim.</strong>
              </p>
              <p>
                Este guia revela os <strong className="text-white font-medium">7 erros mais comuns</strong> que mantêm pessoas inteligentes e dedicadas presas em um ciclo de frustração — e como corrigir cada um deles usando os princípios da Produtividade Caótica.
              </p>
            </div>
          </div>
          
          <div className="bg-[#1A1A1A] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F27D26]/20 blur-[50px] rounded-full group-hover:bg-[#F27D26]/30 transition-colors"></div>
            <AlertCircle className="w-8 h-8 text-[#F27D26] mb-6 relative z-10" />
            <h3 className="text-xl font-bold text-white mb-4 relative z-10 uppercase tracking-wider text-sm">Atenção</h3>
            <p className="text-white/70 leading-relaxed relative z-10">
              Este guia é apenas o começo. Os 7 erros já vão abrir seus olhos, mas para dominar completamente o método e transformar sua produtividade, você vai querer o sistema completo ao final.
            </p>
          </div>
        </div>
      </section>

      {/* Errors Section - Brutalist / Technical Dashboard Vibe */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-20">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Os 7 Erros</h2>
            <div className="h-[1px] flex-grow bg-white/20"></div>
          </div>

          <div className="space-y-32">
            {errors.map((error, idx) => (
              <div key={error.id} className="relative">
                {/* Oversized Number */}
                <div className="absolute -top-20 -left-8 md:-left-16 text-[150px] md:text-[200px] font-black text-white/5 leading-none select-none pointer-events-none font-mono">
                  0{error.id}
                </div>
                
                <div className="relative z-10 grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
                  {/* Left Column: Title & Problem */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="font-mono text-xs text-[#F27D26] border border-[#F27D26]/30 px-2 py-1 rounded">ERRO {error.id}/7</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-8">{error.title}</h3>
                    
                    <div className="mb-8">
                      <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-3">O Problema</h4>
                      <p className="text-white/70 leading-relaxed font-light">{error.problem}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-[#F27D26] mb-3">A Verdade</h4>
                      <p className="text-white leading-relaxed font-medium">{error.truth}</p>
                    </div>
                  </div>
                  
                  {/* Right Column: Fixes & Reflection */}
                  <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-8 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        Plano de Ação
                      </h4>
                      <ul className="space-y-6 mb-12">
                        {error.fixes.map((fix, i) => (
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
                      <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#F27D26] mb-3">Mini-Reflexão</h4>
                      <p className="text-white/60 italic text-sm leading-relaxed">
                        "{error.reflection}"
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
              <div className="flex-1">O Erro Fatal</div>
              <div className="w-12"></div>
              <div className="flex-1 text-right">A Solução Rápida</div>
            </div>

            {/* List Items */}
            {errors.map((error) => (
              <div 
                key={error.id} 
                className="group relative border-b border-white/10 py-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-8 hover:bg-white/[0.02] transition-all duration-300 px-4 -mx-4 rounded-2xl"
              >
                <div className="font-mono text-3xl md:text-4xl font-light text-white/10 group-hover:text-[#F27D26] transition-colors w-16">
                  0{error.id}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white/80 group-hover:text-white transition-colors">
                    {error.title}
                  </h3>
                </div>
                
                <div className="hidden md:flex w-12 justify-center">
                  <ArrowRight className="w-5 h-5 text-white/10 group-hover:text-[#F27D26] transition-colors transform group-hover:translate-x-2 duration-300" />
                </div>
                
                <div className="flex-1 md:text-right">
                  <div className="inline-flex items-center gap-3 bg-[#1A1A1A] group-hover:bg-[#F27D26]/10 border border-white/5 group-hover:border-[#F27D26]/30 px-5 py-3 rounded-full transition-all duration-300">
                    <Sparkles className="w-4 h-4 text-[#F27D26] opacity-50 group-hover:opacity-100 transition-opacity" />
                    <span className="text-white/60 group-hover:text-[#F27D26] font-medium text-sm md:text-base transition-colors">
                      {error.quickSolution}
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
            E Agora? <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F27D26] to-[#FF4E00]">Seu Próximo Passo</span>
          </h2>
          
          <p className="text-xl text-white/70 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
            Se você identificou <strong className="text-white font-medium">pelo menos 3 desses erros</strong> na sua rotina, você acabou de ganhar consciência. Mas saber sobre os erros é diferente de ter um <strong className="text-white font-medium">sistema completo</strong> para evitá-los.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 text-left mb-16">
            {[
              "O Ciclo completo: Orientar → Agir → Aprender & Adaptar",
              "Os 3 Passos Práticos para aplicar no dia a dia",
              "Como se tornar ANTIFRÁGIL (crescer COM o caos)",
              "Desafio de 7 dias + exercícios práticos",
              "Estudos de caso reais (Netflix, Amazon, etc.)",
              "Ferramentas prontas para usar imediatamente"
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
