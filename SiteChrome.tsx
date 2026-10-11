import { useEffect, useState } from 'react';

const links = [
  { href: '#benefits', label: 'Benefits' },
  { href: '#trust', label: 'Safety' },
  { href: '#process', label: 'Visa Process' },
  { href: '#documents', label: 'Documents' },
  { href: '#about', label: 'About' },
  { href: '#director', label: 'Director' },
  { href: '#compliance', label: 'Compliance' },
  { href: '#immigration', label: 'Immigration' },
  { href: '#giving', label: 'Giving' },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > window.innerHeight * 0.85);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <>
      <header className={`nav ${solid || open ? 'is-solid' : ''}`}>
        <a href="#overview" className="logo" aria-label="G NO Co., Ltd.">
          <img src="https://public.readdy.ai/ai/img_res/69e6788c-583e-4fdc-a2f8-43bcc8fa8a9c.png" alt="G NO Co., Ltd." />
        </a>
        <nav className="nav-links">
          {links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>
        <a className="nav-cta" href="#about">Apply now</a>
        <button type="button" className="nav-burger" aria-label="Menu" onClick={() => setOpen(!open)}>
          <i className={open ? 'ri-close-line' : 'ri-menu-line'} />
        </button>
      </header>
      {open && (
        <div className="nav-mobile">
          {links.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
        </div>
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <p className="foot-line" data-reveal>Your stage in Korea starts with a <em className="accent">safe</em> first step.</p>
      <div className="grid3" style={{ gap: 32 }}>
        <div data-reveal>
          <img className="foot-logo" src="https://public.readdy.ai/ai/img_res/69e6788c-583e-4fdc-a2f8-43bcc8fa8a9c.png" alt="G NO Co., Ltd." />
          <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.6, margin: '0 0 12px' }}>
            Business Registration No. 535-81-02783
          </p>
          <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
            Official entertainment &amp; artist management agency. Licensed entertainment agency in South Korea.
          </p>
        </div>
        <div data-reveal style={{ display: 'grid', gap: 8, fontSize: 14 }}>
          <p className="stamp" style={{ marginBottom: 4 }}>Explore</p>
          {links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </div>
        <div data-reveal style={{ display: 'grid', gap: 8, fontSize: 14 }}>
          <p className="stamp" style={{ marginBottom: 4 }}>Contact</p>
          <a href="mailto:camp565@naver.com">camp565@naver.com</a>
          <a href="tel:+82318618501"><i className="ri-phone-line" style={{ marginRight: 6 }} />+82 31-861-8501</a>
          <a href="tel:+821045622967"><i className="ri-smartphone-line" style={{ marginRight: 6 }} />+82 10-4562-2967</a>
          <span style={{ color: 'var(--muted)', lineHeight: 1.55 }}><i className="ri-map-pin-line" style={{ marginRight: 6 }} />506-16 Gangbyeon-ro (Saengyeon-dong), Dongducheon-si, Gyeonggi-do, Republic of Korea</span>
          <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
            <a className="pill" href="https://facebook.com" rel="nofollow" aria-label="Facebook"><i className="ri-facebook-fill" /></a>
            <a className="pill" href="https://t.me" rel="nofollow" aria-label="Telegram"><i className="ri-telegram-line" /></a>
            <a className="pill" href="https://youtube.com" rel="nofollow" aria-label="YouTube"><i className="ri-youtube-line" /></a>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 56, paddingTop: 20, borderTop: '1px solid color-mix(in srgb, var(--text) 10%, transparent)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 8, fontSize: 12, color: 'var(--muted)' }}>
        <span>© 2026 G NO Co., Ltd. All rights reserved.</span>
        <span>No illegal employment · No human trafficking · No hidden fees</span>
      </div>
    </footer>
  );
}