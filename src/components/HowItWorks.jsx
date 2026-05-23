import React from 'react';
import { COLORS, TYPOGRAPHY, LAYOUT } from '../constants';
import { CheckCircle2, Zap, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    { title: 'Diagnóstico & Estratégia', tag: 'Discovery', desc: 'Mapeamos os gargalos da sua operação e definimos o fluxo ideal de automação.' },
    { title: 'Desenvolvimento & IA', tag: 'Building', desc: 'Nossa equipe configura sua infraestrutura, CRM e treina sua IA com os dados da empresa.' },
    { title: 'Deploy & Integração', tag: 'Live', desc: 'Lançamento do sistema com integração total aos seus canais de atendimento e pagamentos.' },
    { title: 'Escala Monitorada', tag: '24/7', desc: 'Monitoramento contínuo e ajustes baseados em dados para garantir crescimento sem limites.' },
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
    background: `${COLORS.brandPrimary}20`,
  };

  const circleStyle = (isActive) => ({
    width: '42px',
    height: '42px',
    borderRadius: '12px',
    background: isActive ? COLORS.brandPrimary : 'rgba(255, 255, 255, 0.05)',
    border: `1px solid ${isActive ? COLORS.brandPrimary : 'rgba(255, 255, 255, 0.1)'}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: isActive ? '#000' : COLORS.brandPrimary,
    fontWeight: 800,
    zIndex: 1,
    boxShadow: isActive ? COLORS.buttonShadow : 'none',
  });

  const tagStyle = {
    padding: '4px 10px',
    borderRadius: '6px',
    fontSize: '11px',
    fontWeight: 800,
    background: 'rgba(255, 107, 0, 0.1)',
    color: COLORS.brandPrimary,
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  };

  const ctaButtonStyle = {
    background: 'transparent',
    color: COLORS.brandPrimary,
    padding: '16px 32px',
    borderRadius: '12px',
    fontWeight: 800,
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    border: `2px solid ${COLORS.brandPrimary}`,
    transition: 'all 0.3s ease',
    marginTop: '40px',
    width: 'fit-content',
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "5544988601067";
    const message = encodeURIComponent("Olá! Gostaria de entender mais sobre o fluxo de implementação global da SeeK.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="como-funciona" style={sectionStyle}>
      <span style={{ ...TYPOGRAPHY.label, color: COLORS.brandPrimary, marginBottom: '16px' }}>Metodologia Ágil</span>
      <h2 style={{ ...TYPOGRAPHY.sectionHeadline, textAlign: 'center', maxWidth: '800px' }}>
        Do conceito à escala global em <br/> <span style={TYPOGRAPHY.textGradient}>[recorde de tempo.]</span>
      </h2>

      <div className="how-it-works-grid" style={containerStyle}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {steps.map((step, i) => (
            <div key={i} style={stepItemStyle}>
              {i !== steps.length - 1 && <div style={lineStyle} />}
              <div style={circleStyle(true)}>
                {i + 1}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <h3 style={{ ...TYPOGRAPHY.subHeadline, color: '#fff', fontSize: '20px' }}>{step.title}</h3>
                  <span style={tagStyle}>{step.tag}</span>
                </div>
                <p style={{ ...TYPOGRAPHY.body, color: COLORS.textSecondary, fontSize: '15px', lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
          <button 
            onClick={handleWhatsAppClick}
            style={ctaButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 107, 0, 0.05)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Falar com Especialista <ArrowRight size={20} />
          </button>
        </div>

        <div style={{ 
          background: 'rgba(255, 255, 255, 0.02)', 
          padding: '48px', 
          borderRadius: '32px', 
          border: '1px solid rgba(255, 255, 255, 0.05)',
          position: 'relative'
        }}>
          <div style={{ position: 'absolute', top: '24px', right: '24px' }}>
            <Zap size={24} color={COLORS.brandPrimary} />
          </div>
          <h3 style={{ ...TYPOGRAPHY.subHeadline, color: '#fff', marginBottom: '24px', fontSize: '24px' }}>Timeline de Entrega</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255,107,0,0.05)', border: `1px solid ${COLORS.brandPrimary}30` }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: COLORS.brandPrimary, marginBottom: '4px' }}>SEMANA 1-2</div>
              <div style={{ fontWeight: 700, color: '#fff' }}>MVP & Fluxos Core</div>
            </div>
            <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: COLORS.textTertiary, marginBottom: '4px' }}>SEMANA 3-4</div>
              <div style={{ fontWeight: 700, color: '#fff' }}>Integrações & IA Training</div>
            </div>
            <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: COLORS.textTertiary, marginBottom: '4px' }}>SEMANA 5-6</div>
              <div style={{ fontWeight: 700, color: '#fff' }}>Escala & Global Launch</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .how-it-works-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
