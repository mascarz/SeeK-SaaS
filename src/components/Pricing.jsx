import React, { useState } from 'react';
import { Check, Star, Zap } from 'lucide-react';
import { COLORS, TYPOGRAPHY, LAYOUT } from '../constants';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Start',
      price: isAnnual ? '39' : '49',
      color: COLORS.bluePrimary,
      features: ['1 negócio', 'Cardápio/Agenda', 'IA Básica', '150 pedidos/mês', 'Suporte 24h', 'Setup incluso'],
    },
    {
      name: 'Business Pro',
      price: isAnnual ? '69' : '89',
      color: COLORS.indigo,
      featured: true,
      features: ['3 unidades', 'IA Avançada Upsell', 'CRM Auto', 'Pedidos Ilimitados', 'Suporte 24/7', 'Setup+Treinamento', 'Relatórios', 'Ajustes Mensais'],
    },
    {
      name: 'Elite AI',
      price: 'Sob consulta',
      color: COLORS.pink,
      features: ['Ilimitados', 'Desenvolvimento sob medida', 'IA exclusiva', 'Consultoria', 'CSM dedicado', 'Ajustes Prioritários'],
    },
  ];

  const sectionStyle = {
    padding: `${LAYOUT.paddingY} ${LAYOUT.paddingX}`,
    background: COLORS.bgSecondary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const toggleContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '6px',
    borderRadius: '50px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    marginBottom: '60px',
  };

  const toggleButtonStyle = (isActive) => ({
    padding: '10px 24px',
    borderRadius: '50px',
    fontSize: '14px',
    fontWeight: 700,
    background: isActive ? COLORS.gradientPrimary : 'transparent',
    color: isActive ? '#fff' : COLORS.textSecondary,
    transition: 'all 0.3s ease',
  });

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
    width: '100%',
    maxWidth: LAYOUT.maxWidth,
  };

  const cardStyle = (featured, color) => ({
    padding: '48px 32px',
    background: featured ? 'linear-gradient(180deg, rgba(99, 102, 241, 0.08) 0%, rgba(7, 11, 20, 0) 100%)' : COLORS.bgCard,
    border: `1px solid ${featured ? 'rgba(99, 102, 241, 0.4)' : COLORS.borderCard}`,
    borderRadius: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    position: 'relative',
    transform: featured ? 'scale(1.05)' : 'none',
    boxShadow: featured ? '0 0 60px rgba(99, 102, 241, 0.15)' : 'none',
    zIndex: featured ? 2 : 1,
  });

  const priceStyle = {
    display: 'flex',
    alignItems: 'baseline',
    gap: '4px',
    fontSize: '48px',
    fontWeight: 900,
  };

  const ctaButtonStyle = (featured, color) => ({
    padding: '16px',
    borderRadius: '16px',
    background: featured ? COLORS.gradientPrimary : 'rgba(255, 255, 255, 0.05)',
    border: featured ? 'none' : `1px solid ${color}30`,
    color: '#fff',
    fontWeight: 700,
    fontSize: '16px',
    boxShadow: featured ? COLORS.buttonShadow : 'none',
    transition: 'transform 0.2s ease',
  });

  const handleSubscribe = (plan) => {
     const phoneNumber = "5544988601067"; // Substitua pelo seu número real
     const message = encodeURIComponent(`Olá! Gostaria de assinar o plano ${plan.name} (${isAnnual ? 'Anual' : 'Mensal'}) da SeeK.`);
     window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
   };

  return (
    <section id="precos" style={sectionStyle}>
      <span style={{ ...TYPOGRAPHY.label, color: COLORS.indigo, marginBottom: '16px' }}>Planos e Preços</span>
      <h2 style={{ ...TYPOGRAPHY.sectionHeadline, textAlign: 'center', marginBottom: '40px' }}>Escolha o futuro do seu negócio.</h2>

      <div style={toggleContainerStyle}>
        <button onClick={() => setIsAnnual(false)} style={toggleButtonStyle(!isAnnual)}>Mensal</button>
        <button onClick={() => setIsAnnual(true)} style={toggleButtonStyle(isAnnual)}>Anual (20% OFF)</button>
      </div>

      <div className="pricing-grid" style={gridStyle}>
        {plans.map((plan, i) => (
          <div 
            key={i} 
            className={`pricing-card ${plan.featured ? 'featured' : ''}`}
            style={cardStyle(plan.featured, plan.color)}
          >
            {plan.featured && (
              <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: COLORS.gradientPrimary, padding: '6px 16px', borderRadius: '50px', fontSize: '12px', fontWeight: 800, color: '#fff', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Star size={14} fill="currentColor" /> MAIS ESCOLHIDO
              </div>
            )}

            <div>
              <h3 style={{ ...TYPOGRAPHY.subHeadline, color: plan.color, marginBottom: '12px' }}>{plan.name}</h3>
              <div style={priceStyle}>
                <span style={{ fontSize: '24px', fontWeight: 700 }}>{plan.price !== 'Sob consulta' ? 'R$' : ''}</span>
                {plan.price}
                <span style={{ fontSize: '16px', color: COLORS.textTertiary, fontWeight: 500 }}>{plan.price !== 'Sob consulta' ? (isAnnual ? '/mês' : '/mês') : ''}</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {plan.features.map((f, j) => (
                <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: COLORS.textSecondary }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: `${plan.color}20`, display: 'flex', alignItems: 'center', justifySelf: 'center', color: plan.color }}>
                    <Check size={14} strokeWidth={3} style={{ margin: 'auto' }} />
                  </div>
                  {f}
                </div>
              ))}
            </div>

            <button 
              onClick={() => handleSubscribe(plan)}
              style={ctaButtonStyle(plan.featured, plan.color)} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} 
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {plan.price === 'Sob consulta' ? 'Falar com Consultor' : 'Começar Agora'}
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '60px', display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <span style={{ fontSize: '14px', color: COLORS.textTertiary }}>✓ 7 dias grátis</span>
        <span style={{ fontSize: '14px', color: COLORS.textTertiary }}>✓ Setup feito pela equipe SeeK</span>
        <span style={{ fontSize: '14px', color: COLORS.textTertiary }}>✓ Cancele quando quiser</span>
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
