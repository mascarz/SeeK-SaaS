import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { COLORS, TYPOGRAPHY, LAYOUT } from '../constants';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { q: 'Como funciona o prazo de 2 a 6 semanas?', a: 'O prazo varia conforme a complexidade: 2 a 4 semanas para MVPs funcionais e 4 a 6 semanas para ecossistemas completos com arquitetura multi-tenant e integrações globais.' },
    { q: 'A IA é realmente personalizada?', a: 'Sim. Treinamos modelos de IA generativa com o conhecimento específico da sua empresa, tom de voz e regras de negócio para garantir um atendimento humanizado e de alta conversão.' },
    { q: 'O sistema suporta pagamentos internacionais?', a: 'Sim. Implementamos gateways de pagamento globais com suporte a múltiplas moedas e métodos de pagamento locais, integrados diretamente ao fluxo de checkout.' },
    { q: 'Como é feito o monitoramento 24/7?', a: 'Utilizamos infraestrutura em nuvem escalável com monitoramento de performance em tempo real, garantindo 99.9% de uptime e resposta imediata a qualquer instabilidade.' },
    { q: 'Posso integrar com meu CRM atual?', a: 'Sim. Nossa arquitetura é via API-First, permitindo integração fluida com Salesforce, HubSpot, RD Station e outros CRMs líderes de mercado.' },
  ];

  const sectionStyle = {
    padding: `${LAYOUT.paddingY} ${LAYOUT.paddingX}`,
    background: COLORS.bgPrimary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const containerStyle = {
    width: '100%',
    maxWidth: '800px',
    marginTop: '60px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  };

  const faqItemStyle = (isActive) => ({
    background: isActive ? 'rgba(255, 107, 0, 0.04)' : 'rgba(255, 255, 255, 0.02)',
    border: `1px solid ${isActive ? COLORS.brandPrimary : 'rgba(255, 255, 255, 0.08)'}`,
    borderRadius: '16px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
  });

  const questionStyle = {
    padding: '24px 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    fontWeight: 700,
    fontSize: '18px',
    color: '#fff'
  };

  const answerStyle = (isActive) => ({
    padding: isActive ? '0 32px 24px' : '0 32px 0',
    maxHeight: isActive ? '500px' : '0',
    opacity: isActive ? 1 : 0,
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    color: COLORS.textSecondary,
    lineHeight: 1.6,
    fontSize: '15px'
  });

  return (
    <section id="faq" style={sectionStyle}>
      <span style={{ ...TYPOGRAPHY.label, color: COLORS.brandPrimary, marginBottom: '16px' }}>Esclarecimentos</span>
      <h2 style={{ ...TYPOGRAPHY.sectionHeadline, textAlign: 'center' }}>Perguntas Frequentes</h2>

      <div style={containerStyle}>
        {faqs.map((faq, i) => (
          <div key={i} style={faqItemStyle(activeIndex === i)}>
            <div style={questionStyle} onClick={() => setActiveIndex(activeIndex === i ? null : i)}>
              {faq.q}
              <ChevronDown 
                size={20} 
                style={{ 
                  transition: 'transform 0.4s ease', 
                  transform: activeIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  color: activeIndex === i ? COLORS.brandPrimary : COLORS.textTertiary
                }} 
              />
            </div>
            <div style={answerStyle(activeIndex === i)}>
              {faq.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
