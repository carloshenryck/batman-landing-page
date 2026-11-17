import React, { useEffect, useState } from "react";
import { AutoTextSize } from "auto-text-size";
import { motion } from "motion/react";
import { EASE, fadeUp } from "../lib/motion";
import { scrollToTimeline } from "../lib/scroll";

const WATERMARK = "BATMAN".split("");

const letterVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};

export function Hero() {
  const [fontsReady, setFontsReady] = useState(false);

  useEffect(() => {
    if (document.fonts) {
      document.fonts.ready.then(() => setFontsReady(true));
    }
  }, []);

  const handleTimelineClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToTimeline();
  };

  return (
    <section className="hero-section">
      {/* Dynamic full-width outline watermark using auto-text-size */}
      <div className="hero-watermark" aria-hidden="true">
        <AutoTextSize
          key={fontsReady ? "fonts-ready" : "fonts-loading"}
          mode="oneline"
          minFontSizePx={24}
          maxFontSizePx={600}
          className="hero-watermark-text"
        >
          <motion.span
            className="hero-watermark-letters"
            initial="hidden"
            animate={fontsReady ? "show" : "hidden"}
            transition={{ staggerChildren: 0.12, delayChildren: 0.2 }}
          >
            {WATERMARK.map((letter, i) => (
              <motion.span
                key={i}
                className="hero-watermark-letter"
                variants={letterVariants}
              >
                {letter}
              </motion.span>
            ))}
          </motion.span>
        </AutoTextSize>
      </div>

      <div className="hero-grid">
        <div className="hero-content">
          <motion.h1 className="hero-title" {...fadeUp(0.1)}>
            TODOS OS FILMES DO CAVALEIRO DAS TREVAS
          </motion.h1>
          <motion.p className="hero-subtitle" {...fadeUp(0.25)}>
            De 1966 a 2022, a trajetória do Batman nos cinemas, em ordem
            cronológica de lançamento.
          </motion.p>
          <motion.a
            href="#linha-do-tempo"
            onClick={handleTimelineClick}
            className="hero-cta-btn"
            id="btn-timeline"
            {...fadeUp(0.4)}
          >
            VER LINHA DO TEMPO
          </motion.a>
        </div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <img
            src="./batman-hero.png"
            alt="Batman - O Cavaleiro das Trevas"
            className="hero-batman-img"
          />
          <div className="hero-image-mask" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
