import { motion } from "motion/react";
import { movies } from "../data/movies";
import { EASE } from "../lib/motion";
import { MovieCard } from "./MovieCard";

export function Timeline() {
  return (
    <section id="linha-do-tempo" className="timeline-section">
      <motion.div
        className="timeline-heading-wrapper"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <h2 className="timeline-section-title">LINHA DO TEMPO</h2>
      </motion.div>

      <div className="movies-grid">
        {movies.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} index={index} />
        ))}
      </div>
    </section>
  );
}
