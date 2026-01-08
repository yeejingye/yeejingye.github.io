import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { logPageView } from "../analytics";

/**
 * Hook to automatically track pageviews on route changes.
 */
const usePageTracking = (): void => {
  const location = useLocation();

  useEffect(() => {
    // Construct the path including search params (e.g., /project?id=1)
    const currentPath = location.pathname + location.search;
    logPageView(currentPath, document.title);
  }, [location]);
};

export default usePageTracking;