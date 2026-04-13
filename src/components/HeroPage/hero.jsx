import { Link } from "react-router-dom";
import "../../assets/style/hero.css";

const hubIcons = [
  {
    label: "Services",
    to: "/services",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    angle: 90,
  },
  {
    label: "Home",
    to: "/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    angle: 162,
  },
  {
    label: "Company",
    to: "/company",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    angle: 18,
  },
  {
    label: "Industries",
    to: "/industries",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" />
        <path d="M5 20V8l5-4v16" />
        <path d="M10 20V4l9 4v12" />
        <rect x="7" y="12" width="2" height="2" />
        <rect x="13" y="10" width="2" height="2" />
        <rect x="13" y="14" width="2" height="2" />
      </svg>
    ),
    angle: 234,
  },
  {
    label: "Contact",
    to: "/contact",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    angle: 306,
  },
];

const RADIUS = 160;

function HeroPage() {
  return (
    <section className="hero">
      {/* <div className="hero__noise"></div> */}
      <div className="hero__content">
        <div className="hero__grid">

          {/* Hub — LEFT side */}
          <div className="hero__image-col">
            <div className="hero__hub">
              {/* SVG lines from center to each icon */}
              <svg className="hero__hub-lines" viewBox="0 0 400 400">
                {hubIcons.map((item) => {
                  const rad = (item.angle * Math.PI) / 180;
                  const cx = 200 + Math.cos(rad) * RADIUS;
                  const cy = 200 - Math.sin(rad) * RADIUS;
                  return (
                    <line key={item.label} x1="200" y1="200" x2={cx} y2={cy} />
                  );
                })}
              </svg>

              {/* Center lightbulb */}
              <div className="hero__hub-center">
                <div className="hero__hub-glow" />
                <svg className="hero__hub-bulb" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                  <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" fill="rgba(255,180,50,0.25)" />
                </svg>
              </div>

              {/* Icons in a circle */}
              {hubIcons.map((item) => {
                const rad = (item.angle * Math.PI) / 180;
                const x = Math.cos(rad) * RADIUS;
                const y = -Math.sin(rad) * RADIUS;
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="hero__hub-icon"
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                    title={item.label}
                  >
                    <div className="hero__hub-ring">
                      {item.icon}
                    </div>
                    <span className="hero__hub-label">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Text — RIGHT side */}
          <div className="hero__text-col">
            <span className="hero__badge">Trusted by 180+ Companies</span>

            <h1 className="hero__title">
              Logistics Made Smart.{" "}
              <span className="hero__title-accent">Delivery</span> Made Fast.
            </h1>

            <p className="hero__subtitle">
              A logistics platform built for speed, safety, and efficiency
              — from freight and last-mile to full supply chain visibility.
            </p>

            <div className="hero__actions">
              <Link to="/contact" className="hero__btn hero__btn--primary">
                Request a Demo
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/services" className="hero__btn hero__btn--outline">
                Our Services
              </Link>
            </div>

            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-number">25+</span>
                <span className="hero__stat-label">Years of Experience</span>
              </div>
              <div className="hero__stat-divider"></div>
              <div className="hero__stat">
                <span className="hero__stat-number">1.2M+</span>
                <span className="hero__stat-label">Deliveries Completed</span>
              </div>
              <div className="hero__stat-divider"></div>
              <div className="hero__stat">
                <span className="hero__stat-number">180+</span>
                <span className="hero__stat-label">Global Partners</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroPage;
