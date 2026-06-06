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
    <section className="relative flex flex-col items-center justify-center w-full px-6 py-24 bg-[#050505]">
      
      {/* Section Header */}
      <div className="flex flex-col items-center mb-20 text-center">
        <div className="flex items-center gap-3 mb-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">
          <div className="w-1.5 h-1.5 bg-indigo-600 rounded-sm" />
          Features Job
          <div className="w-1.5 h-1.5 bg-indigo-600 rounded-sm" />
        </div>
        <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Everything you need<br />to succeed
        </h2>
      </div>

      {/* Features Grid */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
        {featuresData.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="flex items-start gap-5 group">
              
              {/* Icon Box */}
              <div className="flex items-center justify-center shrink-0 w-14 h-14 bg-[#111111] border border-white/5 rounded-2xl shadow-lg transition-colors duration-300 group-hover:bg-[#161616]">
                <Icon size={22} className="text-fuchsia-400/90" strokeWidth={1.5} />
              </div>

              {/* Text Content */}
              <div className="flex flex-col pt-1">
                <h3 className="mb-2 text-base font-medium text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
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