'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { events } from '@/data/events'
import { motion, AnimatePresence } from 'framer-motion'

export function PhotoGallery() {
  const [selectedEvent, setSelectedEvent] = useState(events[0].id)
  const [lightboxPhoto, setLightboxPhoto] = useState<string | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number>(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  
  const currentEvent = events.find(event => event.id === selectedEvent) || events[0]

  const handleEventChange = (eventId: string) => {
    setSelectedEvent(eventId)
    // Reset scroll position when changing events
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0
    }
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      })
    }
  }

  const openLightbox = (photoSrc: string, index: number) => {
    setLightboxPhoto(photoSrc)
    setLightboxIndex(index)
    // Prevent body scrolling when lightbox is open
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxPhoto(null)
    // Restore body scrolling
    document.body.style.overflow = 'auto'
  }

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const totalPhotos = currentEvent.photos.length;
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = (lightboxIndex - 1 + totalPhotos) % totalPhotos;
    } else {
      newIndex = (lightboxIndex + 1) % totalPhotos;
    }
    
    setLightboxIndex(newIndex);
    setLightboxPhoto(currentEvent.photos[newIndex].src);
  }

  // Add keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxPhoto) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateLightbox('prev');
          break;
        case 'ArrowRight':
          navigateLightbox('next');
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxPhoto, lightboxIndex]);

  return (
    <section className="py-24 px-6 " id="gallery-top">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Photo Gallery
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Explore photos from our past events and hackathons
          </p>
        </div>

        {/* Event selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {events.map(event => (
            <button
              key={event.id}
              onClick={() => handleEventChange(event.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedEvent === event.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {event.name}
            </button>
          ))}
        </div>

        {/* Event title and date */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
            {currentEvent.name}
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            {currentEvent.date}
          </p>
        </div>

        {/* Horizontal photo scroller */}
        <div className="relative">
          {/* Left scroll button */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 rounded-full p-3 shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Right scroll button */}
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 rounded-full p-3 shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedEvent}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-x-auto scrollbar-hide pb-4"
              ref={scrollContainerRef}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex gap-4 min-w-max px-8">
                {currentEvent.photos.map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    className="flex-shrink-0 w-80 h-60 relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openLightbox(photo.src, index)}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      loading="lazy" // Enable lazy loading
                      sizes="(max-width: 640px) 100vw, 320px"
                    />
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxPhoto && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Previous button */}
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-3 hover:bg-black/70 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('prev');
              }}
              aria-label="Previous photo"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Next button */}
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-3 hover:bg-black/70 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('next');
              }}
              aria-label="Next photo"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <div className="relative w-full max-w-5xl max-h-[80vh] aspect-[4/3]" onClick={(e) => e.stopPropagation()}>
              <Image
                src={lightboxPhoto}
                alt="Enlarged photo"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
            
            {/* Photo counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
              {lightboxIndex + 1} / {currentEvent.photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
} 