import { useEffect, useState } from "react";
import "../../assets/style/loader.css";

/**
 * Initial app loading screen.
 * Shows on first mount and fades out once the window has fully loaded
 * (and a minimum display time has elapsed so it doesn't flash).
 */
function Loader({ minDuration = 800 }) {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const start = Date.now();

    const finish = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, minDuration - elapsed);
      setTimeout(() => setHidden(true), remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
      return () => window.removeEventListener("load", finish);
    }
  }, [minDuration]);

  // Remove from DOM after fade-out transition
  useEffect(() => {
    if (!hidden) return;
    const t = setTimeout(() => setRemoved(true), 600);
    return () => clearTimeout(t);
  }, [hidden]);

  if (removed) return null;

  return (
    <div className={`app-loader${hidden ? " app-loader--hidden" : ""}`} aria-hidden={hidden} role="status">
      <div className="app-loader__bg" />

      <div className="app-loader__content">
        <div className="app-loader__hub">
          <span className="app-loader__ring app-loader__ring--1" />
          <span className="app-loader__ring app-loader__ring--2" />
          <span className="app-loader__ring app-loader__ring--3" />

          <div className="app-loader__core">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18h6" />
              <path d="M10 22h4" />
              <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" fill="rgba(255,180,50,0.25)" />
            </svg>
          </div>
        </div>

        <div className="app-loader__brand">Zahga</div>

        <div className="app-loader__bar" aria-hidden="true">
          <span />
        </div>

        <div className="app-loader__hint">Loading experience…</div>
      </div>
    </div>
  );
}

export default Loader;
