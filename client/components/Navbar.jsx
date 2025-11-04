import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Become an Interviewer', href: '#' },
  { label: 'Features', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Start a trial', href: '#' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex justify-between items-center h-16">
          <img 
            src="https://d2b1cooxpkirg1.cloudfront.net/publicAssets/intervue.svg" 
            alt="Intervue Logo" 
            className="h-5"
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button className="text-sm font-medium text-gray-600 border border-gray-300 px-4 py-2 rounded hover:border-gray-400 transition-colors">
              Login
            </button>
            <button className="text-sm font-medium text-white bg-gray-900 px-4 py-2 rounded hover:bg-gray-800 transition-colors">
              Signup
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900 flex flex-col gap-1.5"
          >
            <span className="block w-6 h-0.5 bg-current"></span>
            <span className="block w-6 h-0.5 bg-current"></span>
            <span className="block w-6 h-0.5 bg-current"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-gray-200">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm font-medium text-gray-600 hover:text-gray-900 py-2 px-2 rounded hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 space-y-2 border-t border-gray-200">
              <button className="w-full text-sm font-medium text-gray-600 border border-gray-300 py-2 px-2 rounded hover:border-gray-400 transition-colors">
                Login
              </button>
              <button className="w-full text-sm font-medium text-white bg-gray-900 py-2 px-2 rounded hover:bg-gray-800 transition-colors">
                Signup
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
