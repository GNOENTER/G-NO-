import { govFlow, govFacts, govLinks, govVisaNotices, govResidenceCards } from '@/mocks/content';

export default function GovPanel() {
  return (
    <section className="panel gov" data-side="left" id="immigration">
      <div className="panel-copy wide gov-copy" data-parallax="-0.05">
        <p className="stamp" data-reveal>10 — Government cooperation</p>
        <h2 data-reveal>Every artist we bring in is <em className="accent">officially documented.</em></h2>
        <p className="sub" data-reveal style={{ maxWidth: '74ch' }}>
          G NO Co., Ltd. brings artists into Korea only through the Ministry of Justice and the Korea Immigration Service.
          The two documents shown here — the Visa Grant Notice (사증발급인정서) and the Residence Card (외국인등록증) — are issued
          directly by the Korean government. Every artist who works with us holds both, before a single stage is opened.
        </p>
        <p className="sub" data-reveal style={{ maxWidth: '74ch', color: 'var(--muted)' }}>
          주식회사 G NO는 대한민국 법무부와 출입국·외국인사무소를 통해서만 아티스트를 초청합니다. 사증발급인정서와 외국인등록증은 모두
          대한민국 정부가 직접 발급한 문서이며, 저희와 함께하는 모든 아티스트가 두 문서를 모두 보유한 뒤 공연이 시작됩니다.
        </p>

        <p className="gov-label" data-reveal style={{ marginTop: 4 }}>합법 절차 흐름 · Legal procedure flow</p>
        <div className="gov-flow" data-reveal>
          {govFlow.map((s, i) => (
            <div className="gov-flow-step" key={s.n}>
              <span className="gov-flow-n">{s.n}</span>
              <p className="gov-flow-org">{s.org}</p>
              <h3>{s.title}</h3>
              <p className="gov-flow-en">{s.en}</p>
              <p className="gov-flow-desc">{s.desc}</p>
              {i < govFlow.length - 1 && <span className="gov-flow-arrow"><i className="ri-arrow-right-line" /></span>}
            </div>
          ))}
        </div>

        <div className="gov-record" data-reveal>
          <div className="gov-record-head">
            <i className="ri-shield-check-line" />
            <div>
              <p className="gov-record-title">이 절차 전 과정은 정부 기관 기록으로 확인 가능합니다.</p>
              <p className="gov-record-sub">Every step of this process is verifiable through official government records.</p>
            </div>
          </div>
          <p className="gov-record-text">
            심의 결과, 사증발급인정서, 외국인등록증은 모두 대한민국 정부가 직접 발급·관리하는 기록입니다. 아래 공식 안내 채널에서
            발급 기관과 절차, 진위 확인 방법을 직접 확인하실 수 있습니다.
          </p>
          <div className="gov-record-links">
            {govLinks.map((l) => (
              <a
                className="gov-record-link"
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={l.icon} />
                <span className="gov-record-link-body">
                  <span className="gov-record-link-org">{l.org}</span>
                  <span className="gov-record-link-desc">{l.desc}</span>
                  <span className="gov-record-link-url">{l.label} ↗</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="gov-types" data-reveal>
          <div className="gov-type-card">
            <i className="ri-passport-line" />
            <div>
              <h3>사증발급인정서 · Visa Grant Notice</h3>
              <p>대한민국 법무부 발급 — Ministry of Justice, Republic of Korea</p>
              <p className="gov-type-meta">체류자격 E-6-2 · 기간 6개월 후 24개월까지 · 단수 입국</p>
            </div>
          </div>
          <div className="gov-type-card">
            <i className="ri-id-card-line" />
            <div>
              <h3>외국인등록증 · Residence Card</h3>
              <p>양주출입국·외국인사무소 발급 — Chief, Yangju Immigration Office</p>
              <p className="gov-type-meta">체류자격 예술흥행(E-6) · 입국 후 정식 발급</p>
            </div>
          </div>
        </div>

        <div className="gov-facts" data-reveal>
          {govFacts.map((f) => (
            <div className="gov-fact" key={f.kr}>
              <span className="gov-fact-v">{f.value}</span>
              <p className="gov-fact-k">{f.kr}</p>
              <p className="gov-fact-e">{f.en}</p>
            </div>
          ))}
        </div>

        <p className="gov-label" data-reveal>정부 발급 문서 샘플 · Government-issued document samples</p>
        <div className="gov-gallery" data-reveal>
          <div className="gov-row gov-row-visa">
            {govVisaNotices.map((d) => (
              <figure className="gov-doc" key={d.src}>
                <div className="gov-photo gov-photo-visa">
                  <span className="gov-tag">{d.tag}</span>
                  <img src={d.src} alt={d.alt} title={d.title} />
                </div>
                <figcaption>
                  <strong>{d.caption}</strong>
                  <br />
                  {d.meta}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="gov-row gov-row-card">
            {govResidenceCards.map((d) => (
              <figure className="gov-doc" key={d.src}>
                <div className="gov-photo gov-photo-card">
                  <span className="gov-tag">{d.tag}</span>
                  <img src={d.src} alt={d.alt} title={d.title} />
                </div>
                <figcaption>
                  <strong>{d.caption}</strong>
                  <br />
                  {d.meta}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <p className="gov-note">
          <i className="ri-lock-2-line" />
          샘플 이미지는 개인정보 보호를 위해 이름·등록번호·여권번호를 비식별 처리했습니다. Personal data is masked for privacy —
          only the issuing authority, status and dates are shown.
        </p>

        <p className="gov-close" data-reveal>
          Government-issued, government-verified — <em className="accent">no shortcuts.</em>
        </p>
      </div>
    </section>
  );
}