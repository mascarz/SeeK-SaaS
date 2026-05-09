import React from 'react';
import { COLORS, TYPOGRAPHY, LAYOUT } from '../constants';
import { CheckCircle2, Zap } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    { title: 'Você fala com nossa equipe', tag: '30 min', desc: 'Entendemos seu negócio e suas necessidades específicas em uma conversa rápida.' },
    { title: 'Configuramos tudo por você', tag: '24h', desc: 'Nossos especialistas criam seu cardápio, agenda e treinam sua IA personalizada.' },
    { title: 'Você recebe seu link pronto', tag: 'Pronto!', desc: 'Sua plataforma vai ao ar com sua marca, cores e produtos, tudo validado.' },
    { title: 'A IA vende enquanto você descansa', tag: '24/7', desc: 'Atendimento automatizado que escala seu negócio sem aumentar sua carga de trabalho.' },
  ];

  const sectionStyle = {
    padding: `${LAYOUT.paddingY} ${LAYOUT.paddingX}`,
    background: COLORS.bgSecondary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '80px',
    width: '100%',
    maxWidth: LAYOUT.maxWidth,
    marginTop: '60px',
    alignItems: 'center',
  };

  const stepItemStyle = {
    display: 'flex',
    gap: '24px',
    position: 'relative',
    paddingBottom: '40px',
  };

  const lineStyle = {
    position: 'absolute',
    left: '20px',
    top: '40px',
    bottom: 0,
    width: '2px',
    background: 'rgba(99, 102, 241, 0.15)',
  };

  const circleStyle = (isActive) => ({
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    background: isActive ? COLORS.gradientPrimary : 'rgba(99, 102, 241, 0.12)',
    border: isActive ? 'none' : `2px solid rgba(99, 102, 241, 0.3)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: isActive ? '#fff' : COLORS.indigo,
    fontWeight: 700,
    zIndex: 1,
    boxShadow: isActive ? '0 0 20px rgba(99, 102, 241, 0.4)' : 'none',
  });

  const tagStyle = {
    padding: '4px 10px',
    borderRadius: '6px',
    fontSize: '11px',
    fontWeight: 800,
    background: 'rgba(59, 130, 246, 0.1)',
    color: COLORS.bluePrimary,
    textTransform: 'uppercase',
  };

  const analyticsPanelStyle = {
    background: COLORS.bgPrimary,
    padding: '40px',
    borderRadius: '32px',
    border: '1px solid rgba(59, 130, 246, 0.15)',
    boxShadow: '0 40px 80px rgba(0,0,0,0.3)',
  };

  const ctaButtonStyle = {
    background: COLORS.gradientPrimary,
    color: '#fff',
    padding: '16px 32px',
    borderRadius: '50px',
    fontWeight: 700,
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    boxShadow: COLORS.buttonShadow,
    transition: 'transform 0.2s ease',
    marginTop: '40px',
    width: 'fit-content',
  };

  return (
    <section id="como-funciona" style={sectionStyle}>
      <span style={{ ...TYPOGRAPHY.label, color: COLORS.indigo, marginBottom: '16px' }}>Assistido, Não Abandonado</span>
      <h2 style={{ ...TYPOGRAPHY.sectionHeadline, textAlign: 'center', maxWidth: '800px' }}>
        Nossa equipe faz o trabalho pesado. <span style={TYPOGRAPHY.textGradient}>[Você só aprova.]</span>
      </h2>

      <div className="how-it-works-grid" style={containerStyle}>
        <div className="steps-column">
          {steps.map((step, i) => (
            <div key={i} style={{ ...stepItemStyle, paddingBottom: i === steps.length - 1 ? 0 : '40px' }}>
              {i !== steps.length - 1 && <div style={lineStyle} />}
              <div style={circleStyle(i === 0)}>0{i + 1}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <h3 style={{ ...TYPOGRAPHY.subHeadline, fontSize: '20px' }}>{step.title}</h3>
                  <span style={tagStyle}>{step.tag}</span>
                </div>
                <p style={{ ...TYPOGRAPHY.body, color: COLORS.textSecondary }}>{step.desc}</p>
              </div>
            </div>
          ))}
          <button style={ctaButtonStyle} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            Quero o SeeK no meu negócio →
          </button>
        </div>

        <div className="analytics-column">
          <div style={analyticsPanelStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
              <div>
                <div style={{ fontSize: '14px', color: COLORS.textSecondary, marginBottom: '4px' }}>Receita Total (Mês)</div>
                <div style={{ fontSize: '32px', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '12px' }}>
                  R$ 8.492 <span style={{ fontSize: '16px', color: COLORS.success, background: 'rgba(16, 185, 129, 0.1)', padding: '4px 8px', borderRadius: '6px' }}>▲ +41%</span>
                </div>
              </div>
              <div style={{ padding: '10px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px' }}>
                <Zap size={24} color={COLORS.indigo} />
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '120px', marginBottom: '32px' }}>
              {[0.4, 0.6, 0.3, 0.8, 0.5, 0.7, 0.4, 0.9, 0.6, 0.8, 0.5, 1.0].map((h, i) => (
                <div key={i} style={{ 
                  flex: 1, 
                  height: `${h * 100}%`, 
                  background: i === 11 ? COLORS.gradientPrimary : 'rgba(99, 102, 241, 0.2)',
                  borderRadius: '4px 4px 0 0'
                }} />
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { label: 'Pedidos Hoje', value: '47' },
                { label: 'Ticket Médio', value: 'R$ 68,50' },
                { label: 'Taxa Conv. IA', value: '78%', color: COLORS.success },
                { label: 'Clientes Ativos', value: '1.240' },
              ].map((kpi, i) => (
                <div key={i} style={{ padding: '16px', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <div style={{ fontSize: '12px', color: COLORS.textSecondary, marginBottom: '4px' }}>{kpi.label}</div>
                  <div style={{ fontWeight: 800, fontSize: '18px', color: kpi.color || '#fff' }}>{kpi.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .how-it-works-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
          .analytics-column { order: -1; }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
