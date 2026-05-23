import React from 'react';
import { Star } from 'lucide-react';
import { COLORS, TYPOGRAPHY, LAYOUT } from '../constants';

const Testimonials = () => {
  const testimonials = [
    { name: 'Ricardo Santos', role: 'CEO Tech Logistics', metric: '+67% Efficiency', text: 'A implementação do CRM com IA da SeeK transformou nossa logística. Automatizamos 80% do atendimento e escalamos sem aumentar o headcount.' },
    { name: 'Ana Oliveira', role: 'Diretora Regional Beauty Group', metric: 'Global Scalability', text: 'O sistema multi-tenant permitiu gerenciar todas as nossas unidades globais em um só dashboard. O agendamento automático é impecável.' },
    { name: 'Dr. Marcos Vale', role: 'Founder HealthCare Plus', metric: 'ROI 12x First Month', text: 'A precisão da IA no atendimento aos pacientes elevou nosso padrão de serviço. É uma tecnologia indispensável para escala corporativa.' },
    { name: 'Juliana Paes', role: 'Head of Growth Retail Global', metric: 'Setup 2 Weeks', text: 'Impressionada com a velocidade e qualidade da entrega. Em duas semanas tínhamos um ecossistema completo integrado ao nosso CRM.' },
    { name: 'Felipe Costa', role: 'Operations Manager FoodChain', metric: 'High-Performance UX', text: 'Nossos canais digitais agora operam em alta performance. A experiência do usuário é fluida e focada em conversão.' },
    { name: 'Beatriz Lima', role: 'Business Owner Global Wellness', metric: '+45% Annual Revenue', text: 'A automação da SeeK nos permitiu focar na estratégia enquanto a IA cuida de toda a operação de agendamentos e vendas.' },
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

  const cardStyle = {
    padding: '40px',
    background: COLORS.bgCard,
    border: `1px solid ${COLORS.borderCard}`,
    borderRadius: '24px',
    textAlign: 'left',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  };

  const metricBadgeStyle = {
    padding: '6px 12px',
    borderRadius: '8px',
    background: 'rgba(255, 107, 0, 0.1)',
    border: `1px solid ${COLORS.brandPrimary}30`,
    color: COLORS.brandPrimary,
    fontSize: '13px',
    fontWeight: 800,
    width: 'fit-content',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  };

  return (
    <section id="resultados" style={sectionStyle}>
      <span style={{ ...TYPOGRAPHY.label, color: COLORS.brandPrimary, marginBottom: '16px' }}>Impacto Comprovado</span>
      <h2 style={{ ...TYPOGRAPHY.sectionHeadline, maxWidth: '900px' }}>
        Empresas que escalaram com o <br/> <span style={TYPOGRAPHY.textGradient}>[padrão SeeK.]</span>
      </h2>

      <div style={gridStyle}>
        {testimonials.map((t, i) => (
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
            <div style={{ color: COLORS.brandPrimary, display: 'flex', gap: '4px' }}>
              {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill="currentColor" />)}
            </div>
            
            <p style={{ ...TYPOGRAPHY.body, color: COLORS.textSecondary, fontSize: '15px', fontStyle: 'italic', flex: 1, lineHeight: 1.6 }}>
              "{t.text}"
            </p>

            <div style={metricBadgeStyle}>{t.metric}</div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '24px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', border: `1px solid ${COLORS.brandPrimary}40`, background: `url(https://i.pravatar.cc/100?img=${i+20}) center/cover` }} />
              <div>
                <div style={{ fontWeight: 800, fontSize: '15px', color: '#fff' }}>{t.name}</div>
                <div style={{ fontSize: '12px', color: COLORS.textTertiary, textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '2px' }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
