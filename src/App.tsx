import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { HowItWorks } from './components/sections/HowItWorks';
import { Preview } from './components/sections/Preview';
import { Benefits } from './components/sections/Benefits';
import { CallToAction } from './components/sections/CallToAction';
import { Footer } from './components/sections/Footer';
import { TrustedBy } from './components/sections/TrustedBy';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <HowItWorks />
        <Preview />
        <Benefits />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default App;
