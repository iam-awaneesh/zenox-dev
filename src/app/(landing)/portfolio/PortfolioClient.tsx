"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  TrendingUp,
  Layers,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Code2,
  Filter,
} from "lucide-react";
import { allProjects, ProjectItem } from "@/components/sections/Portfolio";

const categories = [
  "All",
  "Web App",
  "Mobile App",
  "E-Commerce",
  "AI & Automation",
  "DevOps & Cloud",
] as const;

export default function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              type="button"
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-primary-600 text-white shadow-md shadow-primary-600/30 scale-105"
                  : "bg-white text-ink-700 border border-slate-200 hover:border-primary-300 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="group rounded-3xl overflow-hidden bg-white shadow-xs hover:shadow-2xl hover:shadow-primary-900/12 hover:-translate-y-2 transition-all duration-300 border border-slate-200/90 flex flex-col justify-between"
          >
            <div>
              {/* Image banner */}
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent" />

                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-primary-700 shadow-xs">
                  {project.category}
                </span>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs font-semibold text-slate-200">{project.client}</span>
                  <div className="flex items-center gap-1.5 bg-emerald-500/95 backdrop-blur px-2.5 py-1 rounded-md text-xs font-bold text-white shadow-xs">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{project.metric} {project.metricLabel}</span>
                  </div>
                </div>
              </div>

              {/* Content info */}
              <div className="p-7">
                <h2 className="font-heading text-xl font-bold text-ink-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm text-ink-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Technologies Deployed:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-7 pt-0 border-t border-slate-100 mt-2">
              <div className="pt-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Production Live</span>
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-600 hover:text-primary-700 group-hover:translate-x-1 transition-all"
                >
                  <span>Build similar →</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
