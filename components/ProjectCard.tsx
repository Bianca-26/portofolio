'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WebsiteProject } from '@/data/website_projects';
import { MobileProject } from '@/data/mobile_projects';
import { Eye } from 'lucide-react';

export type Project = WebsiteProject | MobileProject;

interface ProjectCardProps {
  project: Project;
  category: 'mobile' | 'websites';
}

export default function ProjectCard({ project, category }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!project) return null;

  return (
    <div className="w-full bg-[#172A3A]/40 border border-white/5 rounded-2xl p-5 sm:p-7 text-white backdrop-blur-sm">
      {/* HEADER CARD: Titlu + Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-3xl font-bold">{project.title}</h3>
        {project.badge && (
          <span className="text-base sm:text-lg font-semibold text-[#E58C65] flex items-center gap-1.5 self-start sm:self-auto">
            {project.badge}
          </span>
        )}
      </div>

      {/* DESCRIERE DINAMICĂ */}
      <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 transition-all w-full max-w-none">
        {isExpanded ? project.fullDescription : project.shortDescription}{' '}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-white font-bold underline hover:text-[#A7D6FF] transition-colors inline-block cursor-pointer ml-1"
        >
          {isExpanded ? 'less' : 'more'}
        </button>
      </p>

      {/* BUTON VIEW PROJECT */}
      <div className="mb-6">
        <Link
          href={`/${category}/${project.id}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#82C3F5] text-[#09111E] text-xs sm:text-sm font-semibold hover:bg-[#A7D6FF] transition-all cursor-pointer shadow-md"
        >
          <Eye className="w-5 h-5" />
          <span>View Project</span>
        </Link>
      </div>

      <hr className="border-white/10 mb-6" />

      {/* COVER IMAGE (RESPONSIVE PE ORICE ECRAN) */}
      {project.desktopCoverImage && (
        <div className="w-full rounded-xl overflow-hidden bg-[#050B14] border border-white/10 shadow-xl">
          <Image
            src={project.desktopCoverImage}
            alt={project.title}
            width={0}
            height={0}
            sizes="100vw"
            priority={true}
            className="w-full h-auto object-cover block"
          />
        </div>
      )}
    </div>
  );
}