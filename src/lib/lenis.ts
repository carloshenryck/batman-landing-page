import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

let instance: Lenis | null = null;

/** Starts Lenis smooth scrolling for the lifetime of the calling component. */
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    instance = lenis;

    let rafId = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      instance = null;
    };
  }, []);
}

/** Smooth-scrolls to a target through Lenis, falling back to native scrolling. */
export function scrollTo(target: number | HTMLElement, offset = 0) {
  if (instance) {
    instance.scrollTo(target, { offset });
  } else if (typeof target === "number") {
    window.scrollTo({ top: target + offset, behavior: "smooth" });
  } else {
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY + offset,
      behavior: "smooth",
    });
  }
}
