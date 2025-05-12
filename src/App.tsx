import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Universities from "./pages/Universities";

import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import DocumentPreparation from "./pages/DocumentPreparation";

// Wrapper component for AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Layout>
              <Index />
            </Layout>
          }
        />
        <Route
          path="/universities"
          element={
            <Layout>
              <Universities />
            </Layout>
          }
        />
        <Route
          path="/documents"
          element={
            <Layout>
              <DocumentPreparation />
            </Layout>
          }
        />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  // Create QueryClient instance inside the component function
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="bg-gray-950 min-h-screen">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AnimatedRoutes />
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
