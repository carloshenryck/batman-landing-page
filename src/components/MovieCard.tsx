import { motion } from "motion/react";
import type { Movie } from "../data/movies";
import { EASE } from "../lib/motion";

type MovieCardProps = {
  movie: Movie;
  index: number;
};

export function MovieCard({ movie, index }: MovieCardProps) {
  return (
    <motion.article
      className="movie-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.08, ease: EASE }}
    >
      <div className="poster-container">
        <span className="poster-year-badge">{movie.year}</span>
        <img
          src={movie.poster}
          alt={`Pôster do filme ${movie.title}`}
          className="poster-image"
          loading="lazy"
        />
        <div className="poster-overlay" aria-hidden="true" />
        <span className="poster-number" aria-hidden="true">
          {movie.number}
        </span>
      </div>

      <div className="movie-details">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-metadata">
          <span className="meta-director">
            <span className="meta-label">DIREÇÃO: </span>
            {movie.director}
          </span>
          <span className="meta-divider" aria-hidden="true">
            ·
          </span>
          <span className="meta-actor">
            <span className="meta-label">BATMAN: </span>
            {movie.actor}
          </span>
        </div>
        <p className="movie-description">{movie.description}</p>
      </div>
    </motion.article>
  );
}
