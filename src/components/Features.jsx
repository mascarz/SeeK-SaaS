import React from 'react';
import { Bot, ShoppingBag, CalendarCheck, BarChart3, Palette, Headphones } from 'lucide-react';
import { COLORS, TYPOGRAPHY, LAYOUT } from '../constants';

const Features = () => {
  const features = [
    { icon: Bot, color: COLORS.brandPrimary, label: 'Inteligência Artificial', title: 'IA Generativa & CRM', desc: 'Atendimento humanizado integrado ao seu funil de vendas para conversão máxima.' },
    { icon: CalendarCheck, color: '#FFFFFF', label: 'Automação', title: 'Agendamentos WhatsApp', desc: 'Sistemas inteligentes que agendam e confirmam compromissos sem intervenção humana.' },
    { icon: ShoppingBag, color: COLORS.brandPrimary, label: 'E-commerce Next-Gen', title: 'Cardápio Digital Inteligente', desc: 'Experiência de compra otimizada com sugestões de IA baseadas no perfil do cliente.' },
    { icon: BarChart3, color: '#FFFFFF', label: 'Escalabilidade', title: 'Infraestrutura Global', desc: 'Arquitetura multi-tenant pronta para suportar milhões de requisições simultâneas.' },
    { icon: Palette, color: COLORS.brandPrimary, label: 'Brand Experience', title: 'Design de Nível Mundial', desc: 'Interfaces personalizadas que elevam sua marca ao padrão das maiores techs globais.' },
    { icon: Headphones, color: '#FFFFFF', label: 'Suporte 24/7', title: 'Monitoramento Contínuo', desc: 'Infraestrutura monitorada 24 horas por dia, 7 dias por semana, com suporte dedicado.' },
  ];

  const sectionStyle = {
    padding: `${LAYOUT.paddingY} ${LAYOUT.paddingX}`,
    background: COLORS.bgSecondary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px',
    width: '100%',
    maxWidth: LAYOUT.maxWidth,
    marginTop: '60px',
  };

  const cardStyle = (color) => ({
    padding: '48px 40px',
    background: COLORS.bgCard,
    border: `1px solid ${COLORS.borderCard}`,
    borderRadius: '24px',
    textAlign: 'left',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    position: 'relative',
    overflow: 'hidden',
  });

  const iconBoxStyle = (color) => ({
    width: '64px',
    height: '64px',
    borderRadius: '16px',
    background: color === '#FFFFFF' ? 'rgba(255,255,255,0.05)' : `${color}15`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: color,
    marginBottom: '32px',
    border: `1px solid ${color}20`
  });

  const tagStyle = (color) => ({
    fontSize: '12px',
    fontWeight: 800,
    color: color,
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    marginBottom: '12px',
    display: 'block',
  });

  return (
    <section id="solucoes" style={sectionStyle}>
      <span style={{ ...TYPOGRAPHY.label, color: COLORS.brandPrimary, marginBottom: '16px' }}>Tecnologia de Ponta</span>
      <h2 style={{ ...TYPOGRAPHY.sectionHeadline, maxWidth: '900px' }}>
        Soluções completas para dominar o <br/> <span style={TYPOGRAPHY.textGradient}>[mercado digital.]</span>
      </h2>

      <div style={gridStyle}>
        {features.map((f, i) => (
          <div 
            key={i} 
            style={cardStyle(f.color)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.borderColor = f.color === '#FFFFFF' ? 'rgba(255,255,255,0.3)' : f.color;
              e.currentTarget.style.boxShadow = `0 20px 40px ${f.color === '#FFFFFF' ? 'rgba(255,255,255,0.05)' : f.color + '10'}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = COLORS.borderCard;
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={iconBoxStyle(f.color)}>
              <f.icon size={32} />
            </div>
            <span style={tagStyle(f.color)}>{f.label}</span>
            <h3 style={{ ...TYPOGRAPHY.subHeadline, fontSize: '24px', marginBottom: '16px', color: '#FFF' }}>{f.title}</h3>
            <p style={{ ...TYPOGRAPHY.body, color: COLORS.textSecondary, fontSize: '15px' }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
