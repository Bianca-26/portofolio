import { websiteProjects } from "@/data/website_projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Users, Lightbulb, Sparkles } from "lucide-react";
import ScrollToGalleryButton from "@/components/ScrollToGalleryButton";
import Warning from "@/components/Warning";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function WebsiteDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = websiteProjects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#040A14] text-white flex flex-col font-sans scroll-smooth overflow-x-hidden">
      <Header />

      <main className="flex-1 max-w-5xl w-full mx-auto px-6 pt-32 md:pt-36 pb-32">

        {/* HERO: Titlu + Badge */}
        <header className="mb-10 md:mb-12">
          <div className="flex items-center justify-between gap-6">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              {project.title}
            </h1>

            {project.badge && (
              <span className="shrink-0 px-6 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full bg-[#E58C65]/10 text-[#E58C65] border border-[#E58C65]/20">
                {project.badge}
              </span>
            )}
          </div>

          {/* CARD PENTRU DESCRIERE, TOOLS ȘI BUTON */}
          <div className="mt-10 md:mt-14 p-6 md:p-8 rounded-2xl bg-[#172A3A]/25 border border-white/5 space-y-6">
            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
              {project.shortDescription}
            </p>

            {/* TOOLS USED */}
            {project.tools && project.tools.length > 0 && (
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <span className="text-xs sm:text-sm uppercase tracking-wider text-gray-400 font-semibold mr-1">
                  Tools Used:
                </span>
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-[#172A3A]/60 border border-white/10 text-gray-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            )}

            {/* BUTON SKIP TO GALLERY */}
            <div className="pt-2">
              <ScrollToGalleryButton />
            </div>
          </div>
        </header>
        <Warning /> 

        {/* ========================================================= */}
        {/* COVER SECTION RESPONSIVE (DESKTOP & MOBILE)               */}
        {/* ========================================================= */}

        {/* 1. Desktop Cover (vizibil doar pe ecrane >= md) */}
        {project.desktopCoverImage && (
          <div className="hidden md:block w-full rounded-2xl overflow-hidden border border-white/10 bg-[#050B14] shadow-2xl mb-20 md:mb-24">
            <img
              src={project.desktopCoverImage}
              alt={`${project.title} Desktop Cover`}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* 2. Mobile Covers (vizibile doar pe telefoane < md) */}
        {project.mobileCoverImages && project.mobileCoverImages.length > 0 && (
          <div className="block md:hidden mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.mobileCoverImages.map((src, index) => (
                <div
                  key={index}
                  className="w-full rounded-2xl overflow-hidden border border-white/10 bg-[#050B14] shadow-xl"
                >
                  <img
                    src={src}
                    alt={`${project.title} Mobile Cover ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* SECȚIUNI STRUCTURATE CASE STUDY                           */}
        {/* ========================================================= */}
        <div className="space-y-16 md:space-y-20 mb-24 md:mb-32">
          {/* 1. THE CHALLENGE */}
          {project.challenge && (
            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                1. The Challenge
              </h2>

              <div className="space-y-6 pl-3 md:pl-6 border-l-2 border-white/10">
                {project.challenge.context && (
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#82C3F5] mb-2">
                      Context
                    </h3>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      {project.challenge.context}
                    </p>
                  </div>
                )}

                {project.challenge.objective && (
                  <div className="pt-2">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#82C3F5] mb-2">
                      Objective
                    </h3>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      {project.challenge.objective}
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* 2. TARGET AUDIENCE */}
          {project.targetAudience && (
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                2. Target Audience
              </h2>
              <div className="pl-3 md:pl-6 border-l-2 border-white/10">
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {project.targetAudience}
                </p>
              </div>
            </section>
          )}

          {/* 3. THE SOLUTION */}
          {project.solution && (
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                3. The Solution
              </h2>
              <div className="pl-3 md:pl-6 border-l-2 border-white/10">
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </section>
          )}

          {/* 4. ADDITIONAL NOTES */}
          {project.additionalNotes && (
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                4. Additional Notes
              </h2>
              <div className="pl-3 md:pl-6 border-l-2 border-[#E58C65]/30">
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {project.additionalNotes}
                </p>
              </div>
            </section>
          )}
        </div>

        {/* ========================================================= */}
        {/* GALERIE SCREENS WEBSITE (RESPONSIVE DESKTOP & MOBILE)     */}
        {/* ========================================================= */}
        <section id="gallery" className="space-y-8 scroll-mt-28">

          {/* 1. Desktop Gallery Screens (vizibile pe laptop / desktop) */}
          {project.desktopGalleryImages && project.desktopGalleryImages.length > 0 && (
            <div className="hidden md:block w-screen relative left-1/2 -translate-x-1/2 max-w-[92vw] xl:max-w-7xl px-4 md:px-8 space-y-12">
              {project.desktopGalleryImages.map((src, index) => (
                <div
                  key={index}
                  className="w-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-[#050B14] shadow-2xl"
                >
                  <img
                    src={src}
                    alt={`${project.title} Desktop screen ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {/* 2. Mobile Gallery Screens (vizibile pe telefoane / tablete mici) */}
          {project.mobileGalleryImages && project.mobileGalleryImages.length > 0 && (
            <div className="block md:hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.mobileGalleryImages.map((src, index) => (
                  <div
                    key={index}
                    className="w-full rounded-2xl overflow-hidden border border-white/10 bg-[#050B14] shadow-2xl"
                  >
                    <img
                      src={src}
                      alt={`${project.title} Mobile screen ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}