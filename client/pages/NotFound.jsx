import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function NotFound() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error('404 Error: Page not found at', location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-gray-900">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
        <button 
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Return Home
        </button>
      </div>
    </div>
  );
}
