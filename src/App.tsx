import { MotionConfig } from "motion/react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Timeline } from "./components/Timeline";
import { Footer } from "./components/Footer";
import { useLenis } from "./lib/lenis";
import "./App.css";

export function App() {
  useLenis();

  return (
    <MotionConfig reducedMotion="user">
      <div className="batman-app">
        {/* Background ambient lighting */}
        <div className="ambient-glow" aria-hidden="true" />

        <div className="site-wrapper">
          <Header />
          <Hero />
          <Timeline />
          <Footer />
        </div>
      </div>
    </MotionConfig>
  );
}

export default App;
