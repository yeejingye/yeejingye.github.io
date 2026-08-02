import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { logPageView } from "../analytics";

/**
 * Tracks pageviews on route changes. No-ops until `enabled` is true so that
 * nothing is sent before the visitor has consented.
 */
const usePageTracking = (enabled: boolean): void => {
  const location = useLocation();

  useEffect(() => {
    if (!enabled) return;
    const currentPath = location.pathname + location.search;
    logPageView(currentPath, document.title);
  }, [enabled, location]);
};

export default usePageTracking;
