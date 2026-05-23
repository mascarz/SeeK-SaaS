import React from 'react';
import { MessageSquareX, Clock, TrendingDown, Frown, ArrowRight } from 'lucide-react';
import { COLORS, TYPOGRAPHY, LAYOUT } from '../constants';

const Pain = () => {
  const cards = [
    { icon: MessageSquareX, title: 'Atendimento Lento', desc: 'Sua equipe não consegue responder a todos em tempo real, perdendo leads qualificados.' },
    { icon: Clock, title: 'Processos Manuais', desc: 'Gestão via planilhas e anotações que impedem a escala do seu negócio corporativo.' },
    { icon: TrendingDown, title: 'Inconsistência de Dados', desc: 'Decisões baseadas em "feeling" em vez de analytics e CRM integrados.' },
    { icon: Frown, title: 'Falta de Integração', desc: 'Sistemas que não conversam entre si, gerando retrabalho e custos desnecessários.' },
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
    padding: '48px 40px',
    background: COLORS.bgCard,
    border: `1px solid ${COLORS.borderCard}`,
    borderRadius: '24px',
    textAlign: 'left',
    transition: 'all 0.3s ease',
    cursor: 'default',
  };

  const iconCircleStyle = {
    width: '64px',
    height: '64px',
    borderRadius: '16px',
    background: 'rgba(255, 107, 0, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '32px',
    color: COLORS.brandPrimary,
    border: `1px solid ${COLORS.brandPrimary}20`
  };

  return (
    <section id="dor" style={sectionStyle}>
      <span style={{ ...TYPOGRAPHY.label, color: COLORS.brandPrimary, marginBottom: '16px' }}>Os Desafios da Escala</span>
      <h2 style={{ ...TYPOGRAPHY.sectionHeadline, maxWidth: '800px' }}>
        Sua operação está pronta para <br/> <span style={{ color: COLORS.brandPrimary }}>[crescer sem limites?]</span>
      </h2>

      <div style={gridStyle}>
        {cards.map((card, i) => (
          <div 
            key={i} 
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = COLORS.brandPrimary;
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
            <h3 style={{ ...TYPOGRAPHY.subHeadline, fontSize: '22px', marginBottom: '16px', color: '#FFF' }}>{card.title}</h3>
            <p style={{ ...TYPOGRAPHY.body, color: COLORS.textSecondary, fontSize: '15px' }}>{card.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ 
        marginTop: '80px', 
        padding: '48px', 
        borderRadius: '32px', 
        background: 'rgba(255, 107, 0, 0.03)',
        border: `1px solid ${COLORS.brandPrimary}20`,
        maxWidth: '900px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px'
      }}>
        <h3 style={{ ...TYPOGRAPHY.subHeadline, fontSize: '26px', color: '#FFF' }}>Cansado de sistemas que limitam seu potencial?</h3>
        <a href="#solucoes" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: COLORS.brandPrimary, fontWeight: 800, fontSize: '18px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Conheça o Ecossistema Global <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
};

export default Pain;
