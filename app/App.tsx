import {
  Navigation,
  Hero,
  Portfolio,
  Contact,
  Footer,
  Background,
  About,
} from "../app/src/components/index";

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <Background />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
