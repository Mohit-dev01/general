
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen gradient-bg flex flex-col items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-xl shadow-lg max-w-md w-full text-center">
        <h1 className="text-6xl font-bold mb-4 text-travel-dark-blue">404</h1>
        <p className="text-xl text-gray-700 mb-6">Oops! Page not found</p>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-travel-blue hover:bg-travel-dark-blue">
          <a href="/">
            <Home className="mr-2 h-5 w-5" />
            Return Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
