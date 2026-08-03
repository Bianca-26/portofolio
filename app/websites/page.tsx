import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { websiteProjects } from "@/data/website_projects";

export default function WebsitesPage() {
  return (
    <div className="min-h-screen bg-[#040A14] text-white flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-5xl w-full mx-auto px-6 pt-28 md:pt-32 pb-24">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Website Designs
        </h1>

        <div className="space-y-12">
          {websiteProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}