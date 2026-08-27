'use client';

import { ArrowDown } from 'lucide-react';

export default function ScrollToGalleryButton() {
  const handleScroll = () => {
    const galleryElement = document.getElementById('gallery');
    if (galleryElement) {
      galleryElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <button
      onClick={handleScroll}
      type="button"
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#82C3F5] text-[#09111E] text-xs sm:text-sm font-semibold hover:bg-[#A7D6FF] transition-all cursor-pointer shadow-md"
    >
      <ArrowDown className="w-5 h-5" />
      <span>Skip to Images</span>
    </button>
  );
}