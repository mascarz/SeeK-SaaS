import React, { useState, useEffect } from 'react';
import { Zap, Menu, X } from 'lucide-react';
import { COLORS, TYPOGRAPHY, LAYOUT } from '../constants';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `0 ${LAYOUT.paddingX}`,
    zIndex: 1000,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    backgroundColor: scrolled ? 'rgba(7, 11, 20, 0.97)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? `1px solid rgba(59, 130, 246, 0.1)` : '1px solid transparent',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 900,
    fontSize: '24px',
    letterSpacing: '-0.02em',
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
  };

  const linkStyle = {
    color: COLORS.textSecondary,
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: 500,
    transition: 'color 0.2s ease',
    cursor: 'pointer',
  };

  const ctaButtonStyle = {
    background: COLORS.gradientPrimary,
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '50px',
    fontSize: '15px',
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 4px 20px rgba(99, 102, 241, 0.35)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    border: 'none',
    cursor: 'pointer',
  };

  const mobileMenuOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: COLORS.bgPrimary,
    zIndex: 999,
    display: mobileMenuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '32px',
    transition: 'opacity 0.3s ease',
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999";
    const message = encodeURIComponent("Olá! Vim através do site SeeK e gostaria de começar meu teste grátis.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <nav style={navStyle}>
        <a href="#" style={logoStyle}>
          <div style={logoBoxStyle}>S</div>
          <span>See<span style={{ ...TYPOGRAPHY.textGradient }}>K</span></span>
        </a>

        {/* Desktop Links */}
        <div className="nav-links-desktop" style={{ display: 'none', gap: '32px', alignItems: 'center' }}>
          <a href="#solucoes" style={linkStyle} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = COLORS.textSecondary}>Soluções</a>
          <a href="#como-funciona" style={linkStyle} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = COLORS.textSecondary}>Como Funciona</a>
          <a href="#resultados" style={linkStyle} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = COLORS.textSecondary}>Resultados</a>
          <a href="#precos" style={linkStyle} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = COLORS.textSecondary}>Preços</a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button 
            onClick={handleWhatsAppClick}
            className="nav-cta-desktop"
            style={{ ...ctaButtonStyle, display: 'none' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(99, 102, 241, 0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(99, 102, 241, 0.35)';
            }}
          >
            <Zap size={18} fill="currentColor" />
            Começar Grátis
          </button>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="nav-hamburger"
            style={{ 
              background: 'none', 
              border: 'none', 
              color: '#fff', 
              display: 'flex',
            }}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div style={mobileMenuOverlayStyle}>
        <a href="#solucoes" onClick={() => setMobileMenuOpen(false)} style={{ ...linkStyle, fontSize: '24px', color: '#fff' }}>Soluções</a>
        <a href="#como-funciona" onClick={() => setMobileMenuOpen(false)} style={{ ...linkStyle, fontSize: '24px', color: '#fff' }}>Como Funciona</a>
        <a href="#resultados" onClick={() => setMobileMenuOpen(false)} style={{ ...linkStyle, fontSize: '24px', color: '#fff' }}>Resultados</a>
        <a href="#precos" onClick={() => setMobileMenuOpen(false)} style={{ ...linkStyle, fontSize: '24px', color: '#fff' }}>Preços</a>
        <button 
          onClick={() => {
            setMobileMenuOpen(false);
            handleWhatsAppClick();
          }}
          style={{ ...ctaButtonStyle, fontSize: '18px', padding: '16px 32px' }}
        >
          <Zap size={20} fill="currentColor" />
          Começar Grátis
        </button>
      </div>

      {/* Media Query simulation for inline styles */}
      <style>{`
        @media (max-width: 1023px) {
          .nav-links-desktop { display: none !important; }
          .nav-cta-desktop { display: none !important; }
        }
        @media (min-width: 1024px) {
          .nav-links-desktop { display: flex !important; }
          .nav-cta-desktop { display: flex !important; }
          .nav-hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
