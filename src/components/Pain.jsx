import React from 'react';
import { MessageSquareX, Clock, TrendingDown, Frown, ArrowRight } from 'lucide-react';
import { COLORS, TYPOGRAPHY, LAYOUT } from '../constants';

const Pain = () => {
  const cards = [
    { icon: MessageSquareX, title: 'Clientes somem no WhatsApp', desc: 'Demora no atendimento faz você perder vendas todos os dias.' },
    { icon: Clock, title: 'Você anota pedido na mão ainda?', desc: 'Processos manuais limitam seu crescimento e causam erros.' },
    { icon: TrendingDown, title: 'Sem dados, sem controle', desc: 'Você não sabe quanto vendeu ou quem são seus melhores clientes.' },
    { icon: Frown, title: 'Agendamentos que não aparecem', desc: 'Faltas sem aviso prévio destroem sua margem de lucro.' },
  ];

  const sectionStyle = {
    padding: `${LAYOUT.paddingY} ${LAYOUT.paddingX}`,
    background: COLORS.bgPrimary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '24px',
    width: '100%',
    maxWidth: LAYOUT.maxWidth,
    marginTop: '60px',
  };

  const cardStyle = {
    padding: '40px',
    background: COLORS.bgCard,
    border: `1px solid ${COLORS.borderCard}`,
    borderRadius: '24px',
    textAlign: 'left',
    transition: 'all 0.3s ease',
    cursor: 'default',
  };

  const iconCircleStyle = {
    width: '56px',
    height: '56px',
    borderRadius: '16px',
    background: 'rgba(239, 68, 68, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
    color: COLORS.painRed,
  };

  return (
    <section id="dor" style={sectionStyle}>
      <span style={{ ...TYPOGRAPHY.label, color: COLORS.indigo, marginBottom: '16px' }}>A Realidade que Ninguém Fala</span>
      <h2 style={{ ...TYPOGRAPHY.sectionHeadline, maxWidth: '800px' }}>
        Você trabalha 12h por dia e ainda <span style={{ background: 'linear-gradient(135deg, #EF4444, #F97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>não consegue escalar.</span>
      </h2>

      <div style={gridStyle}>
        {cards.map((card, i) => (
          <div 
            key={i} 
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = COLORS.borderCard;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={iconCircleStyle}>
              <card.icon size={28} />
            </div>
            <h3 style={{ ...TYPOGRAPHY.subHeadline, fontSize: '20px', marginBottom: '12px' }}>{card.title}</h3>
            <p style={{ ...TYPOGRAPHY.body, color: COLORS.textSecondary, fontSize: '15px' }}>{card.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ 
        marginTop: '80px', 
        padding: '40px', 
        borderRadius: '32px', 
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(99, 102, 241, 0.05))',
        border: '1px solid rgba(59, 130, 246, 0.1)',
        maxWidth: '800px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px'
      }}>
        <h3 style={{ ...TYPOGRAPHY.subHeadline, fontSize: '24px' }}>Cansado de perder tempo com processos manuais?</h3>
        <a href="#como-funciona" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: COLORS.bluePrimary, fontWeight: 700, fontSize: '18px' }}>
          Ver como o SeeK funciona <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
};

export default Pain;
