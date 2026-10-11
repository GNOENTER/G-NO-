export default function DirectorPanel() {
  return (
    <section className="panel director" data-side="left" id="director">
      <img
        className="panel-bg"
        data-parallax="0.24"
        alt="Warmly lit backstage corridor of a Korean theater"
        title="Message from the General Director of G NO Co., Ltd."
        src="https://readdy.ai/api/search-image?query=Softly%20lit%20backstage%20corridor%20of%20a%20Korean%20theater%2C%20warm%20amber%20lamps%20glowing%20along%20a%20dark%20wood%20wall%2C%20deep%20brown%20shadow%20filling%20the%20left%20and%20lower%20areas%2C%20hazy%20cinematic%20atmosphere%2C%20no%20people%2C%20film%20still&width=2400&height=1350&seq=gno-panel-director-bg-01&orientation=landscape"
      />
      <div className="panel-veil" />
      <div className="director-wrap" data-parallax="-0.06">
        <figure className="director-photo" data-reveal>
          <img
            alt="한상경 총괄이사 / Han Sang-kyung, General Director of G NO Co., Ltd."
            title="한상경 총괄이사 Han Sang-kyung, General Director"
            src="https://storage.helloreaddy.io/project_files/1486b6d8-bd60-4c01-8447-8cf55d8f37ed/605a7139-4e01-441e-947d-8ca4ad94d007_compressed_----.webp"
          />
          <figcaption className="director-badge">총괄이사 · General Director</figcaption>
        </figure>
        <div className="director-copy">
          <p className="stamp" data-reveal>08 — Message from the director</p>
          <h2 data-reveal>A word from our <em className="accent">General Director.</em></h2>
          <p className="greeting-en" data-reveal>
            Welcome to G NO Co., Ltd. — Opening New Horizons with Global Artists. G NO Co., Ltd. is a specialized cultural and
            entertainment enterprise dedicated to handling official E-6-2 (Entertainment) visa processes and administrative
            support for talented overseas musicians and performers in full compliance with the Ministry of Justice and
            Immigration of the Republic of Korea.
          </p>
          <p className="greeting-en" data-reveal>
            Beyond visa assistance and arrival logistics, our mission is to ensure that international artists seamlessly adapt
            to Korean culture and lifestyle. We believe a performance journey in Korea should be more than just a temporary
            experience; it should serve as a solid springboard for artists to build a sustainable, successful, and stable
            future.
          </p>
          <p className="greeting-en" data-reveal>
            As a trusted bridge connecting global talent with the Korean cultural industry, G NO Co., Ltd. is committed to
            accompanying every artist on their path to growth with utmost integrity and care. Thank you.
          </p>
          <p className="greeting-kr" data-reveal>
            G NO 주식회사에 오신 것을 환영합니다 — 글로벌 아티스트와 함께 새로운 지평을 열어갑니다. G NO 주식회사는 해외의
            유망한 음악가와 공연 예술가가 대한민국 법무부와 출입국·외국인정책본부의 규정을 충실히 준수하여 공식 E-6-2(예술흥행)
            비자 절차와 행정 지원을 처리할 수 있도록 돕는 문화·엔터테인먼트 전문 기업입니다.
          </p>
          <p className="greeting-kr" data-reveal>
            비자 지원과 입국 후 정착 지원을 넘어, 저희의 사명은 국제 아티스트가 한국의 문화와 생활에 자연스럽게 적응하도록 돕는
            것입니다. 한국에서의 공연 여정이 단순한 일시적 경험에 그치지 않고, 아티스트가 지속 가능하고 성공적이며 안정적인 미래를
            만들어 갈 수 있는 든든한 발판이 되어야 한다고 믿습니다.
          </p>
          <p className="greeting-kr" data-reveal>
            글로벌 인재와 한국 문화 산업을 잇는 신뢰할 수 있는 가교로서, G NO 주식회사는 모든 아티스트의 성장 여정에 최고의
            진정성과 정성으로 동행하겠습니다. 감사합니다.
          </p>
          <div className="signature" data-reveal>
            <p className="sig-name">한상경 · Han Sang-kyung</p>
            <p className="sig-role">총괄이사 · General Director, G NO Co., Ltd.</p>
          </div>
        </div>
      </div>
    </section>
  );
}