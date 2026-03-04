import { useState, useEffect } from 'react';

const ChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const Play = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

const Pause = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <rect x="6" y="4" width="4" height="16"></rect>
    <rect x="14" y="4" width="4" height="16"></rect>
  </svg>
);

// Generate certification data from actual images
const totalCertifications = 24;
const certifications = Array.from({ length: totalCertifications }, (_, i) => ({
  id: i + 1,
  image: `/assets/certificações (1)_page-${String(i + 1).padStart(4, '0')}.jpg`,
}));

export default function CertificationBook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const totalPages = certifications.length;

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isAutoPlay && !isHovered) {
      interval = setInterval(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlay, isHovered, totalPages]);

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPage = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <div className="mt-16 pt-16 border-t border-border">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
          Galería de Certificaciones
        </h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors text-sm font-medium"
          >
            {isAutoPlay ? <Pause /> : <Play />}
            <span>{isAutoPlay ? 'Pausar' : 'Reproducir'}</span>
          </button>
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main carousel container */}
        <div className="relative bg-gradient-to-br from-muted/50 to-white rounded-xl p-8 shadow-sm border border-border overflow-hidden">
          {/* Book/Certificate display */}
          <div className="relative flex items-center justify-center">
            {/* Previous button */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border border-border text-foreground/70 hover:text-accent hover:border-accent transition-all"
              aria-label="Certificación anterior"
            >
              <ChevronLeft />
            </button>

            {/* Certificate display area */}
            <div className="mx-16 w-full max-w-2xl">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl bg-white">
                <img
                  src={certifications[currentPage].image}
                  alt={`Certificación ${currentPage + 1}`}
                  className="w-full h-full object-contain bg-white transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Next button */}
            <button
              onClick={goToNext}
              className="absolute right-0 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border border-border text-foreground/70 hover:text-accent hover:border-accent transition-all"
              aria-label="Siguiente certificación"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Page indicator */}
          <div className="mt-6 text-center">
            <span className="text-foreground/60 text-sm">
              {currentPage + 1} de {totalPages} certificaciones
            </span>
          </div>
        </div>

        {/* Thumbnail navigation */}
        <div className="mt-6 flex justify-center gap-2 flex-wrap">
          {certifications.map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentPage
                  ? 'bg-accent scale-125'
                  : 'bg-border hover:bg-accent/50'
              }`}
              aria-label={`Ir a certificación ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}