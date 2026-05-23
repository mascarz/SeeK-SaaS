import React from 'react';
import { Instagram, MessageCircle, Mail } from 'lucide-react';
import { COLORS, TYPOGRAPHY, LAYOUT } from '../constants';

const Footer = () => {
  const footerStyle = {
    padding: `100px ${LAYOUT.paddingX} 60px`,
    background: '#000',
    borderTop: `1px solid ${COLORS.borderCard}`,
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '64px',
    maxWidth: LAYOUT.maxWidth,
    margin: '0 auto',
    marginBottom: '100px',
  };

  const logoBoxStyle = {
    width: '36px',
    height: '36px',
    background: COLORS.brandPrimary,
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: 900,
    color: '#000',
    marginBottom: '24px',
  };

  const linkStyle = {
    display: 'block',
    color: COLORS.textSecondary,
    fontSize: '14px',
    fontWeight: 500,
    marginBottom: '16px',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
  };

  const socialIconStyle = {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={logoBoxStyle}>S</div>
            <span style={{ fontWeight: 900, fontSize: '26px', letterSpacing: '-0.04em' }}>See<span style={{ color: COLORS.brandPrimary }}>K</span></span>
          </div>
          <p style={{ ...TYPOGRAPHY.body, color: COLORS.textSecondary, maxWidth: '320px', marginBottom: '32px', fontSize: '15px' }}>
            Liderando a transformação digital com IA generativa e infraestrutura de escala global para empresas de alto crescimento.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            {[Instagram, MessageCircle, Mail].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                style={socialIconStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = COLORS.brandPrimary;
                  e.currentTarget.style.color = COLORS.brandPrimary;
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = COLORS.textSecondary;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ fontWeight: 800, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '32px', color: '#FFF' }}>Soluções High-End</h4>
          <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style.color = COLORS.brandPrimary} onMouseLeave={(e) => e.target.style.color = COLORS.textSecondary}>Sistemas IA & CRM</a>
          <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style.color = COLORS.brandPrimary} onMouseLeave={(e) => e.target.style.color = COLORS.textSecondary}>Agendamento Automático</a>
          <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style.color = COLORS.brandPrimary} onMouseLeave={(e) => e.target.style.color = COLORS.textSecondary}>Cardápios Inteligentes</a>
          <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style.color = COLORS.brandPrimary} onMouseLeave={(e) => e.target.style.color = COLORS.textSecondary}>Infra Multi-tenant</a>
        </div>

        <div>
          <h4 style={{ fontWeight: 800, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '32px', color: '#FFF' }}>Empresa</h4>
          <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style.color = COLORS.brandPrimary} onMouseLeave={(e) => e.target.style.color = COLORS.textSecondary}>Visão Global</a>
          <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style.color = COLORS.brandPrimary} onMouseLeave={(e) => e.target.style.color = COLORS.textSecondary}>Tecnologia</a>
          <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style.color = COLORS.brandPrimary} onMouseLeave={(e) => e.target.style.color = COLORS.textSecondary}>Privacidade</a>
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
