import { kmrbOrg, kmrbFlow, kmrbYearly, kmrbTable, gnoStatus, gnoResults } from '@/mocks/content';

export default function CompliancePanel() {
  return (
    <section className="panel compliance" data-side="left" id="compliance">
      <div className="panel-copy wide compliance-copy" data-parallax="-0.05">
        <p className="stamp" data-reveal>09 — Legal foundation</p>
        <h2 data-reveal>Every stage we open is <em className="accent">officially rated.</em></h2>
        <p className="sub" data-reveal style={{ maxWidth: '74ch' }}>
          G NO Co., Ltd. works only through the Korea Media Rating Board (KMRB) — 영상물등급위원회 — and its Online Rating
          Service (ORIS). Every foreign performance recommendation we submit passes through the committee&apos;s formal review,
          rating and record-keeping process before any artist travels to Korea.
        </p>
        <p className="sub" data-reveal style={{ maxWidth: '74ch', color: 'var(--muted)' }}>
          주식회사 G NO는 대한민국 영상물등급위원회와 온라인등급분류서비스(ORIS)의 정식 절차를 통해서만 업무를 진행합니다. 모든 외국인
          공연 추천은 위원회의 심의·등급·기록 절차를 거쳐 처리됩니다.
        </p>

        <div className="kmrb-org" data-reveal>
          {kmrbOrg.map((o, i) => (
            <span key={o} className="kmrb-org-item">
              <i className="ri-organization-chart" />
              {o}
              {i < kmrbOrg.length - 1 && <i className="ri-arrow-right-line kmrb-org-arrow" />}
            </span>
          ))}
        </div>

        <p className="kmrb-label" data-reveal>등급분류 진행과정 · Rating classification procedure</p>
        <div className="kmrb-flow" data-reveal>
          {kmrbFlow.map((s) => (
            <div className="kmrb-step" key={s.n}>
              <span className="kmrb-n">{s.n}</span>
              <p className="kmrb-role">{s.role}</p>
              <h3>{s.title}</h3>
              <p className="kmrb-en">{s.en}</p>
              <p className="kmrb-desc">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="kmrb-grid">
          <div className="kmrb-block" data-reveal>
            <p className="kmrb-label" style={{ marginTop: 0 }}>외국인 공연 신규추천 현황 · Foreign performance recommendations</p>
            <p className="kmrb-unit">단위: 건 (case) · 최근 3년</p>
            <div className="kmrb-bars">
              {kmrbYearly.map((y) => (
                <div className="kmrb-bar-row" key={y.year}>
                  <span className="kmrb-bar-year">{y.year}</span>
                  <div className="kmrb-bar-track">
                    <div className="kmrb-bar-fill" style={{ width: `${y.bar}%` }} />
                  </div>
                  <span className="kmrb-bar-total">{y.total.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="kmrb-block" data-reveal>
            <p className="kmrb-label" style={{ marginTop: 0 }}>주식회사 G NO · 위원회 전체처리현황</p>
            <p className="kmrb-unit">온라인등급분류서비스(ORIS) 기준</p>
            <div className="gno-status">
              {gnoStatus.map((s) => (
                <div className="gno-status-item" key={s.kr}>
                  <span className="gno-status-value">{s.value}<em>건</em></span>
                  <span className="gno-status-kr">
                    {s.kr}
                    <span className="gno-status-tag"><i className="ri-group-line" />{s.size}</span>
                  </span>
                  <span className="gno-status-en">{s.en}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="kmrb-table-wrap" data-reveal>
          <p className="kmrb-label" style={{ marginTop: 0 }}>종별 신규추천 현황 · New recommendations by category (단위: 건)</p>
          <div className="kmrb-table-scroll">
            <table className="kmrb-table">
              <thead>
                <tr>
                  <th rowSpan={2} className="kmrb-th-year">연도</th>
                  <th colSpan={3}>일반공연 · General</th>
                  <th colSpan={3}>관광업소공연 · Tourist venue</th>
                </tr>
                <tr>
                  {kmrbTable.columns.map((c, i) => <th key={`${c}-${i}`}>{c}</th>)}
                </tr>
              </thead>
              <tbody>
                {kmrbTable.rows.map((r) => (
                  <tr key={r.year} className={r.total ? 'is-total' : ''}>
                    <th scope="row">{r.year}</th>
                    {r.cells.map((cell, i) => <td key={`${r.year}-${i}`}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="kmrb-notice" data-reveal>
          <div className="kmrb-notice-head">
            <i className="ri-shield-check-line" />
            <div>
              <p className="kmrb-notice-title">등급분류 결과 요약 · Rating result summary</p>
              <p className="kmrb-notice-sub">온라인등급분류서비스(ORIS) 전체처리현황 기준</p>
            </div>
          </div>
          <div className="kmrb-notice-grid">
            {gnoResults.map((r) => (
              <div className={`kmrb-notice-item ${r.tone === 'ok' ? 'is-ok' : 'is-muted'}`} key={r.kr}>
                <span className="kmrb-notice-value">
                  {r.value}
                  {r.tone === 'ok' && <i className="ri-check-line" />}
                </span>
                <span className="kmrb-notice-kr">{r.kr}</span>
                <span className="kmrb-notice-en">{r.en}</span>
              </div>
            ))}
          </div>
          <p className="kmrb-notice-line">
            <i className="ri-information-line" />
            신청된 무대공연 추천 건은 위원회 심의를 거쳐 <strong>결과통보까지 정식으로 완료</strong>되었습니다. 수정요청·진행중 상태로
            남아 있는 건은 없습니다.
          </p>
        </div>

        <p className="kmrb-close" data-reveal>
          No recommendation is filed without full review — <em className="accent">that is the only way we work.</em>
        </p>
      </div>
    </section>
  );
}