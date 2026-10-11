import { benefits } from '@/mocks/content';

export default function PanelsA() {
  return (
    <>
      <section className="panel manifesto" id="belief">
        <span className="panel-accent numeral" aria-hidden="true" data-parallax="0.55">E6</span>
        <p className="manifesto-text" data-words>
          We believe a gifted voice deserves a <em className="accent">legal</em> path, a fair wage, a safe home and a stage where the world can finally <em className="accent">hear</em> it.
        </p>
      </section>

      <section className="panel" data-side="left" id="benefits">
        <img
          className="panel-bg"
          data-parallax="0.32"
          alt="Warm lamp-lit shared apartment for foreign performers in Seoul"
          title="Accommodation for E-6 visa singers in Korea"
          src="https://readdy.ai/api/search-image?query=Cozy%20small%20Seoul%20apartment%20interior%20at%20night%20lit%20by%20a%20single%20warm%20brass%20lamp%2C%20amber%20tungsten%20glow%2C%20dark%20brown%20walls%2C%20neatly%20made%20bed%2C%20window%20with%20soft%20blurred%20city%20lights%2C%20cinematic%20moody%20film%20still%2C%20deep%20shadows%20on%20the%20left%20side&width=2400&height=1350&seq=gno-panel-home-01&orientation=landscape"
        />
        <div className="panel-veil" />
        <div className="panel-copy wide" data-parallax="-0.08">
          <p className="stamp" data-reveal>03 — Life in Korea</p>
          <h2 data-reveal>Up to two years,<br /><em className="accent">fully</em> looked after.</h2>
          <p className="sub" data-reveal style={{ maxWidth: '52ch' }}>
            Flights, a room, meals, insurance and a monthly salary of roughly USD 1,500 to over 2,500 — depending on your schedule and contract.
          </p>
          <div className="grid3" style={{ marginTop: 8 }}>
            {benefits.map((b) => (
              <div className="card" data-reveal key={b.title}>
                <div className="ic"><i className={b.icon} /></div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="panel" data-side="right" id="trust">
        <img
          className="panel-bg"
          data-parallax="0.32"
          alt="Signed performer contract and passport on a desk under warm light"
          title="Legal and transparent recruitment by G NO Co., Ltd."
          src="https://readdy.ai/api/search-image?query=Close%20up%20of%20a%20passport%20and%20a%20signed%20employment%20contract%20with%20a%20fountain%20pen%20on%20a%20dark%20walnut%20desk%2C%20warm%20amber%20lamp%20light%20from%20the%20left%2C%20deep%20brown%20shadows%20on%20the%20right%20half%2C%20cinematic%20shallow%20depth%20of%20field%2C%20film%20grain&width=2400&height=1350&seq=gno-panel-trust-01&orientation=landscape"
        />
        <div className="panel-veil" />
        <div className="panel-copy" data-parallax="-0.08">
          <p className="stamp" data-reveal>04 — Safe, legal, transparent</p>
          <h2 data-reveal>Nothing hidden.<br />Nothing <em className="accent">illegal.</em></h2>
          <p className="sub" data-reveal>
            We recruit only through procedures that follow Korean immigration law. The Immigration Office checks on foreign performers about every  3  months.
          </p>
          <div className="chips-row" data-reveal>
            <span>No illegal employment</span>
            <span>No human trafficking</span>
            <span>No hidden fees</span>
          </div>
        </div>
      </section>
    </>
  );
}