export default function SecuritySection() {
  return (
    <section className="bg-[#f5f5f7] py-12 sm:py-16 lg:py-20">
      <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-16">
        <div className="lg:w-2/3">
          {/* Header */}
          <div className="mb-8 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1d1d1f] mb-3 lg:mb-4" style={{ letterSpacing: '-0.5px' }}>
              Security is our top priority
            </h2>
            <p className="text-base lg:text-lg text-[#6e6e73] max-w-lg font-normal leading-relaxed">
              Intervue serves startups to fortune 500 companies with enterprise grade security baked in by design
            </p>
          </div>

          {/* Cards Grid - Single column on mobile, 3 columns on desktop */}
          <div className="flex flex-col gap-4 lg:gap-6 lg:grid lg:grid-cols-3">
            {/* Security Card */}
            <div className="bg-white p-6 sm:p-8 lg:p-10 shadow-sm relative flex flex-col lg:h-[340px]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full mb-4 sm:mb-6 flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-[#1d1d1f] mb-2 sm:mb-3">
                Security
              </h3>
              
              <p className="text-sm sm:text-[15px] text-[#6e6e73] leading-relaxed flex-grow mb-4 lg:mb-0">
                Protecting your data at every layer is fundamental to how Intervue works
              </p>
              
              <div className="absolute bottom-6 right-6 lg:bottom-10 lg:left-8 lg:right-auto">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-6 sm:h-6">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Compliances Card */}
            <div className="bg-white p-6 sm:p-8 lg:p-10 shadow-sm relative flex flex-col lg:h-[340px]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full mb-4 sm:mb-6 flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-[#1d1d1f] mb-2 sm:mb-3">
                Compliances
              </h3>
              
              <p className="text-sm sm:text-[15px] text-[#6e6e73] leading-relaxed flex-grow mb-4 lg:mb-0">
                Enterprise grade compliance commitments where we have established controls to adhere to those commitments
              </p>
              
              <div className="absolute bottom-6 right-6 lg:bottom-10 lg:left-8 lg:right-auto">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-6 sm:h-6">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Two Stacked Cards - This wrapper only exists on desktop */}
            <div className="contents lg:flex lg:flex-col lg:gap-6">
              {/* Intervue for Startups */}
              <div className="bg-white p-6 sm:p-8 lg:p-10 shadow-sm flex items-center justify-between lg:h-[158px] relative">
                <div className="flex items-center gap-4 sm:gap-5 flex-1 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex-shrink-0 flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#1d1d1f]">
                    Intervue for startups
                  </h3>
                </div>
                <div className="absolute right-6 lg:right-10 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-6 sm:h-6">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Intervue for Enterprises */}
              <div className="bg-white p-6 sm:p-8 lg:p-10 shadow-sm flex items-center justify-between lg:h-[158px] relative">
                <div className="flex items-center gap-4 sm:gap-5 flex-1 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex-shrink-0 flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#1d1d1f]">
                    Intervue for Enterprises
                  </h3>
                </div>
                <div className="absolute right-6 lg:right-10 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-6 sm:h-6">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
