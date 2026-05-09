import React, { useState } from 'react';
import { Zap, CheckCircle, Star, ShoppingBag, CalendarCheck, Heart, LayoutGrid } from 'lucide-react';
import { COLORS, TYPOGRAPHY, LAYOUT } from '../constants';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('lanchonete');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const tabs = [
    { id: 'lanchonete', label: 'Lanchonete 🍔', headline: 'Seu Cardápio Digital Vende no ', highlight: 'Automático.' },
    { id: 'salao', label: 'Salão 💆', headline: 'Seu Salão Agenda ', highlight: 'Sozinho, 24h por Dia.' },
    { id: 'clinica', label: 'Clínica 🏥', headline: 'Sua Clínica Nunca Mais ', highlight: 'Perde um Paciente.' },
    { id: 'varejo', label: 'Varejo 🛒', headline: 'Seu Negócio Atende Enquanto Você ', highlight: 'Dorme.' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      // Notificação por e-mail via FormSubmit (Silencioso)
      try {
        fetch("https://formsubmit.co/ajax/kauan.dev.full@gmail.com", {
          method: "POST",
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            mensagem: "Novo lead interessado em criar site!",
            origem: "Hero Section - SeeK Landing Page"
          })
        });
      } catch (error) {
        console.error("Erro ao enviar notificação:", error);
      }

      const phoneNumber = "5511999999999";
      const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o SeeK. Meu e-mail é: ${email}`);
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      setSubmitted(true);
    }
  };

  const currentTab = tabs.find(t => t.id === activeTab);

  const sectionStyle = {
    minHeight: '100vh',
    padding: `120px ${LAYOUT.paddingX} 80px`,
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const orbStyle = (color, top, left) => ({
    position: 'absolute',
    width: '600px',
    height: '600px',
    background: `radial-gradient(circle, ${color}22, transparent 70%)`,
    top,
    left,
    pointerEvents: 'none',
    zIndex: 0,
  });

  const contentGridStyle = {
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: '60px',
    width: '100%',
    maxWidth: LAYOUT.maxWidth,
    zIndex: 1,
    alignItems: 'center',
  };

  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    borderRadius: '50px',
    background: 'rgba(16, 185, 129, 0.1)',
    border: '1px solid rgba(16, 185, 129, 0.25)',
    color: COLORS.success,
    fontSize: '14px',
    fontWeight: 600,
    marginBottom: '32px',
  };

  const tabContainerStyle = {
    display: 'flex',
    gap: '12px',
    marginBottom: '40px',
    flexWrap: 'wrap',
  };

  const getTabStyle = (isActive) => ({
    padding: '12px 24px',
    borderRadius: '50px',
    fontSize: '14px',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    background: isActive ? COLORS.gradientPrimary : 'rgba(255, 255, 255, 0.06)',
    color: '#fff',
    border: 'none',
    boxShadow: isActive ? '0 8px 20px rgba(99, 102, 241, 0.3)' : 'none',
  });

  const inputContainerStyle = {
    display: 'flex',
    gap: '12px',
    background: 'rgba(255, 255, 255, 0.03)',
    padding: '6px',
    borderRadius: '60px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    maxWidth: '500px',
    marginTop: '40px',
    transition: 'border-color 0.3s ease',
  };

  const inputStyle = {
    flex: 1,
    background: 'transparent',
    border: 'none',
    color: '#fff',
    padding: '0 24px',
    fontSize: '16px',
  };

  const submitButtonStyle = {
    background: COLORS.gradientPrimary,
    color: '#fff',
    padding: '14px 28px',
    borderRadius: '50px',
    fontWeight: 700,
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: COLORS.buttonShadow,
    transition: 'transform 0.2s ease',
  };

  const mockupContainerStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '380px',
    margin: '0 auto',
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1))',
    padding: '20px',
    borderRadius: '60px',
    border: '1px solid rgba(59, 130, 246, 0.2)',
  };

  const phoneStyle = {
    background: '#070B14',
    borderRadius: '40px',
    border: '8px solid #1A1F2E',
    overflow: 'hidden',
    aspectRatio: '9/19',
    boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(59,130,246,0.1)',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <section style={sectionStyle}>
      <div style={orbStyle(COLORS.bluePrimary, '-100px', '-100px')} />
      <div style={orbStyle(COLORS.indigo, '40%', '30%')} />

      <div className="hero-grid" style={contentGridStyle}>
        <div className="hero-left">
          <div style={badgeStyle}>
            <span className="animate-pulse" style={{ width: '8px', height: '8px', borderRadius: '50%', background: COLORS.success }} />
            Novo pedido em São Paulo via SeeK · agora mesmo
          </div>

          <div style={tabContainerStyle}>
            {tabs.map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={getTabStyle(activeTab === tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <h1 style={{ ...TYPOGRAPHY.heroHeadline, marginBottom: '24px' }}>
            {currentTab.headline}
            <span style={TYPOGRAPHY.textGradient}>{currentTab.highlight}</span>
          </h1>

          <p style={{ ...TYPOGRAPHY.body, color: COLORS.textSecondary, fontSize: '18px', maxWidth: '580px', marginBottom: '32px' }}>
            O SeeK cria seu site de pedidos ou agendamentos com IA integrada — nossa equipe configura tudo para você em menos de 24 horas. Sem código, sem complicação.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} style={inputContainerStyle}>
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                style={inputStyle}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" style={submitButtonStyle} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                Criar meu Site Agora →
              </button>
            </form>
          ) : (
            <div style={{ ...badgeStyle, marginTop: '40px', background: 'rgba(16, 185, 129, 0.1)', color: COLORS.success, padding: '16px 24px' }}>
              <CheckCircle size={24} />
              Pronto! Nossa equipe entrará em contato em instantes.
            </div>
          )}

          <div style={{ display: 'flex', gap: '24px', marginTop: '32px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '14px', color: COLORS.textTertiary, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle size={14} color={COLORS.success} /> Setup em 24h pela nossa equipe
            </span>
            <span style={{ fontSize: '14px', color: COLORS.textTertiary, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle size={14} color={COLORS.success} /> 7 dias grátis
            </span>
            <span style={{ fontSize: '14px', color: COLORS.textTertiary, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle size={14} color={COLORS.success} /> Sem cartão de crédito
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '40px' }}>
            <div style={{ display: 'flex' }}>
              {[1, 2, 3, 4].map(i => (
                <div key={i} style={{ width: '36px', height: '36px', borderRadius: '50%', border: '2px solid #070B14', marginLeft: i === 1 ? 0 : '-10px', background: `url(https://i.pravatar.cc/100?img=${i+10}) center/cover` }} />
              ))}
            </div>
            <div>
              <div style={{ color: COLORS.stars, display: 'flex', gap: '2px', marginBottom: '4px' }}>
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: COLORS.textSecondary }}>+800 negócios já no SeeK</span>
            </div>
          </div>
        </div>

        <div className="hero-right" style={{ position: 'relative' }}>
          <div style={mockupContainerStyle}>
            <div style={phoneStyle}>
              {/* Phone Header */}
              <div style={{ padding: '40px 20px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {activeTab === 'lanchonete' ? '🍔' : activeTab === 'salao' ? '💆' : activeTab === 'clinica' ? '🏥' : '🛒'}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '14px' }}>{activeTab === 'lanchonete' ? 'Burguer King' : 'Studio Hair' }</div>
                      <div style={{ fontSize: '12px', color: COLORS.success, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: COLORS.success }} /> Aberto agora
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Content */}
              <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { name: 'Classic Burger', price: 'R$ 34,90', icon: '🍔' },
                  { name: 'Batata Rústica', price: 'R$ 18,00', icon: '🍟' },
                  { name: 'Milkshake', price: 'R$ 22,50', icon: '🥤' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '20px' }}>{item.icon}</span>
                      <span style={{ fontWeight: 500, fontSize: '14px' }}>{item.name}</span>
                    </div>
                    <span style={{ color: COLORS.bluePrimary, fontWeight: 700, fontSize: '14px' }}>{item.price}</span>
                  </div>
                ))}

                <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <span style={{ color: COLORS.textSecondary }}>Total</span>
                    <span style={{ fontWeight: 700 }}>R$ 75,40</span>
                  </div>
                  <button style={{ ...submitButtonStyle, width: '100%', justifyContent: 'center' }}>Confirmar Pedido →</button>
                </div>
              </div>

              {/* IA Bubble */}
              <div style={{ padding: '16px', background: 'rgba(59, 130, 246, 0.05)', borderTop: '1px solid rgba(59, 130, 246, 0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: COLORS.bluePrimary }} />
                  <span style={{ fontSize: '10px', fontWeight: 700, color: COLORS.bluePrimary, textTransform: 'uppercase' }}>IA Assistida · Online</span>
                </div>
                <p style={{ fontSize: '12px', color: COLORS.textSecondary, lineHeight: 1.4 }}>
                  "Ótima escolha! Gostaria de adicionar um Brownie por apenas R$ 9,90?"
                </p>
              </div>
            </div>

            {/* Floating Cards */}
            <div style={{ position: 'absolute', top: '-20px', right: '-40px', background: '#0D1117', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', minWidth: '160px', zIndex: 2 }} className="floating-card">
              <div style={{ fontSize: '12px', color: COLORS.textSecondary, marginBottom: '4px' }}>Hoje</div>
              <div style={{ fontWeight: 800, fontSize: '20px', marginBottom: '4px' }}>R$ 3.840</div>
              <div style={{ fontSize: '12px', color: COLORS.success, fontWeight: 700 }}>▲ +34% vs ontem</div>
            </div>

            <div style={{ position: 'absolute', bottom: '40px', left: '-60px', background: '#0D1117', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', maxWidth: '200px', zIndex: 2 }} className="floating-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <div style={{ padding: '6px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '8px' }}><Zap size={14} color={COLORS.bluePrimary} /></div>
                <span style={{ fontSize: '12px', fontWeight: 700 }}>Atendidos pela IA</span>
              </div>
              <div style={{ fontWeight: 800, fontSize: '18px' }}>247 clientes</div>
              <div style={{ fontSize: '11px', color: COLORS.textSecondary }}>Sem intervenção humana</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; gap: 80px !important; }
          .hero-left { display: flex; flexDirection: column; align-items: center; }
          .tab-container { justify-content: center; }
          .floating-card { display: none; }
          .mockup-container { max-width: 300px !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
