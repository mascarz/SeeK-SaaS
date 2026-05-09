import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { COLORS, TYPOGRAPHY, LAYOUT } from '../constants';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { q: 'Preciso saber programar ou mexer em tecnologia?', a: 'Não! O SeeK é um "SaaS Assistido". Nossa equipe faz toda a configuração inicial, personalização do cardápio/agenda e treinamento da IA para você. Você só precisa aprovar o resultado final.' },
    { q: 'Quanto tempo leva para ficar pronto?', a: 'Após o envio das suas informações, nossa equipe entrega sua plataforma completa e pronta para vender em até 24 horas úteis.' },
    { q: 'A IA atende como um humano de verdade?', a: 'Sim! Nossa IA é treinada com os dados específicos do seu negócio, mantendo o tom de voz da sua marca e sendo capaz de tirar dúvidas, fazer sugestões de venda (upsell) e fechar pedidos/agendamentos.' },
    { q: 'Funciona para salão, clínica e lanchonete?', a: 'Com certeza. O SeeK possui módulos específicos para cada nicho, adaptando a jornada do cliente seja para um pedido de delivery ou para um agendamento recorrente.' },
    { q: 'Posso cancelar quando quiser?', a: 'Sim, não temos contrato de fidelidade nos planos mensais. No plano anual, você garante o desconto mas também pode cancelar a renovação a qualquer momento.' },
    { q: 'Como funciona o suporte depois do setup?', a: 'Oferecemos suporte humano 24/7. Além disso, dependendo do seu plano, fazemos ajustes mensais gratuitos para garantir que sua plataforma esteja sempre atualizada.' },
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
    maxWidth: '780px',
    marginTop: '60px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  };

  const faqItemStyle = (isActive) => ({
    background: isActive ? 'rgba(99, 102, 241, 0.04)' : 'rgba(255, 255, 255, 0.02)',
    border: `1px solid ${isActive ? 'rgba(99, 102, 241, 0.35)' : 'rgba(255, 255, 255, 0.05)'}`,
    borderRadius: '20px',
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
  };

  const answerStyle = (isActive) => ({
    padding: isActive ? '0 32px 24px' : '0 32px 0',
    maxHeight: isActive ? '500px' : '0',
    opacity: isActive ? 1 : 0,
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    color: COLORS.textSecondary,
    lineHeight: 1.6,
  });

  return (
    <section id="faq" style={sectionStyle}>
      <span style={{ ...TYPOGRAPHY.label, color: COLORS.indigo, marginBottom: '16px' }}>Dúvidas Comuns</span>
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
                  color: activeIndex === i ? COLORS.indigo : COLORS.textTertiary
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
