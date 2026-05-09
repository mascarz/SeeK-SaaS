import React from 'react';
import { Star } from 'lucide-react';
import { COLORS, TYPOGRAPHY, LAYOUT } from '../constants';

const Testimonials = () => {
  const testimonials = [
    { name: 'Ricardo Santos', role: 'Dono de Hamburgueria', metric: '+67% de pedidos', text: 'O SeeK mudou o jogo. Antes eu perdia metade das mensagens no Zap, hoje a IA resolve tudo e eu só foco na cozinha.' },
    { name: 'Ana Oliveira', role: 'Proprietária de Salão', metric: 'Zero faltas na agenda', text: 'Os lembretes automáticos e o agendamento sem eu precisar responder nada economizaram 4h do meu dia.' },
    { name: 'Dr. Marcos Vale', role: 'Diretor de Clínica', metric: 'R$12k/mês a mais', text: 'A facilidade do paciente agendar sozinho aumentou nossa conversão drasticamente. Recuperamos o investimento no primeiro mês.' },
    { name: 'Juliana Paes', role: 'Gerente de E-commerce', metric: 'Setup em 18h', text: 'Impressionada com a velocidade. Em menos de um dia já estava tudo no ar, configurado pela equipe do SeeK.' },
    { name: 'Felipe Costa', role: 'Dono de Pizzaria', metric: '3x mais conversões', text: 'O cardápio é muito intuitivo. Meus clientes adoraram a experiência e estão pedindo com muito mais frequência.' },
    { name: 'Beatriz Lima', role: 'Esteticista', metric: '+45% receita mensal', text: 'A IA atende tão bem que os clientes acham que sou eu. Vende pacotes e faz upsell de forma brilhante.' },
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
    borderRadius: '32px',
    textAlign: 'left',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };

  const metricBadgeStyle = {
    padding: '6px 12px',
    borderRadius: '8px',
    background: 'rgba(59, 130, 246, 0.1)',
    border: '1px solid rgba(59, 130, 246, 0.2)',
    color: COLORS.bluePrimary,
    fontSize: '13px',
    fontWeight: 700,
    width: 'fit-content',
  };

  return (
    <section id="resultados" style={sectionStyle}>
      <span style={{ ...TYPOGRAPHY.label, color: COLORS.indigo, marginBottom: '16px' }}>Resultados Reais</span>
      <h2 style={{ ...TYPOGRAPHY.sectionHeadline, maxWidth: '800px' }}>
        +800 negócios que pararam de improvisar.
      </h2>

      <div style={gridStyle}>
        {testimonials.map((t, i) => (
          <div 
            key={i} 
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = COLORS.borderCard;
            }}
          >
            <div style={{ color: COLORS.stars, display: 'flex', gap: '4px' }}>
              {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill="currentColor" />)}
            </div>
            
            <p style={{ ...TYPOGRAPHY.body, color: 'rgba(255, 255, 255, 0.75)', fontSize: '16px', fontStyle: 'italic', flex: 1 }}>
              "{t.text}"
            </p>

            <div style={metricBadgeStyle}>{t.metric}</div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: `2px solid rgba(99, 102, 241, 0.3)`, background: `url(https://i.pravatar.cc/100?img=${i+20}) center/cover` }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: '15px' }}>{t.name}</div>
                <div style={{ fontSize: '13px', color: COLORS.textTertiary }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
