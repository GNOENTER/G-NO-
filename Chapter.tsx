export default function Chapter() {
  return (
    <section
      className="chapter"
      data-video="https://static.readdy.ai/video/96dedaca9055ca31558c0eac6fd20448/3cade150726f15490853fc1cf598757b.mp4"
      data-duration="14"
      data-poster="https://static.readdy.ai/image/bf5c2033f4b80a1c02a0954b062b07d8/4d9a598c148e70529aba1dd3cfc6cecc.jpeg"
      data-label="From rehearsal room to Korean stage"
    >
      <div className="stage">
        <img
          className="plate"
          src="https://static.readdy.ai/image/bf5c2033f4b80a1c02a0954b062b07d8/4d9a598c148e70529aba1dd3cfc6cecc.jpeg"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          alt="A young Cambodian singer rehearses with eyes closed under a warm brass lamp, before stepping onto a Korean stage"
        />
        <div className="veil" aria-hidden="true" />

        <div className="beat" data-from="0" data-to="0.5357" data-pos="left" data-depth="soft" data-tone="dark" data-motion="track" id="overview">
          <p className="stamp">01 · G NO Co., Ltd.</p>
          <h1 className="sr-only">G NO Co., Ltd. — Licensed E-6 Entertainer Agency in South Korea</h1>
          <h2 data-split="lines">Connecting <em className="accent">talent.</em><br />Creating opportunities.</h2>
          <p className="sub">A licensed Korean agency bringing singers to real stages, legally and safely.</p>
        </div>

        <div className="beat" data-from="0.5357" data-to="1" data-pos="bottom" data-depth="soft" data-tone="dark" data-motion="rise" id="stage">
          <p className="stamp">02 · E-6 Entertainer Visa</p>
          <h2 data-split="lines">Your voice belongs<br />on a <em className="accent">Korean</em> stage.</h2>
          <a className="cta" href="#process">See how to apply <i className="ri-arrow-right-line" /></a>
        </div>

        <div className="scroll-cue" aria-hidden="true"><span /></div>
      </div>
    </section>
  );
}