import { scrollToTop } from "../lib/scroll";

export function Header() {
  return (
    <header className="site-header">
      <a
        href="#"
        className="logo-link"
        aria-label="Batman Home"
        onClick={(e) => {
          e.preventDefault();
          scrollToTop();
        }}
      >
        <img
          src="./batrman-logo.png"
          alt="Batman Logo"
          className="batman-logo"
        />
      </a>
    </header>
  );
}
