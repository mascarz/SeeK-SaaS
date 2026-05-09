import React, { useState } from 'react';
import { MessageCircle, CheckCircle, Shield, Clock } from 'lucide-react';
import { COLORS, TYPOGRAPHY, LAYOUT } from '../constants';

const FinalCTA = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  const sectionStyle = {
    padding: `${LAYOUT.paddingY} ${LAYOUT.paddingX}`,
    background: COLORS.bgSecondary,
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
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08), transparent 70%)',
    pointerEvents: 'none',
  };

  const badgeStyle = (color) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    borderRadius: '50px',
    background: `${color}10`,
    border: `1px solid ${color}20`,
    color: color,
    fontSize: '14px',
    fontWeight: 700,
    marginBottom: '12px',
  });

  const inputContainerStyle = {
    display: 'flex',
    gap: '12px',
    background: 'rgba(255, 255, 255, 0.03)',
    padding: '6px',
    borderRadius: '60px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    maxWidth: '500px',
    width: '100%',
    marginTop: '40px',
  };

  const inputStyle = {
    flex: 1,
    background: 'transparent',
    border: 'none',
    color: '#fff',
    padding: '0 24px',
    fontSize: '16px',
  };

  const submitButtonStyle = {
    background: COLORS.gradientPrimary,
    color: '#fff',
    padding: '14px 28px',
    borderRadius: '50px',
    fontWeight: 700,
    fontSize: '16px',
    boxShadow: COLORS.buttonShadow,
    transition: 'transform 0.2s ease',
  };

  const whatsappButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    background: COLORS.whatsapp,
    color: '#fff',
    padding: '18px 40px',
    borderRadius: '50px',
    fontWeight: 800,
    fontSize: '18px',
    marginTop: '24px',
    boxShadow: '0 8px 28px rgba(37, 211, 102, 0.35)',
    transition: 'transform 0.2s ease',
  };

  return (
    <section style={sectionStyle}>
      <div style={glowStyle} />
      
      <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '32px' }}>
          <div style={badgeStyle(COLORS.success)}><Shield size={16} /> 7 dias grátis, sem cartão</div>
          <div style={badgeStyle(COLORS.bluePrimary)}><Clock size={16} /> Setup em até 24h pela nossa equipe</div>
        </div>

        <h2 style={{ ...TYPOGRAPHY.sectionHeadline, maxWidth: '900px', marginBottom: '32px' }}>
          Cada dia sem o SeeK é um cliente <span style={{ background: 'linear-gradient(135deg, #EF4444, #F97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>respondido pelo concorrente.</span>
        </h2>

        {!submitted ? (
          <form onSubmit={handleSubmit} style={inputContainerStyle}>
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              style={inputStyle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" style={submitButtonStyle} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              Criar meu Site Agora →
            </button>
          </form>
        ) : (
          <div style={{ ...badgeStyle(COLORS.success), marginTop: '40px', padding: '16px 24px', fontSize: '18px' }}>
            <CheckCircle size={24} /> Pronto! Nossa equipe entrará em contato.
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', margin: '32px 0', color: COLORS.textTertiary, fontWeight: 700 }}>
          <div style={{ height: '1px', width: '40px', background: 'rgba(255,255,255,0.1)' }} />
          ou
          <div style={{ height: '1px', width: '40px', background: 'rgba(255,255,255,0.1)' }} />
        </div>

        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" style={whatsappButtonStyle} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
          <MessageCircle size={24} fill="currentColor" />
          Falar no WhatsApp Agora
        </a>

        <div style={{ marginTop: '48px', display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {['✓ 7 dias grátis', '✓ Sem cartão', '✓ Setup 24h', '✓ Cancele quando quiser'].map((text, i) => (
            <span key={i} style={{ fontSize: '14px', color: COLORS.textTertiary, fontWeight: 500 }}>{text}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
