import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../assets/style/header.css";
import Logo from "../../assets/image/redpetal-zcPOc1Tw.png"


const menuData = [
  { label: "Home", to: "/" },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "Our Services", to: "/services#services-overview" },
      { label: "What We Offer", to: "/services#what-we-offer" },
      { label: "How We Work", to: "/services#how-we-work" },
      { label: "Why Choose Us", to: "/services#why-choose-us" },
      { label: "Technologies We Use", to: "/services#technologies" },
      { label: "Case Studies", to: "/services#case-studies" },
    ],
  },
  {
    label: "Industries",
    to: "/industries",
    children: [
      { label: "Industries We Serve", to: "/industries#industries-we-serve" },
      { label: "Solutions Across Industries", to: "/industries#solutions" },
      { label: "Why Industry Expertise Matters", to: "/industries#expertise" },
      { label: "Case Studies", to: "/industries#industry-case-studies" },
    ],
  },
  {
    label: "Company",
    to: "/company",
    children: [
      { label: "About Us", to: "/company#about-us" },
      { label: "Careers", to: "/company#careers" },
      { label: "Projects", to: "/company#projects" },
      { label: "Testimonials", to: "/company#testimonials" },
      { label: "Teams", to: "/company#teams" },
    ],
  },
  {
    label: "Contact",
    to: "/contact",
    children: [
      { label: "Get in Touch", to: "/contact#get-in-touch" },
      { label: "Office Locations", to: "/contact#offices" },
      { label: "Support Channels", to: "/contact#support" },
      { label: "FAQ", to: "/contact#faq" },
    ],
  },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // desktop clicked dropdown label
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const navRef = useRef(null);

  /* Add background on scroll */
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* Close desktop dropdown on click outside or Escape */
  useEffect(() => {
    if (!openDropdown) return;

    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    function handleKey(e) {
      if (e.key === "Escape") setOpenDropdown(null);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, [openDropdown]);

  function closeMobile() {
    setMobileOpen(false);
    setMobileOpenDropdown(null);
  }

  function toggleMobileDropdown(label) {
    setMobileOpenDropdown((prev) => (prev === label ? null : label));
  }

  function toggleDropdown(label) {
    setOpenDropdown((prev) => (prev === label ? null : label));
  }

  return (
    <header className={`header${scrolled ? " header--scrolled" : ""}`} ref={navRef}>
      <div className="header__inner">
        {/* Logo */}
        <Link to="/" className="header__logo">
          Zahga <span className="header__logo-dot"><img className="Logo" src={Logo} alt="" /></span>
        </Link>

        {/* Desktop nav */}
        <nav className="header__nav">
          <ul className="header__menu">
            {menuData.map((item) => {
              const hasChildren = Array.isArray(item.children) && item.children.length > 0;
              const isOpen = openDropdown === item.label;
              return (
                <li
                  className={`header__item${hasChildren ? " header__item--has-dropdown" : ""}${isOpen ? " open" : ""}`}
                  key={item.label}
                >
                  {hasChildren ? (
                    <button
                      type="button"
                      className="header__link header__link--dropdown"
                      onClick={() => toggleDropdown(item.label)}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <svg
                        className="header__chevron"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                  ) : (
                    <Link to={item.to} className="header__link">
                      {item.label}
                    </Link>
                  )}

                  {hasChildren && (
                    <ul className="header__dropdown">
                      <li>
                        <Link
                          to={item.to}
                          className="header__dropdown-link"
                          onClick={() => setOpenDropdown(null)}
                        >
                          All {item.label}
                        </Link>
                      </li>
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            to={child.to}
                            className="header__dropdown-link"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA */}
        <Link to="/contact" className="header__cta">
          Get in Touch
        </Link>

        {/* Mobile hamburger */}
        <button
          className={`header__burger${mobileOpen ? " active" : ""}`}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile overlay + menu */}
      <div className={`header__mobile-overlay${mobileOpen ? " visible" : ""}`} onClick={closeMobile} />
      <div className={`header__mobile${mobileOpen ? " open" : ""}`}>
        <ul className="header__mobile-menu">
          {menuData.map((item) => {
            const hasChildren = Array.isArray(item.children) && item.children.length > 0;
            const isOpen = mobileOpenDropdown === item.label;
            return (
              <li className="header__mobile-item" key={item.label}>
                {hasChildren ? (
                  <>
                    <button
                      type="button"
                      className={`header__mobile-link header__mobile-link--dropdown${isOpen ? " open" : ""}`}
                      onClick={() => toggleMobileDropdown(item.label)}
                    >
                      {item.label}
                      <svg
                        className="header__chevron"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    <ul className={`header__mobile-dropdown${isOpen ? " open" : ""}`}>
                      <li>
                        <Link to={item.to} className="header__mobile-dropdown-link" onClick={closeMobile}>
                          All {item.label}
                        </Link>
                      </li>
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link to={child.to} className="header__mobile-dropdown-link" onClick={closeMobile}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link to={item.to} className="header__mobile-link" onClick={closeMobile}>
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        <Link to="/contact" className="header__mobile-cta" onClick={closeMobile}>
          Get in Touch
        </Link>
      </div>
    </header>
  );
}

export default Header;
