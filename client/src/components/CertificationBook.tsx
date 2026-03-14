import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Generate certification data from actual images
const totalCertifications = 24;
const certifications = Array.from({ length: totalCertifications }, (_, i) => ({
  id: i + 1,
  image: `/assets/certificações (1)_page-${String(i + 1).padStart(4, '0')}.jpg`,
}));

function ChevronLeft() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ZoomIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

export default function CertificationBook() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const goToNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % certifications.length : prev
    );
  }, []);

  const goToPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + certifications.length) % certifications.length : prev
    );
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, goToNext, goToPrev, closeModal]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedIndex]);

  return (
    <div className="mt-16 pt-16 border-t border-border">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
          Galería de Certificaciones
        </h3>
        <span className="text-sm text-foreground/50">
          {totalCertifications} documentos
        </span>
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {certifications.map((cert, index) => (
          <motion.button
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            onClick={() => openModal(index)}
            className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-border bg-white shadow-sm hover:shadow-lg hover:border-accent/50 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            <img
              src={cert.image}
              alt={`Certificación ${cert.id}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md text-accent">
                <ZoomIn />
              </span>
            </div>
            {/* Page number badge */}
            <span className="absolute bottom-1.5 right-1.5 text-[10px] font-medium bg-black/50 text-white px-1.5 py-0.5 rounded">
              {cert.id}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Fullscreen Modal Viewer */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50"
          >
            {/* Backdrop - only this closes the modal */}
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={closeModal}
            />

            {/* Content layer - clicks here do NOT close */}
            <div className="relative z-10 flex items-center justify-center w-full h-full pointer-events-none">
              {/* Close button */}
              <button
                className="pointer-events-auto absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                onClick={closeModal}
                aria-label="Cerrar"
              >
                <XIcon />
              </button>

              {/* Previous button */}
              <button
                className="pointer-events-auto absolute left-2 md:left-6 text-white/70 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
                onClick={goToPrev}
                aria-label="Anterior"
              >
                <ChevronLeft />
              </button>

              {/* Image */}
              <div className="pointer-events-auto relative max-w-4xl max-h-[85vh] w-full mx-16">
                <motion.img
                  key={selectedIndex}
                  src={certifications[selectedIndex].image}
                  alt={`Certificación ${selectedIndex + 1}`}
                  className="w-full h-full object-contain rounded-lg max-h-[85vh]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              {/* Next button */}
              <button
                className="pointer-events-auto absolute right-2 md:right-6 text-white/70 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
                onClick={goToNext}
                aria-label="Siguiente"
              >
                <ChevronRight />
              </button>

              {/* Counter */}
              <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                {selectedIndex + 1} / {certifications.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
