import { scrollTo } from "./lenis";

export const scrollToTop = () => scrollTo(0);

export const scrollToTimeline = () => {
  const element = document.getElementById("linha-do-tempo");
  if (element) scrollTo(element, -24);
};
