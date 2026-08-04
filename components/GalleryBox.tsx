'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface ImageItem {
  src: string;
  alt?: string;
}

interface ImageLightboxProps {
  images: ImageItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
}: ImageLightboxProps) {
  const [index, setIndex] = useState(currentIndex);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const lastWheelTimeRef = useRef(0);

  // 1. DEFINIREA FUNCȚIILOR AJUTĂTOARE (Mai sus în cod)
  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = () => {
    setScale((prev) => {
      const newScale = Math.max(prev - 0.5, 1);
      if (newScale === 1) setPosition({ x: 0, y: 0 });
      return newScale;
    });
  };

  const showNext = () => {
    resetZoom();
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrev = () => {
    resetZoom();
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // 2. USE EFFECT-URILE
  useEffect(() => {
    setIndex(currentIndex);
    resetZoom();
  }, [currentIndex, isOpen]);

  // Previne scroll-ul pe fundal
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Zoom pe Touchpad / Mouse & blocare zoom browser
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isOpen) return;

    const handleNativeWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const now = Date.now();
      if (now - lastWheelTimeRef.current < 100) return;
      lastWheelTimeRef.current = now;

      if (e.deltaY < 0 || (e.ctrlKey && e.deltaY < 0)) {
        handleZoomIn();
      } else if (e.deltaY > 0 || (e.ctrlKey && e.deltaY > 0)) {
        handleZoomOut();
      }
    };

    container.addEventListener('wheel', handleNativeWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleNativeWheel);
    };
  }, [isOpen]);

  // Control Tastatură
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === '+' || e.key === '=') handleZoomIn();
      if (e.key === '-') handleZoomOut();
      if (e.key === '0') resetZoom();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, index, scale]);

  if (!isOpen || !images || images.length === 0) return null;

  // DRAG & PAN CU LIMITĂ
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale <= 1 || !containerRef.current) return;

    const container = containerRef.current;
    const { width, height } = container.getBoundingClientRect();

    const maxX = (width * (scale - 1)) / 2;
    const maxY = (height * (scale - 1)) / 2;

    const newX = e.clientX - dragStartRef.current.x;
    const newY = e.clientY - dragStartRef.current.y;

    setPosition({
      x: Math.max(-maxX, Math.min(maxX, newX)),
      y: Math.max(-maxY, Math.min(maxY, newY)),
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black/95 backdrop-blur-lg p-2 sm:p-4 overflow-hidden select-none"
      onClick={onClose}
    >
      {/* BARĂ SUS: CONTROALE ZOOM */}
      <div 
        className="absolute top-3 right-3 sm:top-5 sm:right-5 z-40 flex items-center gap-2 bg-black/60 border border-white/20 p-1.5 rounded-full backdrop-blur-md shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleZoomOut}
          disabled={scale <= 1}
          className="text-white/80 hover:text-white disabled:opacity-30 p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          title="Zoom Out (-)"
        >
          <ZoomOut className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {scale > 1 && (
          <button
            onClick={resetZoom}
            className="text-xs sm:text-sm font-semibold text-[#82C3F5] px-2 py-1 rounded-md hover:bg-white/10 flex items-center gap-1 cursor-pointer"
            title="Reset Zoom (0)"
          >
            <span>{Math.round(scale * 100)}%</span>
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        )}

        <button
          onClick={handleZoomIn}
          disabled={scale >= 4}
          className="text-white/80 hover:text-white disabled:opacity-30 p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          title="Zoom In (+)"
        >
          <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="w-[1px] h-5 bg-white/20 mx-0.5" />

        <button
          onClick={onClose}
          className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* ZONA CENTRALĂ */}
      <div 
        ref={containerRef}
        className="relative flex items-center justify-center w-full max-w-[98vw] h-[85vh] sm:h-[90vh] my-auto px-1 sm:px-10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* SĂGEATĂ STÂNGA */}
        <button
          onClick={showPrev}
          className="absolute left-1 sm:left-3 z-30 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-black/95 text-white transition-all transform hover:scale-110 shadow-2xl border border-white/20 cursor-pointer backdrop-blur-md"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 sm:w-9 sm:h-9" />
        </button>

        {/* CONTAINER IMAGINE */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <div 
            className="relative w-full h-full transform-gpu will-change-transform flex items-center justify-center transition-transform duration-150 ease-out"
            style={{ 
              transform: `translate3d(${position.x}px, ${position.y}px, 0px) scale(${scale})`,
              cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
            }}
          >
            <Image
              src={images[index].src}
              alt={images[index].alt || `Photo ${index + 1}`}
              fill
              className="object-contain pointer-events-none"
              priority
              unoptimized={images[index].src.endsWith('.svg')}
            />
          </div>
        </div>

        {/* SĂGEATĂ DREAPTA */}
        <button
          onClick={showNext}
          className="absolute right-1 sm:right-3 z-30 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-black/95 text-white transition-all transform hover:scale-110 shadow-2xl border border-white/20 cursor-pointer backdrop-blur-md"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 sm:w-9 sm:h-9" />
        </button>
      </div>

      {/* BARĂ JOS - THUMBNAILS */}
      <div 
        className="w-full max-w-xl overflow-x-auto overflow-y-hidden scrollbar-none flex items-center justify-center gap-3 py-1.5 px-3 bg-black/70 rounded-2xl border border-white/10 backdrop-blur-md z-20 shrink-0 mb-1"
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => {
              resetZoom();
              setIndex(idx);
            }}
            className={`relative w-11 h-11 sm:w-14 sm:h-14 shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
              idx === index 
                ? 'border-white scale-105 opacity-100 ring-2 ring-white/50' 
                : 'border-transparent opacity-40 hover:opacity-80'
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt || `Thumbnail ${idx + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}