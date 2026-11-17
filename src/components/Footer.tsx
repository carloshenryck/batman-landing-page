import { motion } from "motion/react";
import { EASE } from "../lib/motion";
import { scrollToTop } from "../lib/scroll";

export function Footer() {
  return (
    <footer className="site-footer">
      <motion.img
        src="./batman-footer.png"
        alt=""
        aria-hidden="true"
        className="footer-batman-img"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />
      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <span className="footer-quote-mark" aria-hidden="true">
          &ldquo;
        </span>
        <blockquote className="footer-quote">
          Não é quem sou por baixo, mas o que eu faço que me define.
        </blockquote>
        <p className="footer-author">Bruce Wayne · Batman Begins, 2005</p>
        <button type="button" className="footer-top-btn" onClick={scrollToTop}>
          VOLTAR AO TOPO <span aria-hidden="true">↑</span>
        </button>
      </motion.div>
    </footer>
  );
}
