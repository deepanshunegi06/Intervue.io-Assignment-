import { useState, useRef } from 'react';

export default function Testimonial() {
  const [isPlaying, setIsPlaying] = useState(false);
  const mobileVideoRef = useRef(null);
  const desktopVideoRef = useRef(null);

  const handlePlayMobile = () => {
    if (mobileVideoRef.current) {
      mobileVideoRef.current.muted = false;
      mobileVideoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePlayDesktop = () => {
    if (desktopVideoRef.current) {
      desktopVideoRef.current.muted = false;
      desktopVideoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleVideoMobile = () => {
    if (mobileVideoRef.current) {
      if (mobileVideoRef.current.paused) {
        mobileVideoRef.current.play();
        setIsPlaying(true);
      } else {
        mobileVideoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleVideoDesktop = () => {
    if (desktopVideoRef.current) {
      if (desktopVideoRef.current.paused) {
        desktopVideoRef.current.play();
        setIsPlaying(true);
      } else {
        desktopVideoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-full mx-auto lg:px-16">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="relative -mx-6 sm:-mx-8 w-screen h-56 rounded-r-full overflow-hidden bg-gray-300 mb-8 group">
            <video
              ref={mobileVideoRef}
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              className="w-full h-full object-cover cursor-pointer"
              muted
              playsInline
              onClick={toggleVideoMobile}
            />
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/15 transition-colors">
                <button
                  onClick={handlePlayMobile}
                  className="bg-white rounded-full p-4 hover:bg-gray-100 transition-colors shadow-lg"
                  aria-label="Play video"
                >
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          <div className="px-6 sm:px-8 space-y-4">
            <p className="text-gray-700 text-base leading-relaxed">
              After interviewing candidates on Intervue, we were able to convert at least 5% of people from our application base to hires.
            </p>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Niket Gupta
              </h3>
              <p className="text-gray-600 text-sm">
                Group head of talent acquisition, Yubi
              </p>
            </div>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-block transition-colors">
              See more customer stories
            </a>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center gap-0 px-16">
          <div className="w-1/2 flex-shrink-0">
            <div className="relative w-full h-72 rounded-r-full overflow-hidden bg-gray-300 group">
              <video
                ref={desktopVideoRef}
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                className="w-full h-full object-cover cursor-pointer"
                muted
                playsInline
                onClick={toggleVideoDesktop}
              />
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/15 transition-colors">
                  <button
                    onClick={handlePlayDesktop}
                    className="bg-white rounded-full p-4 hover:bg-gray-100 transition-colors shadow-lg"
                    aria-label="Play video"
                  >
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="w-1/2 px-12">
            <p className="text-gray-700 text-base mb-6 leading-relaxed">
              After interviewing candidates on Intervue, we were able to convert at least 5% of people from our application base to hires.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Niket Gupta
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Group head of talent acquisition, Yubi
            </p>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-2 transition-colors">
              See more customer stories →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
