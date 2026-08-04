'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { WebsiteProject } from '@/data/website_projects';
import { MobileProject } from '@/data/mobile_projects';
import { Eye } from 'lucide-react';
import ImageLightbox from '@/components/GalleryBox';

export type Project = WebsiteProject | MobileProject;

interface ProjectCardProps {
  project: Project;
  onOpenGallery?: () => void;
}

export default function ProjectCard({ project, onOpenGallery }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectăm dacă utilizatorul este pe mobil (sub 768px)
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile(); // Verificare la prima încărcare
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  if (!project) return null;

  // LOGICĂ ALEGERE IMAGINI PENTRU GALERIE:
  // 1. Dacă suntem pe mobil -> încercăm mobileGalleryImages -> apoi mobileCoverImages
  // 2. Dacă suntem pe desktop -> încercăm desktopGalleryImages -> apoi fallback
  let rawImages: string[] = [];

  if (isMobile) {
    if (project.mobileGalleryImages && project.mobileGalleryImages.length > 0) {
      rawImages = project.mobileGalleryImages;
    } else {
      rawImages = project.mobileCoverImages || [];
    }
  } else {
    if (project.desktopGalleryImages && project.desktopGalleryImages.length > 0) {
      rawImages = project.desktopGalleryImages;
    } else if (project.desktopCoverImage) {
      rawImages = [project.desktopCoverImage];
    }
  }

  // Formatăm imaginile pentru Lightbox Component
  const formattedImages = rawImages.map((img) => ({
    src: img,
    alt: project.title,
  }));

  const handleOpenGallery = () => {
    setIsGalleryOpen(true);
    if (onOpenGallery) onOpenGallery();
  };

  return (
    <>
      <div className="w-full bg-[#172A3A]/40 border border-white/10 rounded-2xl p-5 sm:p-7 text-white backdrop-blur-sm">
        
        {/* HEADER CARD: Titlu + Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <h3 className="text-xl sm:text-3xl font-bold">{project.title}</h3>
          {project.badge && (
            <span className="text-base sm:text-lg font-semibold text-[#E58C65] flex items-center gap-1.5 self-start sm:self-auto">
              {project.badge}
            </span>
          )}
        </div>

        {/* DESCRIERE DINAMICĂ CU MORE / LESS */}
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-5 transition-all">
          {isExpanded ? project.fullDescription : project.shortDescription}{' '}
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-white font-bold underline hover:text-[#A7D6FF] transition-colors inline-block cursor-pointer ml-1"
          >
            {isExpanded ? 'less' : 'more'}
          </button>
        </p>

        {/* BUTON VIEW GALLERY */}
        <div className="mb-6">
          <button
            onClick={handleOpenGallery}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#82C3F5] text-[#09111E] text-xs sm:text-sm font-semibold hover:bg-[#A7D6FF] transition-all cursor-pointer shadow-md"
          >
            <Eye className="w-8 h-6" />
            <span>View Gallery</span>
          </button>
        </div>

        <hr className="border-white/10 mb-6" />

        {/* ZONELE VIZUALE DE COPERTĂ */}

        {/* A. MOBIL: CAROUSEL SWIPE (Doar pe ecran mic) */}
        {project.mobileCoverImages && project.mobileCoverImages.length > 0 && (
          <div className="block md:hidden">
            <div className="flex justify-between items-center mb-2 px-1 text-[11px] text-gray-400 font-medium">
              <span>Cover Screens</span>
              <span className="text-[#82C3F5]">Swipe to see more &rarr;</span>
            </div>

            <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-2 scrollbar-none -mx-1 px-1">
              {project.mobileCoverImages.map((imgSrc, index) => (
                <div
                  key={index}
                  className="snap-center shrink-0 w-[82%] relative aspect-[9/16] rounded-xl overflow-hidden border border-white/10 bg-[#050B14]"
                >
                  <Image
                    src={imgSrc}
                    alt={`${project.title} cover ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* B. DESKTOP: POZA MARE CU ADNOTĂRI (De la md în sus) */}
        {project.desktopCoverImage && (
          <div className="hidden md:block relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#050B14] border border-white/10">
            <Image
              src={project.desktopCoverImage}
              alt={project.title}
              fill
              className="object-cover p-0"
              priority
            />
          </div>
        )}

      </div>

      {/* MODAL LIGHTBOX */}
      <ImageLightbox
        images={formattedImages}
        currentIndex={0}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </>
  );
}