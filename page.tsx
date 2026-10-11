import Chapter from './components/Chapter';
import PanelsA from './components/PanelsA';
import PanelsB from './components/PanelsB';
import DirectorPanel from './components/DirectorPanel';
import CompliancePanel from './components/CompliancePanel';
import GovPanel from './components/GovPanel';
import GivingPanel from './components/GivingPanel';
import { Nav, Footer } from './components/SiteChrome';
import useFilm from '@/hooks/useFilm';
import useScrollFx from '@/hooks/useScrollFx';

export default function Home() {
  useFilm();
  useScrollFx();
  return (
    <>
      <Nav />
      <main>
        <Chapter />
        <PanelsA />
        <PanelsB />
        <DirectorPanel />
        <CompliancePanel />
        <GovPanel />
        <GivingPanel />
      </main>
      <Footer />
    </>
  );
}