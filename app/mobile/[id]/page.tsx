import { websiteProjects } from "@/data/website_projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Users, Lightbulb, Sparkles } from "lucide-react";
import ScrollToGalleryButton from "@/components/ScrollToGalleryButton";

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
    <div className="min-h-screen bg-[#040A14] text-white flex flex-col font-sans scroll-smooth">
      <Header />

      <main className="flex-1 max-w-5xl w-full mx-auto px-6 pt-32 md:pt-36 pb-32">
        {/* Buton Înapoi */}
        <Link
          href="/websites"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#82C3F5] transition-colors mb-12"
        >
          ← Back to Websites
        </Link>

        {/* HERO: Titlu + Badge */}
        <header className="mb-8 md:mb-10">
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

          {/* DESCRIERE */}
          <p className="mt-8 md:mt-10 text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>

          {/* TOOLS USED - TEXT ȘI PASTILE MAI MARI */}
          {project.tools && project.tools.length > 0 && (
            <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-3">
              <span className="text-sm md:text-base uppercase tracking-wider text-gray-400 font-semibold mr-1">
                Tools Used:
              </span>
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 text-sm md:text-base font-medium rounded-lg bg-[#172A3A]/60 border border-white/10 text-gray-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          )}

          {/* BUTON SKIP TO GALLERY */}
          <div className="mt-8 md:mt-10">
            <ScrollToGalleryButton />
          </div>
        </header>

        {/* COVER PRINCIPAL */}
        {project.desktopCoverImage && (
          <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-[#050B14] shadow-2xl mb-24 md:mb-32">
            <img
              src={project.desktopCoverImage}
              alt={`${project.title} Desktop Cover`}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* SECȚIUNI STRUCTURATE CASE STUDY (DIRECT PE PAGINĂ) */}
        <div className="space-y-16 md:space-y-20 mb-24 md:mb-32">
          {/* 1. THE CHALLENGE */}
          {project.challenge && (
            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                <Target className="w-7 h-7 text-[#82C3F5]" />
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
                <Users className="w-7 h-7 text-[#82C3F5]" />
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
                <Lightbulb className="w-7 h-7 text-[#82C3F5]" />
                3. The Solution
              </h2>
              <div className="pl-3 md:pl-6 border-l-2 border-white/10">
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </section>
          )}

          {/* 4. KEY TAKEAWAYS / ADDITIONAL NOTES (OPȚIONAL) */}
          {project.additionalNotes && (
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                <Sparkles className="w-7 h-7 text-[#E58C65]" />
                4. Additional Notes & Takeaways
              </h2>
              <div className="pl-3 md:pl-6 border-l-2 border-[#E58C65]/30">
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {project.additionalNotes}
                </p>
              </div>
            </section>
          )}
        </div>

        {/* GALERIE SCREENS WEBSITE */}
        {project.desktopGalleryImages && project.desktopGalleryImages.length > 0 && (
          <section id="gallery" className="space-y-8 scroll-mt-28">
            <h2 className="text-2xl md:text-3xl font-bold">Visual Showcase & Layouts</h2>
            <div className="space-y-12">
              {project.desktopGalleryImages.map((src, index) => (
                <div
                  key={index}
                  className="w-full rounded-2xl overflow-hidden border border-white/10 bg-[#050B14] shadow-2xl"
                >
                  <img
                    src={src}
                    alt={`${project.title} screen ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}