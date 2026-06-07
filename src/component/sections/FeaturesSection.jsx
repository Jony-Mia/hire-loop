"use client";

import React from "react";
import {
  Search,
  LineChart,
  Building2,
  Bookmark,
  MousePointerClick,
  FileText,
  Hexagon,
  TrendingUp
} from "lucide-react";

// The feature data mapped directly from the design
const featuresData = [
  {
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
    icon: Search,
  },
  {
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently.",
    icon: LineChart,
  },
  {
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring.",
    icon: Building2,
  },
  {
    title: "Saved Jobs",
    description: "Manage apps & favorites on your dashboard.",
    icon: Bookmark,
  },
  {
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process!",
    icon: MousePointerClick,
  },
  {
    title: "Resume Builder",
    description: "Create professional resumes with modern templates.",
    icon: FileText,
  },
  {
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
    icon: Hexagon,
  },
  {
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips.",
    icon: TrendingUp,
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full px-6 py-24 bg-[#050505] overflow-hidden">

      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Section Header */}
      <div className="flex flex-col items-center mb-20 text-center animate-fade-in-up">
        <div className="flex items-center gap-3 mb-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">
          <div className="w-1.5 h-1.5 bg-indigo-600 rounded-sm animate-pulse" />
          Features Job
          <div className="w-1.5 h-1.5 bg-indigo-600 rounded-sm animate-pulse" style={{ animationDelay: '0.3s' }} />
        </div>
        <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Everything you need<br />to <span className="animate-glow-text">succeed</span>
        </h2>
      </div>

      {/* Features Grid */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4 relative z-10">
        {featuresData.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="flex items-start gap-5 group animate-fade-in-up" style={{ animationDelay: `${index * 0.08}s` }}>

              {/* Icon Box */}
              <div className="flex items-center justify-center shrink-0 w-14 h-14 bg-[#111111] border border-white/5 rounded-2xl shadow-lg transition-smooth duration-300 group-hover:bg-[#161616] group-hover:border-indigo-500/50 group-hover:shadow-lg group-hover:shadow-indigo-500/30">
                <Icon size={22} className="text-fuchsia-400/90 transition-smooth group-hover:text-indigo-400 group-hover:animate-float" strokeWidth={1.5} />
              </div>

              {/* Text Content */}
              <div className="flex flex-col pt-1">
                <h3 className="mb-2 text-base font-medium text-white transition-smooth group-hover:text-indigo-400">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400 transition-smooth group-hover:text-gray-300">
                  {feature.description}
                </p>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}