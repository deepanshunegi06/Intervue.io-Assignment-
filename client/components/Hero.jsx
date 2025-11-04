import { useState } from 'react';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-16 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          Technical interview resources
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Find all the technical interview resources here
        </p>

        <div className="max-w-2xl mx-auto px-6 sm:px-8">
          <div className="relative">
            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills, role, seniority"
              className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white text-gray-900 placeholder-gray-400 text-sm transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
