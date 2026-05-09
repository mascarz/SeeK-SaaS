import React from 'react';
import { Instagram, MessageCircle, Mail } from 'lucide-react';
import { COLORS, TYPOGRAPHY, LAYOUT } from '../constants';

const Footer = () => {
  const footerStyle = {
    padding: `80px ${LAYOUT.paddingX} 40px`,
    background: '#050810',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '48px',
    maxWidth: LAYOUT.maxWidth,
    margin: '0 auto',
    marginBottom: '80px',
  };

  const logoBoxStyle = {
    width: '40px',
    height: '40px',
    background: COLORS.gradientPrimary,
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    fontWeight: 900,
    color: '#fff',
    marginBottom: '20px',
  };

  const linkStyle = {
    display: 'block',
    color: COLORS.textSecondary,
    fontSize: '15px',
    marginBottom: '12px',
    transition: 'color 0.2s ease',
  };

  const socialIconStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: COLORS.textSecondary,
    transition: 'all 0.3s ease',
  };

  return (
    <footer style={footerStyle}>
      <div style={gridStyle}>
        <div style={{ gridColumn: 'span 1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={logoBoxStyle}>S</div>
            <span style={{ fontWeight: 900, fontSize: '24px' }}>See<span style={TYPOGRAPHY.textGradient}>K</span></span>
          </div>
          <p style={{ ...TYPOGRAPHY.body, color: COLORS.textSecondary, maxWidth: '280px', marginBottom: '24px' }}>
            A plataforma que transforma seu pequeno negócio em uma operação de alta performance com IA.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            {[Instagram, MessageCircle, Mail].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                style={socialIconStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.5)';
                  e.currentTarget.style.color = COLORS.indigo;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.color = COLORS.textSecondary;
                }}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ fontWeight: 700, marginBottom: '24px' }}>Soluções</h4>
          <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = COLORS.textSecondary}>Cardápio Digital</a>
          <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = COLORS.textSecondary}>Agendamento</a>
          <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = COLORS.textSecondary}>IA de Atendimento</a>
          <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = COLORS.textSecondary}>SaaS Assistido</a>
        </div>

        <div>
          <h4 style={{ fontWeight: 700, marginBottom: '24px' }}>Empresa</h4>
          <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = COLORS.textSecondary}>Sobre nós</a>
          <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = COLORS.textSecondary}>Resultados</a>
          <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = COLORS.textSecondary}>Carreiras</a>
        </div>

        <div>
          <h4 style={{ fontWeight: 700, marginBottom: '24px' }}>Suporte</h4>
          <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = COLORS.textSecondary}>Central de Ajuda</a>
          <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = COLORS.textSecondary}>Status do Sistema</a>
          <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = COLORS.textSecondary}>Privacidade</a>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '40px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ fontSize: '14px', color: COLORS.textTertiary }}>
          © 2026 SeeK. · @seek.br
        </div>
        <div style={{ fontSize: '14px', color: COLORS.textTertiary }}>
          Feito com ❤️ no Brasil 🇧🇷
        </div>
      </div>
    </footer>
  );
};

export default Footer;
