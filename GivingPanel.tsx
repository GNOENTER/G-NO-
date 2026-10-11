export default function GivingPanel() {
  return (
    <section className="panel giving" id="giving">
      <div className="panel-copy wide giving-copy" data-parallax="-0.06">
        <p className="stamp" data-reveal>11 — Annual giving</p>
        <h2 data-reveal>Every year, we return to <em className="accent">Quezon City.</em></h2>
        <p className="sub" data-reveal style={{ maxWidth: '68ch' }}>
          Each year, G NO Co., Ltd. sets aside time to visit the Kabahagi Center for Children with Disabilities in Quezon
          City, Philippines. We spend the day with the children and their families, bring everyday supplies, and take part
          in the community — the same visit, every year.
        </p>
        <p className="sub" data-reveal style={{ maxWidth: '68ch', color: 'var(--muted)' }}>
          매년 필리핀 퀘존시티의 Kabahagi 장애 아동 시설을 찾아 아이들과 시간을 보내고, 생활 물품을 전하며 함께하고 있습니다.
        </p>
        <ul className="points" data-reveal>
          <li><i className="ri-heart-3-line" /><span>Kabahagi Center for Children with Disabilities, Quezon City</span></li>
          <li><i className="ri-hand-heart-line" /><span>Spending the day with the children and their families</span></li>
          <li><i className="ri-repeat-line" /><span>Everyday supplies and shared activities, year after year</span></li>
        </ul>

        <div className="giving-gallery" data-reveal>
          <figure className="giving-lead">
            <div className="giving-photo">
              <img
                alt="G NO Co., Ltd. volunteers with the Mayor of Quezon City and children with disabilities at the Kabahagi Center event in Quezon City, Philippines"
                title="Kabahagi 장애 아동 시설 봉사활동 · Quezon City, Philippines"
                src="https://storage.helloreaddy.io/project_files/1486b6d8-bd60-4c01-8447-8cf55d8f37ed/00355d48-2335-4e9b-adba-b192f75bd8c5_compressed_--kabahagi--.webp"
              />
            </div>
            <figcaption>With the Mayor of Quezon City and the children at the Kabahagi Center event, February 20.</figcaption>
          </figure>
          <div className="giving-stack">
            <figure>
              <div className="giving-photo">
                <img
                  alt="The G NO Co., Ltd. team at the Kabahagi Center for Children with Disabilities volunteer event in Quezon City, Philippines"
                  title="G NO Co., Ltd. team · Kabahagi annual volunteer visit"
                  src="https://storage.helloreaddy.io/project_files/1486b6d8-bd60-4c01-8447-8cf55d8f37ed/262a68d3-2b0f-457d-a65e-38fdf58a7ad9_compressed_--kabahagi--2.webp"
                />
              </div>
              <figcaption>Our team at the venue on the day of the annual visit.</figcaption>
            </figure>
            <figure>
              <div className="giving-photo">
                <img
                  alt="The G NO Co., Ltd. team sharing a meal with partners after the Kabahagi Center volunteer visit in Quezon City"
                  title="G NO Co., Ltd. partners dinner · after the annual visit"
                  src="https://storage.helloreaddy.io/project_files/1486b6d8-bd60-4c01-8447-8cf55d8f37ed/19e9f9a7-7e48-409e-b945-685a61159b12_compressed_--kabahagi--1.webp"
                />
              </div>
              <figcaption>An evening with our partners after the day&apos;s visit.</figcaption>
            </figure>
          </div>
        </div>

        <p className="giving-close" data-reveal>Giving back is simply part of who we are.</p>
      </div>
    </section>
  );
}