import ReactGA from "react-ga4";

/**
 * Initializes Google Analytics with your Measurement ID.
 */
export const initGA = (measurementId: string): void => {
  ReactGA.initialize(measurementId);
};

/**
 * Sends a manual pageview hit to GA4.
 * @param path - The URL path (e.g., /about).
 * @param title - The document title for the page.
 */
export const logPageView = (path: string, title?: string): void => {
  ReactGA.send({ hitType: "pageview", page: path, title: title });
};