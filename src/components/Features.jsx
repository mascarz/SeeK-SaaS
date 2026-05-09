import React from 'react';
import { Bot, ShoppingBag, CalendarCheck, BarChart3, Palette, Headphones } from 'lucide-react';
import { COLORS, TYPOGRAPHY, LAYOUT } from '../constants';

const Features = () => {
  const features = [
    { icon: Bot, color: '#6366F1', label: 'IA Incluída', title: 'IA que Vende e Agenda 24h', desc: 'Atendimento humanizado com taxa de conversão de 78%.' },
    { icon: ShoppingBag, color: '#3B82F6', label: 'Food Tech', title: 'Cardápio Digital de Verdade', desc: 'Experiência de compra fluida em apenas 3 cliques.' },
    { icon: CalendarCheck, color: '#10B981', label: 'Agendamentos', title: 'Agenda Inteligente 24h', desc: 'Sincronização em tempo real e lembretes automáticos.' },
    { icon: BarChart3, color: '#F59E0B', label: 'Analytics', title: 'Dados que Aumentam Lucro', desc: 'Relatórios detalhados sobre suas vendas e clientes.' },
    { icon: Palette, color: '#EC4899', label: 'Branding', title: 'Personalizado com sua Marca', desc: 'Design exclusivo que reflete a identidade do seu negócio.' },
    { icon: Headphones, color: '#06B6D4', label: 'SaaS Assistido', title: 'Suporte Real de Pessoas Reais', desc: 'Nossa equipe faz as alterações e ajustes para você.' },
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px',
    width: '100%',
    maxWidth: LAYOUT.maxWidth,
    marginTop: '60px',
  };

  const cardStyle = (color) => ({
    padding: '40px',
    background: COLORS.bgCard,
    border: `1px solid ${COLORS.borderCard}`,
    borderRadius: '32px',
    textAlign: 'left',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    position: 'relative',
    overflow: 'hidden',
  });

  const iconBoxStyle = (color) => ({
    width: '56px',
    height: '56px',
    borderRadius: '16px',
    background: `${color}15`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: color,
    marginBottom: '24px',
  });

  const tagStyle = (color) => ({
    fontSize: '11px',
    fontWeight: 800,
    color: color,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '8px',
    display: 'block',
  });

  return (
    <section id="solucoes" style={sectionStyle}>
      <span style={{ ...TYPOGRAPHY.label, color: COLORS.bluePrimary, marginBottom: '16px' }}>Ecossistema Completo</span>
      <h2 style={{ ...TYPOGRAPHY.sectionHeadline, maxWidth: '800px' }}>
        Tudo que seu negócio precisa para vender mais — <span style={TYPOGRAPHY.textGradient}>[em um só lugar.]</span>
      </h2>

      <div style={gridStyle}>
        {features.map((f, i) => (
          <div 
            key={i} 
            style={cardStyle(f.color)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = f.color;
              e.currentTarget.style.boxShadow = `0 20px 40px ${f.color}15`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = COLORS.borderCard;
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={iconBoxStyle(f.color)}>
              <f.icon size={28} />
            </div>
            <span style={tagStyle(f.color)}>{f.label}</span>
            <h3 style={{ ...TYPOGRAPHY.subHeadline, fontSize: '22px', marginBottom: '12px' }}>{f.title}</h3>
            <p style={{ ...TYPOGRAPHY.body, color: COLORS.textSecondary }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
