import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <>
      {/* Desktop Footer */}
      <footer className="hidden md:block bg-[#27282c] text-white" style={{ padding: '60px 80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '80px' }}>
            <div style={{ flex: 1, maxWidth: '400px' }}>
              <div style={{ fontSize: '32px', fontWeight: '600', marginBottom: '40px', letterSpacing: '-0.5px' }}>
                intërvuë
              </div>
              
              <div style={{ display: 'flex', gap: '30px', marginBottom: '50px' }}>
                <a href="#facebook" style={{ color: '#fff', textDecoration: 'none', fontSize: '15px', transition: 'opacity 0.3s' }} className="hover:opacity-70">Facebook</a>
                <a href="#instagram" style={{ color: '#fff', textDecoration: 'none', fontSize: '15px', transition: 'opacity 0.3s' }} className="hover:opacity-70">Instagram</a>
                <a href="#linkedin" style={{ color: '#fff', textDecoration: 'none', fontSize: '15px', transition: 'opacity 0.3s' }} className="hover:opacity-70">LinkedIn</a>
                <a href="#pinterest" style={{ color: '#fff', textDecoration: 'none', fontSize: '15px', transition: 'opacity 0.3s' }} className="hover:opacity-70">Pinterest</a>
              </div>

              <div style={{ marginTop: '50px' }}>
                <h3 style={{ color: '#fbbf24', fontSize: '18px', fontWeight: '500', marginBottom: '25px' }}>Hire better & faster</h3>
                <form onSubmit={handleSubmit} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    style={{
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                      color: '#fff',
                      padding: '12px 40px 12px 0',
                      fontSize: '14px',
                      width: '100%',
                      outline: 'none',
                      transition: 'border-color 0.3s'
                    }}
                  />
                  <button type="submit" style={{ position: 'absolute', right: 0, background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '100px', flex: 1, justifyContent: 'flex-end' }}>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '25px' }}>Company</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '15px' }}><a href="#so-gehts" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s' }}>So gehts</a></li>
                  <li style={{ marginBottom: '15px' }}><a href="#erfahrung" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s' }}>Erfahrung</a></li>
                  <li style={{ marginBottom: '15px' }}><a href="#aligner" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s' }}>Aligner</a></li>
                  <li style={{ marginBottom: '15px' }}><a href="#preise" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s' }}>Preise</a></li>
                  <li style={{ marginBottom: '15px' }}><a href="#standorte" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s' }}>Standorte</a></li>
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '25px' }}>Resources</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '15px' }}><a href="#blog" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s' }}>Blog</a></li>
                  <li style={{ marginBottom: '15px' }}><a href="#faq" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s' }}>FAQ</a></li>
                  <li style={{ marginBottom: '15px' }}><a href="#lift-media" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s' }}>Lift Media</a></li>
                  <li style={{ marginBottom: '15px' }}><a href="#offene-stellen" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s' }}>Offene Stellen</a></li>
                  <li style={{ marginBottom: '15px' }}><a href="#presse-kit" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s' }}>Presse kit</a></li>
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '25px' }}>Product</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '15px' }}><a href="#gratis-termin" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s' }}>Gratis Termin</a></li>
                  <li style={{ marginBottom: '15px' }}><a href="#freunde-einladen" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s' }}>Freunde einladen</a></li>
                  <li style={{ marginBottom: '15px' }}><a href="#patienteninforma" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s' }}>Patienteninforma</a></li>
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '25px' }}>Product</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '15px' }}><a href="#blog" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s' }}>Blog</a></li>
                  <li style={{ marginBottom: '15px' }}><a href="#faq" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s' }}>FAQ</a></li>
                  <li style={{ marginBottom: '15px' }}><a href="#lift-media" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s' }}>Lift Media</a></li>
                  <li style={{ marginBottom: '15px' }}><a href="#offene-stellen" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s' }}>Offene Stellen</a></li>
                  <li style={{ marginBottom: '15px' }}><a href="#presse-kit" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s' }}>Presse kit</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Footer */}
      <footer className="md:hidden bg-[#27282c] text-white" style={{ padding: '40px 24px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ fontSize: '28px', fontWeight: '600', marginBottom: '30px', letterSpacing: '-0.5px' }}>
            intërvuë
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ color: '#fbbf24', fontSize: '16px', fontWeight: '500', marginBottom: '15px' }}>Hire better & faster</h3>
            <form onSubmit={handleSubmit} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                style={{
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#fff',
                  padding: '10px 40px 10px 0',
                  fontSize: '13px',
                  width: '100%',
                  outline: 'none'
                }}
              />
              <button type="submit" style={{ position: 'absolute', right: 0, background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', padding: '8px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
            </form>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '40px' }}>
            <div>
              <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '20px' }}>Menu</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '12px' }}><a href="#home" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>Home</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#pricing" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>Pricing</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#case-studies" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>Case studies</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#features" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>Features</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#downloads" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>Downloads</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#updates" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>Updates</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#changelog" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>Changelog</a></li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '20px' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '12px' }}><a href="#about" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>About</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#contact" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>Contact us</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#careers" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>Careers</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#culture" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>Culture</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#help" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>Help Center</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#support" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>Support</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#legal" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>Legal</a></li>
              </ul>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '40px' }}>
            <div>
              <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '20px' }}>Menu</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '12px' }}><a href="#home" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>Home</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#pricing" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>Pricing</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#case-studies" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>Case studies</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#features" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>Features</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#downloads" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>Downloads</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#updates" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>Updates</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#changelog" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>Changelog</a></li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '20px' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '12px' }}><a href="#about" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>About</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#contact" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>Contact us</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#careers" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>Careers</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#culture" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>Culture</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#help" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>Help Center</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#support" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>Support</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#legal" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>Legal</a></li>
              </ul>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '30px' }}>
            <a href="#facebook" style={{ width: '40px', height: '40px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', fontSize: '18px', transition: 'background 0.3s' }}>f</a>
            <a href="#twitter" style={{ width: '40px', height: '40px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', fontSize: '18px', transition: 'background 0.3s' }}>𝕏</a>
            <a href="#instagram" style={{ width: '40px', height: '40px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', fontSize: '18px', transition: 'background 0.3s' }}>📷</a>
            <a href="#linkedin" style={{ width: '40px', height: '40px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', fontSize: '18px', transition: 'background 0.3s' }}>in</a>
            <a href="#youtube" style={{ width: '40px', height: '40px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', fontSize: '18px', transition: 'background 0.3s' }}>▶</a>
          </div>

          <div style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.5)', fontSize: '12px', lineHeight: '1.6' }}>
            Copyright © 2023 Intervue.io<br />
            All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
}
