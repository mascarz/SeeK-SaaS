import React, { useState } from 'react';
import { Zap, Star, LayoutGrid } from 'lucide-react';
import { COLORS, TYPOGRAPHY, LAYOUT } from '../constants';

const Hero = () => {
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
            mensagem: "Novo lead interessado - Hero Global",
            origem: "Hero Section - SeeK Global"
          })
        });
      } catch (error) {
        console.error("Erro ao enviar:", error);
      }

      const phoneNumber = "5544988601067";
      const message = encodeURIComponent(`Olá! Quero escalar meu negócio com a SeeK. Meu e-mail: ${email}`);
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      setSubmitted(true);
    }
  };

  const sectionStyle = {
    padding: `140px ${LAYOUT.paddingX} 100px`,
    background: COLORS.bgPrimary,
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'center',
  };

  const badgeStyle = {
    padding: '8px 20px',
    borderRadius: '50px',
    background: 'rgba(255, 107, 0, 0.1)',
    border: `1px solid ${COLORS.brandPrimary}40`,
    color: COLORS.brandPrimary,
    fontSize: '13px',
    fontWeight: 800,
    letterSpacing: '0.1em',
    marginBottom: '32px',
    textTransform: 'uppercase'
  };

  return (
    <section style={sectionStyle}>
      {/* Background Decorative Element */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60vw',
        height: '60vw',
        background: `radial-gradient(circle, ${COLORS.brandPrimary}15 0%, transparent 70%)`,
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px' }}>
        <div style={badgeStyle}>Global Technology & Innovation</div>
        
        <h1 style={{ ...TYPOGRAPHY.heroHeadline, marginBottom: '24px' }}>
          Construímos o futuro do seu <br/> 
          <span style={{ color: COLORS.brandPrimary }}>negócio com IA & CRM.</span>
        </h1>
        
        <p style={{ ...TYPOGRAPHY.body, color: COLORS.textSecondary, maxWidth: '700px', margin: '0 auto 48px', fontSize: '1.2rem' }}>
          Sistemas escaláveis, agendamentos automáticos e inteligência artificial de ponta 
          para empresas que não aceitam limites. Do MVP à escala global em tempo recorde.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '12px', maxWidth: '600px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input 
              type="email" 
              placeholder="Seu melhor e-mail corporativo"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: '18px 24px',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#FFF',
                fontSize: '16px',
                minWidth: '300px',
                flex: 1,
                outline: 'none',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = COLORS.brandPrimary}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
            <button 
              type="submit"
              style={{
                padding: '18px 40px',
                borderRadius: '12px',
                background: COLORS.brandPrimary,
                color: '#FFF',
                border: 'none',
                fontWeight: 800,
                fontSize: '16px',
                cursor: 'pointer',
                boxShadow: COLORS.buttonShadow,
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Escalar Agora →
            </button>
          </form>
        ) : (
          <div style={{ color: COLORS.success, fontWeight: 800, fontSize: '18px', marginTop: '40px' }}>
            ✓ Recebemos seu interesse! Entraremos em contato em breve.
          </div>
        )}

        <div style={{ marginTop: '64px', display: 'flex', gap: '40px', justifyContent: 'center', opacity: 0.6, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Zap size={20} color={COLORS.brandPrimary} />
            <span style={{ fontSize: '14px', fontWeight: 600 }}>Alta Performance</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <LayoutGrid size={20} color={COLORS.brandPrimary} />
            <span style={{ fontSize: '14px', fontWeight: 600 }}>Infra Escalável</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Star size={20} color={COLORS.brandPrimary} />
            <span style={{ fontSize: '14px', fontWeight: 600 }}>Design Premium</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
