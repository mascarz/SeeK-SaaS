import React from 'react';
import { Check, Zap } from 'lucide-react';
import { COLORS, TYPOGRAPHY, LAYOUT } from '../constants';

const Pricing = () => {
  const plans = [
    {
      name: 'MVP Express',
      price: 'Pra tirar do papel',
      duration: '2 a 4 semanas',
      color: COLORS.brandPrimary,
      features: [
        'Wireframe e fluxo principal',
        'MVP funcional publicado',
        'Validação com usuários reais',
        'CRM + IA integrados',
        'Design Responsivo Premium',
        'Agendamento Automático Whats'
      ],
    },
    {
      name: 'Escala Global',
      price: 'Para escalar sem limites',
      duration: '2 a 6 semanas',
      color: '#FFFFFF',
      featured: true,
      features: [
        'Arquitetura multi-tenant',
        'Pagamentos e identidade integrados',
        'Infra escalável e monitorada 24/7',
        'Automações Landing Pages Completas',
        'Cardápio Digital Inteligente',
        'Sites Personalizados ao seu Gosto',
        'Suporte Global Dedicado'
      ],
    },
  ];

  const sectionStyle = {
    padding: `${LAYOUT.paddingY} ${LAYOUT.paddingX}`,
    background: COLORS.bgPrimary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '32px',
    width: '100%',
    maxWidth: '900px',
  };

  const cardStyle = (featured) => ({
    padding: '56px 40px',
    background: featured ? 'rgba(255, 107, 0, 0.05)' : COLORS.bgCard,
    border: `1px solid ${featured ? COLORS.brandPrimary : COLORS.borderCard}`,
    borderRadius: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    position: 'relative',
    transition: 'all 0.3s ease',
  });

  const priceStyle = {
    fontSize: '28px',
    fontWeight: 900,
    lineHeight: 1.2,
    color: '#FFF',
  };

  const durationStyle = {
    fontSize: '16px',
    color: COLORS.brandPrimary,
    fontWeight: 700,
    marginTop: '8px',
    display: 'block'
  };

  const ctaButtonStyle = (featured) => ({
    padding: '18px',
    borderRadius: '12px',
    background: featured ? COLORS.brandPrimary : 'transparent',
    border: `1px solid ${COLORS.brandPrimary}`,
    color: '#fff',
    fontWeight: 800,
    fontSize: '16px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  });

  const handleSubscribe = (plan) => {
     const phoneNumber = "5544988601067";
     const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o plano ${plan.name} da SeeK.`);
     window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
   };

  return (
    <section id="precos" style={sectionStyle}>
      <span style={{ ...TYPOGRAPHY.label, color: COLORS.brandPrimary, marginBottom: '16px' }}>Soluções Corporativas</span>
      <h2 style={{ ...TYPOGRAPHY.sectionHeadline, textAlign: 'center', marginBottom: '60px' }}>
        Transforme sua visão em uma <br/> <span style={TYPOGRAPHY.textGradient}>[operação global.]</span>
      </h2>

      <div className="pricing-grid" style={gridStyle}>
        {plans.map((plan, i) => (
          <div 
            key={i} 
            className={`pricing-card ${plan.featured ? 'featured' : ''}`}
            style={cardStyle(plan.featured)}
          >
            {plan.featured && (
              <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: COLORS.brandPrimary, padding: '8px 20px', borderRadius: '50px', fontSize: '12px', fontWeight: 900, color: '#000', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Zap size={14} fill="currentColor" /> MAIS PODEROSO
              </div>
            )}

            <div>
              <h3 style={{ ...TYPOGRAPHY.subHeadline, color: plan.featured ? COLORS.brandPrimary : '#FFF', marginBottom: '16px', fontSize: '24px' }}>{plan.name}</h3>
              <div style={priceStyle}>
                {plan.price}
              </div>
              <span style={durationStyle}>Prazo: {plan.duration}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {plan.features.map((f, j) => (
                <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', fontSize: '15px', color: COLORS.textSecondary }}>
                  <Check size={18} color={COLORS.brandPrimary} style={{ marginTop: '2px', flexShrink: 0 }} />
                  {f}
                </div>
              ))}
            </div>

            <button 
              onClick={() => handleSubscribe(plan)}
              style={ctaButtonStyle(plan.featured)} 
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                if(!plan.featured) e.currentTarget.style.background = 'rgba(255,107,0,0.1)';
              }} 
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                if(!plan.featured) e.currentTarget.style.background = 'transparent';
              }}
            >
              Iniciar Projeto
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '60px', display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <span style={{ fontSize: '14px', color: COLORS.textTertiary }}>✓ Suporte Global 24/7</span>
        <span style={{ fontSize: '14px', color: COLORS.textTertiary }}>✓ Setup e Consultoria Inclusos</span>
        <span style={{ fontSize: '14px', color: COLORS.textTertiary }}>✓ Infraestrutura Escalável</span>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .pricing-card { transform: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Pricing;
