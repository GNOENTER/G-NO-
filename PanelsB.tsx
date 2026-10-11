import { steps, documents } from '@/mocks/content';

export default function PanelsB() {
  return (
    <>
      <section className="panel" data-side="bottom" id="process">
        <img
          className="panel-bg"
          data-parallax="0.32"
          alt="Empty Korean concert hall with warm stage lights rising"
          title="Korea E-6 entertainer visa process"
          src="https://readdy.ai/api/search-image?query=Wide%20empty%20Korean%20performance%20hall%20seen%20from%20the%20back%20rows%2C%20single%20microphone%20stand%20on%20stage%20under%20warm%20amber%20spotlight%2C%20rows%20of%20dark%20seats%20in%20deep%20brown%20shadow%2C%20hazy%20atmosphere%2C%20cinematic%20film%20still%2C%20dark%20lower%20half&width=2400&height=1350&seq=gno-panel-process-01&orientation=landscape"
        />
        <div className="panel-veil" />
        <div className="panel-copy wide" data-parallax="-0.08">
          <p className="stamp" data-reveal>05 — The visa process</p>
          <h2 data-reveal>Seven steps<br />from audition to <em className="accent">arrival.</em></h2>
          <div className="grid4" style={{ marginTop: 8 }}>
            {steps.map((s) => (
              <div className="card" data-reveal key={s.n}>
                <p className="step-n">STEP {s.n}</p>
                <h3 style={{ marginTop: 6 }}>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="panel" data-side="left" id="documents">
        <img
          className="panel-bg"
          data-parallax="0.32"
          alt="Young singer holding a microphone backstage in warm light"
          title="Required documents for E-6 singer applicants"
          src="https://readdy.ai/api/search-image?query=Young%20Southeast%20Asian%20female%20singer%20standing%20backstage%20holding%20a%20microphone%2C%20placed%20on%20the%20right%20of%20frame%2C%20warm%20amber%20rim%20light%2C%20dark%20brown%20curtains%20and%20soft%20shadow%20filling%20the%20left%20half%2C%20cinematic%20moody%20film%20still&width=2400&height=1350&seq=gno-panel-docs-01&orientation=landscape"
        />
        <div className="panel-veil" />
        <div className="panel-copy" data-parallax="-0.08">
          <p className="stamp" data-reveal>06 — What you need</p>
          <h2 data-reveal>Prepare <em className="accent">honestly.</em><br />Arrive confidently.</h2>
          <ul className="points" data-reveal>
            {documents.map((d) => (
              <li key={d}><i className="ri-checkbox-circle-line" /><span>{d}</span></li>
            ))}
          </ul>
          <p className="sub" data-reveal style={{ fontSize: 14, color: 'var(--accent2)' }}>
            Important: any false information or forged documents may result in visa denial.
          </p>
        </div>
      </section>

      <section className="panel" data-side="right" id="about">
        <img
          className="panel-bg"
          data-parallax="0.32"
          alt="Seoul skyline at blue hour seen through a tall glass wall"
          title="G NO Co., Ltd. global entertainment partner in Seoul"
          src="https://readdy.ai/api/search-image?query=Seoul%20city%20skyline%20at%20dusk%20seen%20through%20a%20tall%20glass%20wall%20of%20a%20dark%20theater%20lobby%2C%20warm%20amber%20interior%20lamps%20reflecting%20on%20the%20glass%2C%20deep%20brown%20shadowed%20interior%20on%20the%20right%20side%2C%20cinematic%20hazy%20film%20still&width=2400&height=1350&seq=gno-panel-about-01&orientation=landscape"
        />
        <div className="panel-veil" />
        <div className="panel-copy" data-parallax="-0.08">
          <p className="stamp" data-reveal>07 — 주식회사 G NO</p>
          <h2 data-reveal>A partner built<br />on <em className="accent">trust.</em></h2>
          <p className="sub" data-reveal>
            We discover up-and-coming overseas singers and entertainers and connect them with performance companies in South Korea, thereby fostering international cultural exchange and building sustainable business relationships.
          </p>
          <ul className="points" data-reveal>
            <li><i className="ri-mic-line" /><span>Connecting performing arts and talent</span></li>
            <li><i className="ri-scales-3-line" /><span>Transparent, responsible cooperation</span></li>
            <li><i className="ri-global-line" /><span>Vision: a global partner trusted at home and abroad</span></li>
          </ul>
          <p className="sub" data-reveal style={{ fontSize: 14, color: 'var(--accent2)' }}>
            To apply for an audition, contact us directly.
          </p>
          <div className="cta-row" data-reveal>
            <a className="cta" href="https://t.me/+086207894" target="_blank" rel="noopener noreferrer">
              <i className="ri-telegram-line" /> Telegram · Cambodia <span className="cta-num">08620 7894</span>
            </a>
            <a className="cta ghost" href="https://www.instagram.com/roy2967han" target="_blank" rel="noopener noreferrer">
              <i className="ri-instagram-line" /> Instagram · Philippines <span className="cta-num">@roy2967han</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}