import { websiteProjects } from "@/data/website_projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToGalleryButton from "@/components/ScrollToGalleryButton";
import Warning from "@/components/Warning";
import Image from "next/image";

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
          <div className="flex flex-col md:flex-row md:items-center justify-between items-start gap-6">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              {project.title}
            </h1>

            {project.badge && (
              <span className="self-start md:self-auto shrink-0 px-6 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full bg-[#E58C65]/10 text-[#E58C65] border border-[#E58C65]/20 shadow-[0_0_15px_rgba(229,140,101,0.15)]">
                {project.badge}
              </span>
            )}
          </div>

          {/* CARD PENTRU DESCRIERE, TOOLS ȘI BUTON */}
          <div className="mt-6 md:mt-14 p-6 md:p-8 rounded-2xl bg-[#172A3A]/25 border border-white/5 space-y-6">
            <p className="text-gray-300 text-base md:text-lg w-full max-w-none leading-relaxed">
              {project.fullDescription}
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

        {/* ========================================================= */}
        {/* COVER SECTION RESPONSIVE (DESKTOP & MOBILE)               */}
        {/* ========================================================= */}

        {/* 1. Desktop Cover */}
        {project.desktopCoverImage && (
          <div className="hidden md:block w-full rounded-2xl overflow-hidden border border-white/10 bg-[#050B14] shadow-2xl mb-20 md:mb-24">
            <Image
              src={project.desktopCoverImage}
              alt={`${project.title} Desktop Cover`}
              width={0}
              height={0}
              sizes="100vw"
              priority={true}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* 2. Mobile Covers */}
        {project.mobileCoverImages && project.mobileCoverImages.length > 0 && (
          <div className="block md:hidden mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.mobileCoverImages.map((src, index) => (
                <div
                  key={index}
                  className="w-full rounded-2xl overflow-hidden border border-white/10 bg-[#050B14] shadow-xl"
                >
                  <Image
                    src={src}
                    alt={`${project.title} Mobile Cover ${index + 1}`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority={true}
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
                {/* CONTEXT */}
                {project.challenge.context && (
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#82C3F5] mb-2">
                      Context
                    </h3>
                    <div className="space-y-3">
                      {Array.isArray(project.challenge.context) ? (
                        project.challenge.context.map((p, idx) => (
                          <p key={idx} className="text-gray-300 text-base md:text-lg leading-relaxed">
                            {p}
                          </p>
                        ))
                      ) : (
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                          {project.challenge.context}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* OBJECTIVE */}
                {project.challenge.objective && (
                  <div className="pt-2">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#82C3F5] mb-2">
                      Objective
                    </h3>
                    <div className="space-y-3">
                      {Array.isArray(project.challenge.objective) ? (
                        project.challenge.objective.map((p, idx) => (
                          <p key={idx} className="text-gray-300 text-base md:text-lg leading-relaxed">
                            {p}
                          </p>
                        ))
                      ) : (
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                          {project.challenge.objective}
                        </p>
                      )}
                    </div>
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
            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                3. The Solution
              </h2>
              
              <div className="pl-3 md:pl-6 border-l-2 border-white/10 space-y-10">
                {/* Textul soluției */}
                <div className="space-y-4">
                  {Array.isArray(project.solution) ? (
                    project.solution.map((paragraph, index) => (
                      <p key={index} className="text-gray-300 text-base md:text-lg leading-relaxed">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      {project.solution}
                    </p>
                  )}
                </div>

                {/* Sub-secțiune: Design System */}
                {project.designSystem && (
                  <div className="space-y-12 pt-4">

                    {/* A. CULORI (PERFECT ALINIATE, FĂRĂ ICONIȚĂ) */}
                    {project.designSystem.colors && project.designSystem.colors.length > 0 && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-[#E58C65] shadow-[0_0_8px_#E58C65]" />
                          <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#82C3F5]">
                            Color Palette & Tokens
                          </h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
                          {project.designSystem.colors.map((color, idx) => (
                            <div
                              key={idx}
                              className="group p-5 rounded-2xl bg-[#0d1c2b]/50 backdrop-blur-md border border-white/10 hover:border-[#82C3F5]/50 hover:bg-[#122538]/70 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full"
                              style={{
                                boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.7)",
                              }}
                            >
                              <div
                                className="w-full h-24 rounded-xl border border-white/20 transition-all duration-300 group-hover:scale-[1.02] shrink-0"
                                style={{
                                  backgroundColor: color.hex,
                                  boxShadow: `0 8px 24px -6px ${color.hex}55`,
                                }}
                              />

                              <div className="pt-4 flex flex-col flex-1 justify-between">
                                <div className="flex items-center h-6">
                                  <span className="text-xs uppercase font-mono font-semibold tracking-wider text-[#82C3F5] group-hover:text-white transition-colors duration-200">
                                    {color.hex}
                                  </span>
                                </div>

                                <p className="text-base font-bold text-white tracking-tight mt-1.5 h-6 truncate">
                                  {color.name}
                                </p>

                                <div className="mt-1 min-h-[3.75rem] flex items-start">
                                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                                    {color.role || ""}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* B. TIPOGRAFIE (FĂRĂ LINIE ÎNTRE BADGE-URI ȘI EXEMPLU) */}
                    {project.designSystem.typography && project.designSystem.typography.length > 0 && (
                      <div className="space-y-4">
                        {project.designSystem.typography.map((font, idx) => {
                          const fontQuery = font.name.trim().replace(/\s+/g, "+");
                          return (
                            <link
                              key={idx}
                              rel="stylesheet"
                              href={`https://fonts.googleapis.com/css2?family=${fontQuery}:wght@400;600;700&display=swap`}
                            />
                          );
                        })}

                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-[#82C3F5] shadow-[0_0_8px_#82C3F5]" />
                          <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#82C3F5]">
                            Typography System
                          </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {project.designSystem.typography.map((font, idx) => (
                            <div
                              key={idx}
                              className="group p-6 md:p-7 rounded-2xl bg-[#0d1c2b]/50 backdrop-blur-md border border-white/10 hover:border-[#82C3F5]/40 hover:bg-[#122538]/70 hover:-translate-y-1.5 hover:shadow-[0_12px_35px_-10px_rgba(130,195,245,0.15)] transition-all duration-300 space-y-5"
                            >
                              {/* Antet */}
                              <div className="border-b border-white/10 pb-3">
                                <span
                                  className="text-2xl font-bold text-white tracking-tight block"
                                  style={{ fontFamily: `'${font.name}', sans-serif` }}
                                >
                                  {font.name}
                                </span>
                                <span className="text-[11px] uppercase tracking-widest text-[#E58C65] font-mono font-medium">
                                  {font.type}
                                </span>
                              </div>

                              {/* Badge-uri greutăți */}
                              {font.weights && (
                                <div className="flex flex-wrap gap-2">
                                  {font.weights.map((w, wIdx) => (
                                    <span
                                      key={wIdx}
                                      className="px-2.5 py-1 text-xs rounded-md bg-[#172A3A]/80 border border-white/10 text-gray-200 font-mono group-hover:border-[#82C3F5]/30 group-hover:text-white transition-all duration-200"
                                    >
                                      {w}
                                    </span>
                                  ))}
                                </div>
                              )}

                              {/* Text demonstrativ (fără border-t) */}
                              {font.sampleText && (
                                <div className="pt-1">
                                  <p
                                    className="text-base md:text-lg text-gray-200 leading-snug group-hover:text-white transition-colors duration-200"
                                    style={{ fontFamily: `'${font.name}', sans-serif` }}
                                  >
                                    {font.sampleText}
                                  </p>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {/* C. GRID SYSTEM */}
                    {project.designSystem.gridImage && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-[#E58C65] shadow-[0_0_8px_#E58C65]" />
                          <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#82C3F5]">
                            Structure & Grid System
                          </h3>
                        </div>

                        <div className="group rounded-2xl overflow-hidden border border-white/10 bg-[#050B14] hover:border-[#82C3F5]/40 hover:shadow-[0_16px_40px_-10px_rgba(0,0,0,0.8)] transition-all duration-300">
                          <div className="overflow-hidden">
                            <Image
                              src={project.designSystem.gridImage}
                              alt={`${project.title} Grid System`}
                              width={0}
                              height={0}
                              sizes="100vw"
                              className="w-full h-auto object-cover group-hover:scale-[1.015] transition-transform duration-500 ease-out"
                            />
                          </div>
                        </div>

                        {project.designSystem.gridDescription && (
                          <p className="text-sm text-gray-400 leading-relaxed pl-1">
                            {project.designSystem.gridDescription}
                          </p>
                        )}
                      </div>
                    )}

                  </div>
                )}
              </div>
            </section>
          )}

          {/* 4. ADDITIONAL NOTES */}
          {project.additionalNotes && (
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                4. Additional Notes
              </h2>
              <div className="pl-3 md:pl-6 border-l-2 border-[#E58C65]/30 space-y-4">
                {Array.isArray(project.additionalNotes) ? (
                  project.additionalNotes.map((note, index) => (
                    <p key={index} className="text-gray-300 text-base md:text-lg leading-relaxed">
                      {note}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    {project.additionalNotes}
                  </p>
                )}
              </div>
            </section>
          )}
        </div>

        {/* ========================================================= */}
        {/* GALERIE SCREENS WEBSITE (RESPONSIVE DESKTOP & MOBILE)     */}
        {/* ========================================================= */}
        <section id="gallery" className="space-y-8 scroll-mt-28">
          {/* 1. Desktop Gallery Screens */}
          {project.desktopGalleryImages && project.desktopGalleryImages.length > 0 && (
            <div className="hidden md:block w-screen relative left-1/2 -translate-x-1/2 max-w-[92vw] xl:max-w-7xl px-4 md:px-8 space-y-12">
              {project.desktopGalleryImages.map((src, index) => (
                <div
                  key={index}
                  className="w-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-[#050B14] shadow-2xl"
                >
                  <Image
                    src={src}
                    alt={`${project.title} Desktop screen ${index + 1}`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {/* 2. Mobile Gallery Screens */}
          {project.mobileGalleryImages && project.mobileGalleryImages.length > 0 && (
            <div className="block md:hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.mobileGalleryImages.map((src, index) => (
                  <div
                    key={index}
                    className="w-full rounded-2xl overflow-hidden border border-white/10 bg-[#050B14] shadow-2xl"
                  >
                    <Image
                      src={src}
                      alt={`${project.title} Mobile screen ${index + 1}`}
                      width={0}
                      height={0}
                      sizes="100vw"
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