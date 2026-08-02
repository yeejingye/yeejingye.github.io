import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";
import Library from "./pages/Library";
import NotFound from "./pages/NotFound";

import { useEffect, useRef } from "react";
import { initGA } from "./analytics";
import usePageTracking from "./hooks/usePageTracking";
import { ConsentProvider, useAnalyticsOptOutFlag, useConsent } from "./consent";
import { ConsentBanner } from "./components/layout/ConsentBanner";

const queryClient = new QueryClient();

const routerBasename =
  import.meta.env.BASE_URL === "/"
    ? "/"
    : import.meta.env.BASE_URL.replace(/\/$/, "");

const measurementId = import.meta.env.VITE_GA_ID;

const Analytics = () => {
  const { consent } = useConsent();
  const initialised = useRef(false);
  const enabled = Boolean(measurementId) && consent === "granted";

  useAnalyticsOptOutFlag(measurementId, consent);

  useEffect(() => {
    if (!enabled || initialised.current) return;
    initGA(measurementId);
    initialised.current = true;
  }, [enabled]);

  usePageTracking(enabled);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ConsentProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={routerBasename}>
          <Analytics />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/library" element={<Library />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {measurementId && <ConsentBanner />}
        </BrowserRouter>
      </TooltipProvider>
    </ConsentProvider>
  </QueryClientProvider>
);

export default App;
