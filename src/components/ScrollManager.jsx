import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Handles scroll behavior on route changes:
 *  - If the URL has a hash (e.g. /services#how-we-work), smoothly scroll to that element.
 *  - Otherwise, scroll to the top of the page.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait one frame so the new page has mounted before scrolling to the section.
      const id = hash.replace("#", "");
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

export default ScrollManager;
