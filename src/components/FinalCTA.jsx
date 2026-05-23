import React, { useState } from 'react';
import { MessageCircle, CheckCircle, Shield, Clock } from 'lucide-react';
import { COLORS, TYPOGRAPHY, LAYOUT } from '../constants';

const FinalCTA = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        fetch("https://formsubmit.co/ajax/kauan.dev.full@gmail.com", {
          method: "POST",
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            mensagem: "Novo lead interessado (CTA Final Global)",
            origem: "Rodapé - SeeK Global"
          })
        });
      } catch (error) {
        console.error("Erro ao enviar:", error);
      }

      const phoneNumber = "5544988601067";
      const message = encodeURIComponent(`Olá! Quero escalar minha empresa com a SeeK. Meu e-mail é: ${email}`);
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      setSubmitted(true);
    }
  };

  const sectionStyle = {
    padding: `${LAYOUT.paddingY} ${LAYOUT.paddingX}`,
    background: COLORS.bgPrimary,
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const glowStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '1000px',
    height: '1000px',
    background: `radial-gradient(circle, ${COLORS.brandPrimary}10, transparent 70%)`,
    pointerEvents: 'none',
  };

  const badgeStyle = (color) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    borderRadius: '50px',
    background: `${color}15`,
    border: `1px solid ${color}30`,
    color: color,
    fontSize: '14px',
    fontWeight: 800,
    marginBottom: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  });

  const inputContainerStyle = {
    display: 'flex',
    gap: '12px',
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '8px',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    maxWidth: '600px',
    width: '100%',
    marginTop: '48px',
    flexWrap: 'wrap'
  };

  const inputStyle = {
    flex: 1,
    background: 'transparent',
    border: 'none',
    color: '#fff',
    padding: '12px 24px',
    fontSize: '16px',
    minWidth: '250px',
    outline: 'none'
  };

  const submitButtonStyle = {
    background: COLORS.brandPrimary,
    color: '#fff',
    padding: '16px 32px',
    borderRadius: '12px',
    fontWeight: 800,
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: COLORS.buttonShadow,
    transition: 'all 0.3s ease'
  };

  return (
    <section id="contato" style={sectionStyle}>
      <div style={glowStyle} />
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={badgeStyle(COLORS.brandPrimary)}>Ready for Scale</div>
        <h2 style={{ ...TYPOGRAPHY.sectionHeadline, marginBottom: '24px' }}>
          Sua empresa pronta para o <br/> <span style={TYPOGRAPHY.textGradient}>[próximo nível.]</span>
        </h2>
        <p style={{ ...TYPOGRAPHY.body, color: COLORS.textSecondary, maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
          Junte-se às empresas que já estão automatizando processos e escalando resultados com tecnologia de ponta.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} style={inputContainerStyle}>
            <input 
              type="email" 
              placeholder="E-mail corporativo" 
              required 
              style={inputStyle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              type="submit" 
              style={submitButtonStyle}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Começar Agora
            </button>
          </form>
        ) : (
          <div style={{ ...badgeStyle(COLORS.success), marginTop: '48px', padding: '16px 24px', fontSize: '18px' }}>
            <CheckCircle size={24} /> Pronto! Nossa equipe entrará em contato.
          </div>
        )}

        <div style={{ marginTop: '48px', display: 'flex', gap: '40px', justifyContent: 'center', opacity: 0.6, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600 }}>
            <Shield size={18} color={COLORS.brandPrimary} /> Segurança Enterprise
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600 }}>
            <Clock size={18} color={COLORS.brandPrimary} /> Setup em Recorde
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600 }}>
            <CheckCircle size={18} color={COLORS.brandPrimary} /> 100% Personalizado
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
