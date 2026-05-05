import React from 'react';
import { 
  MessageCircle, 
  Instagram, 
  ArrowRight, 
  Search, 
  Zap, 
  ShieldCheck, 
  Menu, 
  X, 
  UtensilsCrossed, 
  Calendar, 
  Users, 
  Bot, 
  Sparkles,
  ChevronRight,
  MousePointerClick,
  Check
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import PrivacyPage from './Privacy';
import TermsPage from './Terms';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState('home');
  const [roiOrders, setRoiOrders] = React.useState(100);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [activeNiche, setActiveNiche] = React.useState('lanchonete'); // 'lanchonete', 'salao', 'clinica'

  const niches = {
    lanchonete: {
      title: "Seu Cardápio Digital",
      highlight: "Vende no Automático.",
      desc: "Transforme sua lanchonete com um sistema de pedidos intuitivo e focado em vendas via WhatsApp.",
      icon: <UtensilsCrossed size={24} />
    },
    salao: {
      title: "Sua Agenda de Salão",
      highlight: "Sempre Lotada.",
      desc: "Agenda inteligente que trabalha 24h, reduz faltas e organiza sua rotina de beleza.",
      icon: <Sparkles size={24} />
    },
    clinica: {
      title: "Sua Clínica com",
      highlight: "Gestão de Elite.",
      desc: "Agendamentos automáticos e CRM personalizado para clínicas que buscam o próximo nível.",
      icon: <Calendar size={24} />
    }
  };

  const whatsappUrl = "https://wa.me/5544988601067";
  const instagramUrl = "https://instagram.com/seek.br";
  const platformUrl = "https://seek.br";

  const solutions = [
    {
      title: "Cardápio Digital Premium",
      description: "Transforme sua lanchonete com um sistema de pedidos intuitivo, rápido e focado em vendas via WhatsApp.",
      icon: <UtensilsCrossed className="w-8 h-8" />,
      tag: "Food Tech",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Agendamento Automático",
      description: "Para salões e clínicas: agenda inteligente que trabalha 24h, reduz faltas e organiza sua rotina.",
      icon: <Calendar className="w-8 h-8" />,
      tag: "Health & Beauty",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "CRM Personalizado",
      description: "Gestão completa de clientes com automação de pós-venda e fidelização sob medida.",
      icon: <Users className="w-8 h-8" />,
      tag: "Business",
      color: "from-purple-500/20 to-indigo-500/20"
    },
    {
      title: "Automações com IA",
      description: "Integramos inteligência artificial para responder clientes e otimizar processos internos.",
      icon: <Bot className="w-8 h-8" />,
      tag: "AI Tech",
      color: "from-green-500/20 to-emerald-500/20"
    }
  ];

  const features = [
    "Design Minimalista & Moderno",
    "Foco Total em Conversão",
    "Suporte Assistido Premium",
    "Escalabilidade para seu Negócio"
  ];

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const roiValue = (roiOrders * 5).toLocaleString('pt-BR');

  if (currentPage === 'privacy') return <PrivacyPage onBack={() => setCurrentPage('home')} />;
  if (currentPage === 'terms') return <TermsPage onBack={() => setCurrentPage('home')} />;

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 overflow-x-hidden"
    >
      {/* Dynamic Glow Background */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.07), transparent)`
        }}
      />
      {/* Navbar */}
      <nav className="fixed w-full z-[100] bg-[#050505]/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter flex items-center gap-2 cursor-pointer group"
            onClick={() => setCurrentPage('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform">
              <span className="text-white text-xl">S</span>
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">SeeK</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-10">
            {['Soluções', 'Como Funciona', 'Diferenciais'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-sm font-semibold text-gray-400 hover:text-white transition-all hover:tracking-widest"
              >
                {item}
              </a>
            ))}
            <a href={platformUrl} className="relative group overflow-hidden px-6 py-2.5 rounded-full font-bold transition-all">
              <span className="absolute inset-0 bg-white transition-transform group-hover:scale-105"></span>
              <span className="relative text-black">Acessar SeeK.br</span>
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Activity Ticker (Dynamic Social Proof) */}
      <div className="fixed top-24 left-6 z-[40] hidden lg:block">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center gap-4 shadow-2xl"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <div className="text-xs font-bold tracking-tight">
            <span className="text-blue-400">Novo pedido</span> em São Paulo via SeeK
          </div>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-600/30 blur-[150px] rounded-full"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full"
          />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left flex flex-col items-start"
          >
            {/* Niche Selector */}
            <div className="flex gap-2 mb-10 p-1 bg-white/5 rounded-2xl w-fit border border-white/5">
              {Object.keys(niches).map((n) => (
                <button
                  key={n}
                  onClick={() => setActiveNiche(n)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeNiche === n ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-gray-500 hover:text-white'}`}
                >
                  {niches[n].icon}
                  {n}
                </button>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-8">
              <Sparkles size={14} className="animate-pulse" />
              SaaS Assistido de Próxima Geração
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNiche}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-6xl md:text-[95px] font-black tracking-tight mb-8 leading-[0.85] text-white">
                  {niches[activeNiche].title} <br /> 
                  <span className="relative inline-block text-blue-500">
                    {niches[activeNiche].highlight}
                  </span>
                </h1>
                
                <p className="text-gray-400 text-xl md:text-2xl max-w-xl mb-12 leading-relaxed font-medium">
                  {niches[activeNiche].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <motion.a 
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.95 }}
                href={whatsappUrl} 
                className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all shadow-2xl shadow-blue-500/40 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Criar meu Site Agora <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.a>
            </div>
          </motion.div>

          {/* Animated Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block justify-self-end"
          >
            <div className="relative w-[380px] h-[760px] bg-[#111] rounded-[3.5rem] border-[10px] border-[#222] shadow-[0_0_100px_rgba(37,99,235,0.2)] overflow-hidden mx-auto">
              {/* Phone Content */}
              <div className="absolute top-0 left-0 w-full h-full bg-[#050505] p-6 pt-12">
                <div className="w-20 h-1 bg-white/10 rounded-full mx-auto mb-10" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeNiche}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                        {niches[activeNiche].icon}
                      </div>
                      <div>
                        <div className="h-3 w-24 bg-white/20 rounded-full mb-2" />
                        <div className="h-2 w-16 bg-white/10 rounded-full" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="h-4 w-full bg-white/5 rounded-full" />
                      <div className="h-4 w-4/5 bg-white/5 rounded-full" />
                      <div className="h-4 w-2/3 bg-white/5 rounded-full" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="aspect-square rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center">
                         <div className="w-8 h-8 rounded-full bg-blue-500/10 animate-pulse" />
                      </div>
                      <div className="aspect-square rounded-2xl bg-white/5 border border-white/5" />
                    </div>

                    <div className="p-4 rounded-2xl bg-blue-600 text-center font-bold text-sm">
                      Confirmar Agora
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Simulated Floating Chat */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute bottom-10 left-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-medium"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-4 h-4 rounded-full bg-green-500" />
                    <span className="text-gray-400">IA Assistida Online</span>
                  </div>
                  "Olá! Como posso ajudar você hoje?"
                </motion.div>
              </div>
            </div>

            {/* Decorative Elements around phone */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-600/20 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="soluções" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Soluções que escalam.</h2>
            <div className="w-24 h-2 bg-blue-600 rounded-full mb-8"></div>
            <p className="text-gray-400 text-xl max-w-2xl">Desenvolvemos o ecossistema digital completo para seu nicho, com tecnologia que trabalha por você.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`p-8 rounded-[2.5rem] bg-gradient-to-br ${item.color} border border-white/5 hover:border-white/20 transition-all group`}
              >
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4 block">{item.tag}</span>
                <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-8">{item.description}</p>
                <a href={whatsappUrl} className="flex items-center gap-2 font-bold text-sm group-hover:gap-4 transition-all">
                  Quero esta solução <ChevronRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Niche Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Feito para o seu negócio.</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">Soluções customizadas para setores que exigem agilidade e precisão no atendimento.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Lanchonetes & Delivery", icon: <UtensilsCrossed size={40} />, desc: "Cardápio digital que vende sozinho e organiza seus pedidos do WhatsApp." },
              { title: "Salões & Estética", icon: <Sparkles size={40} />, desc: "Agenda automatizada para você nunca mais perder um cliente por demora no chat." },
              { title: "Clínicas & Consultórios", icon: <Calendar size={40} />, desc: "Agendamentos inteligentes e lembretes automáticos para reduzir faltas." }
            ].map((niche, i) => (
              <div key={i} className="p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all text-center group">
                <div className="w-20 h-20 rounded-3xl bg-blue-600/10 flex items-center justify-center mx-auto mb-8 text-blue-500 group-hover:scale-110 transition-transform">
                  {niche.icon}
                </div>
                <h3 className="text-2xl font-black mb-4">{niche.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{niche.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-16 text-center">Dúvidas Frequentes</h2>
          <div className="space-y-6">
            {[
              { q: "Preciso entender de tecnologia?", a: "Absolutamente não. O SeeK é um SaaS Assistido. Nossa equipe configura tudo para você, desde o cardápio até as automações de IA." },
              { q: "Como funciona a assistência?", a: "Você nos passa sua necessidade e nós implementamos. É como ter um braço direito de tecnologia dentro da sua empresa." },
              { q: "Posso cancelar quando quiser?", a: "Sim, não temos fidelidade escondida. Queremos que você fique conosco pelos resultados que entregamos." },
              { q: "A IA atende como um humano?", a: "A IA é treinada com os dados do seu negócio para ser cordial, rápida e eficiente, fechando vendas e agendamentos de forma natural." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                <h4 className="text-xl font-black mb-4 flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  {item.q}
                </h4>
                <p className="text-gray-500 font-medium leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Inteligência Section */}
      <section id="nossa-inteligencia" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-xs font-black uppercase tracking-[0.2em] mb-8"
            >
              <Bot size={14} />
              O Cérebro do SeeK
            </motion.div>
            <h2 className="text-4xl md:text-7xl font-black mb-6">Nossa Inteligência.</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">Conheça os pilares que tornam o SeeK a solução mais avançada para o seu negócio.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Processamento Natural",
                desc: "Nossa IA compreende gírias, áudios e intenções complexas, atendendo como um humano de alta performance.",
                icon: <MessageCircle className="w-8 h-8 text-purple-500" />,
                gradient: "from-purple-600/20 to-blue-600/10"
              },
              {
                title: "Aprendizado Contínuo",
                desc: "O SeeK aprende com cada interação do seu cliente, tornando-se mais inteligente e eficiente a cada dia.",
                icon: <Sparkles className="w-8 h-8 text-blue-500" />,
                gradient: "from-blue-600/20 to-cyan-600/10"
              },
              {
                title: "Análise Preditiva",
                desc: "Identificamos padrões de compra e agendamento para antecipar as necessidades dos seus clientes.",
                icon: <Zap className="w-8 h-8 text-yellow-500" />,
                gradient: "from-yellow-600/20 to-orange-600/10"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`p-12 rounded-[3rem] bg-gradient-to-br ${item.gradient} border border-white/5 hover:border-white/20 transition-all group relative overflow-hidden`}
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-colors" />
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-12 rounded-[4rem] bg-white/[0.02] border border-white/5 relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h3 className="text-3xl font-black mb-6">Integração Total & Assistida</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Diferente de outros SaaS, a inteligência do SeeK não é genérica. Nossa equipe de especialistas treina a IA especificamente para os seus produtos, serviços e tom de voz da sua marca.
                </p>
                <div className="flex flex-wrap gap-4">
                  {["Treinamento VIP", "Setup Personalizado", "Monitoramento Real", "Ajustes Mensais"].map((tag, i) => (
                    <span key={i} className="px-4 py-2 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative aspect-video rounded-3xl bg-black/40 border border-white/5 flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20 opacity-50 group-hover:opacity-100 transition-opacity" />
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Bot size={80} className="text-white/20" />
                </motion.div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="h-full w-1/3 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Differentials */}
      <section id="diferenciais" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-8">Tecnologia de ponta, <br/><span className="text-blue-500">sem complicação.</span></h2>
              <p className="text-gray-400 text-xl mb-12 font-medium">Nosso stack técnico foi construído para ser invisível. Você não precisa entender de código para ter um software que performa como as gigantes do Vale do Silício.</p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: "Uptime 99.9%", icon: <Zap className="text-yellow-500" />, desc: "Sua operação nunca para." },
                  { title: "Segurança SSL", icon: <ShieldCheck className="text-green-500" />, desc: "Dados protegidos de ponta a ponta." },
                  { title: "Escala Ilimitada", icon: <ArrowRight className="text-blue-500 rotate-[-45deg]" />, desc: "Cresça sem se preocupar com infra." },
                  { title: "IA Adaptativa", icon: <Bot className="text-purple-500" />, desc: "Aprende com cada interação." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-[3rem] p-1 border border-white/10"
            >
              <div className="bg-[#050505] rounded-[2.9rem] p-8 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-xs font-mono text-gray-500 ml-4">seek_intelligence_core.sys</div>
                </div>
                <div className="font-mono text-sm space-y-4">
                  <p className="text-blue-400">{"// Inicializando protocolos de IA..."}</p>
                  <p className="text-gray-400">{"const analyzeBusiness = async (data) => {"}</p>
                  <p className="text-gray-400 ml-4">{"  const pattern = await AI.detect(data);"}</p>
                  <motion.p 
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-green-400 ml-4"
                  >
                    {"  return optimizeConversion(pattern);"}
                  </motion.p>
                  <p className="text-gray-400">{"};"}</p>
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-purple-400">{"STATUS: 100% OPERACIONAL"}</p>
                    <p className="text-gray-500">{"LATÊNCIA: 14ms"}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-[#111] rounded-[3rem] p-8 md:p-16 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-6">Quanto o SeeK economiza para você?</h2>
              <p className="text-gray-400 text-lg mb-8 font-medium">Calcule o impacto da nossa automação e assistência no seu volume mensal de vendas.</p>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-4">
                    <span className="font-bold text-sm uppercase tracking-widest text-gray-500">Pedidos/Agendamentos por mês</span>
                    <span className="font-black text-blue-400">{roiOrders}</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="1000" 
                    value={roiOrders}
                    onChange={(e) => setRoiOrders(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-blue-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-3xl p-8 border border-white/5 text-center">
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-4">Estimativa de Ganho/Economia</p>
              <div className="text-5xl md:text-7xl font-black text-blue-500 mb-4">
                R$ {roiValue}
              </div>
              <p className="text-gray-400 text-sm">Baseado em eficiência operacional e redução de perdas de leads.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Investimento com Retorno.</h2>
            <p className="text-gray-400 text-xl">Escolha o nível de aceleração do seu negócio.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Start", 
                price: "49", 
                features: ["Cardápio Digital", "Automação WhatsApp", "Suporte em 24h", "Até 100 pedidos/mês"],
                recommended: false
              },
              { 
                name: "Business Pro", 
                price: "69", 
                features: ["Agendamento Automático", "CRM Integrado", "IA de Atendimento", "Suporte Prioritário", "Pedidos Ilimitados"],
                recommended: true
              },
              { 
                name: "Elite AI", 
                price: "Sob Consulta", 
                features: [
                  "Desenvolvimento sob Medida (De acordo com a sua necessidade)",
                  "Treinamento de Equipe", 
                  "Consultoria de Growth"
                ],
                recommended: false
              }
            ].map((plan, i) => (
              <div key={i} className={`p-10 rounded-[3rem] border ${plan.recommended ? 'border-blue-500 bg-blue-500/5 scale-105' : 'border-white/5 bg-white/[0.02]'} flex flex-col relative`}>
                {plan.recommended && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest">
                    Mais Recomendado
                  </div>
                )}
                <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-sm font-bold text-gray-500">R$</span>
                  <span className="text-5xl font-black">{plan.price}</span>
                  {plan.price !== "Sob Consulta" && <span className="text-sm font-bold text-gray-500">/mês</span>}
                </div>
                
                <ul className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-400 font-medium">
                      <Check size={18} className="text-blue-500" /> {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={whatsappUrl} 
                  className={`w-full py-5 rounded-2xl font-black text-center transition-all ${plan.recommended ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-500/20' : 'bg-white/5 text-white hover:bg-white/10'}`}
                >
                  Selecionar {plan.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI & Automation Feature */}
      <section className="py-32 px-6 bg-white/[0.02] overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
              A Inteligência Artificial <br />
              <span className="text-blue-500">no coração</span> do seu negócio.
            </h2>
            <div className="space-y-6">
              {[
                { title: "Atendimento 24/7", desc: "IA que responde dúvidas e fecha agendamentos no automático." },
                { title: "CRM Preditivo", desc: "Saiba quem são seus melhores clientes e quando eles vão voltar." },
                { title: "Gestão Ágil", desc: "Painéis intuitivos para você focar no que realmente importa." }
              ].map((feature, i) => (
                <div key={i} className="flex gap-6 items-start p-6 rounded-3xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center shrink-0 text-blue-500">
                    <Check size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-2">{feature.title}</h4>
                    <p className="text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-800 p-1">
              <div className="w-full h-full bg-[#050505] rounded-[2.9rem] flex items-center justify-center relative overflow-hidden group">
                <Bot size={150} className="text-blue-600 opacity-20 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
                <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
                  <p className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-widest">Status da Automação</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-black text-2xl">Ativa & Otimizando</span>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      transition={{ duration: 2, delay: 0.5 }}
                      className="h-full bg-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-500 text-sm font-bold uppercase tracking-[0.4em] mb-16">EMPRESAS QUE JÁ ESTÃO NO FUTURO</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {['PEDIR AGORA', 'NEXUS', 'TECHHUB', 'QUANTUM', 'INOVATECH'].map(brand => (
              <div key={brand} className="text-2xl font-black tracking-tighter cursor-default">{brand}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[4rem] blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
          <div className="relative bg-gradient-to-br from-blue-600 to-indigo-800 rounded-[4rem] p-12 md:p-24 text-center overflow-hidden">
            <motion.div 
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] border border-white/10 rounded-full"
            />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight">
                Chega de processos lentos. <br />
                Escala o seu negócio com SeeK.
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={whatsappUrl} 
                  className="w-full sm:w-auto px-12 py-6 bg-white text-blue-700 rounded-3xl font-black text-2xl shadow-2xl hover:shadow-white/20 transition-all"
                >
                  Falar no WhatsApp
                </motion.a>
                <a href={instagramUrl} className="flex items-center gap-3 text-white font-black text-xl group">
                  <Instagram size={28} className="group-hover:rotate-12 transition-transform" /> @seek.br
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 px-6">
        {/* Scarcity Banner */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="bg-blue-600/10 border border-blue-500/20 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                <Sparkles className="text-white" size={24} />
              </div>
              <div>
                <h5 className="font-black text-lg">Vagas Limitadas para Maio</h5>
                <p className="text-gray-400 text-sm font-medium">Restam apenas 4 vagas para implementação assistida este mês.</p>
              </div>
            </div>
            <a href={whatsappUrl} className="px-8 py-3 bg-blue-600 text-white rounded-xl font-black text-sm hover:bg-blue-700 transition-colors">
              Garantir minha vaga
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-sm">
            <div className="text-3xl font-black tracking-tighter mb-6">SeeK</div>
            <p className="text-gray-500 leading-relaxed font-medium">
              Líder em SaaS Assistido para pequenos e médios negócios. Criamos sua presença digital com inteligência e foco em conversão extrema.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-24">
            <div>
              <h5 className="font-black text-sm uppercase tracking-widest mb-6">Produto</h5>
              <ul className="space-y-4 text-gray-500 text-sm font-bold">
                <li><a href="#soluções" className="hover:text-white transition-colors">Soluções</a></li>
                <li><a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a></li>
                <li><a href={platformUrl} className="hover:text-white transition-colors">Acessar App</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-sm uppercase tracking-widest mb-6">Legal</h5>
              <ul className="space-y-4 text-gray-500 text-sm font-bold">
                <li><button onClick={() => setCurrentPage('privacy')} className="hover:text-white transition-colors">Privacidade</button></li>
                <li><button onClick={() => setCurrentPage('terms')} className="hover:text-white transition-colors">Termos</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-sm uppercase tracking-widest mb-6">Social</h5>
              <ul className="space-y-4 text-gray-500 text-sm font-bold">
                <li><a href={instagramUrl} className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href={whatsappUrl} className="hover:text-white transition-colors">WhatsApp</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 text-center text-gray-600 text-xs font-bold uppercase tracking-widest">
          © 2026 SeeK.br - Todos os direitos reservados.
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-[100] w-20 h-20 bg-green-500 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-green-500/40"
      >
        <MessageCircle className="w-10 h-10 text-white fill-white" />
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-white text-green-600 rounded-full flex items-center justify-center font-black text-lg border-4 border-green-500">1</div>
      </motion.a>
    </div>
  );
};

export default App;
