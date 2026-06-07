"use client";
import { Button, Chip } from "@heroui/react";
import { MapPin, Briefcase, CircleDollarSign, ArrowRight } from "lucide-react";

// Mock data based on the provided design
const jobData = [
  {
    "id": "job-001",
    "title": "Frontend Developer",
    "description": "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    "location": "New York, USA",
    "type": "Hybrid",
    "salary": "€25–€40/hour"
  },
  {
    "id": "job-002",
    "title": "Frontend Developer",
    "description": "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    "location": "New York, USA",
    "type": "Hybrid",
    "salary": "€25–€40/hour"
  },
  {
    "id": "job-003",
    "title": "Frontend Developer",
    "description": "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    "location": "New York, USA",
    "type": "Hybrid",
    "salary": "€25–€40/hour"
  },
  {
    "id": "job-004",
    "title": "Frontend Developer",
    "description": "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    "location": "New York, USA",
    "type": "Hybrid",
    "salary": "€25–€40/hour"
  },
  {
    "id": "job-005",
    "title": "Frontend Developer",
    "description": "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    "location": "New York, USA",
    "type": "Hybrid",
    "salary": "€25–€40/hour"
  },
  {
    "id": "job-006",
    "title": "Frontend Developer",
    "description": "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    "location": "New York, USA",
    "type": "Hybrid",
    "salary": "€25–€40/hour"
  }
]

export default function JobDiscoverySection() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full px-6 py-24 bg-[#050505] overflow-hidden">

      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 text-center animate-fade-in-up">
        <div className="flex items-center gap-3 mb-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">
          <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm animate-pulse" />
          Smart Job Discovery
          <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm animate-pulse" style={{ animationDelay: '0.3s' }} />
        </div>
        <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
          The roles you&apos;d never<br />find by <span className="animate-glow-text">searching</span>
        </h2>
      </div>

      {/* Job Cards Grid */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {jobData.map((job, index) => (
          <div
            key={index}
            className="flex flex-col p-6 transition-smooth duration-300 border bg-[#111111] border-white/5 rounded-2xl hover:bg-[#161616] hover:border-indigo-500/50 hover-lift hover:shadow-lg hover:shadow-indigo-500/30 group animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="mb-3 text-xl font-medium text-white transition-smooth group-hover:text-indigo-400">{job.title}</h3>

            <p className="mb-6 text-sm leading-relaxed text-gray-400 transition-smooth group-hover:text-gray-300">
              {job.description}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              <Chip
                variant="flat"
                className={{
                  base: "bg-white/5 border border-white/10 px-1 transition-smooth group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10",
                  content: "text-gray-300 text-xs font-medium flex items-center gap-1.5",
                }}
              >
                <MapPin size={12} className="text-fuchsia-400 group-hover:text-indigo-400 transition-smooth" />
                {job.location}
              </Chip>

              <Chip
                variant="flat"
                className={{
                  base: "bg-white/5 border border-white/10 px-1 transition-smooth group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10",
                  content: "text-gray-300 text-xs font-medium flex items-center gap-1.5"
                }}
              >
                <Briefcase size={12} className="text-fuchsia-400 group-hover:text-indigo-400 transition-smooth" />
                {job.type}
              </Chip>

              <Chip
                variant="flat"
                className={{
                  base: "bg-white/5 border border-white/10 px-1 mt-1 transition-smooth group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10",
                  content: "text-gray-300 text-xs font-medium flex items-center gap-1.5"
                }}
              >
                <CircleDollarSign size={12} className="text-fuchsia-400 group-hover:text-indigo-400 transition-smooth" />
                {job.salary}
              </Chip>
            </div>

            {/* Action Link */}
            <div className="mt-auto">
              <button className="flex items-center gap-2 text-sm font-medium text-white transition-smooth group-hover:text-indigo-400">
                Apply Now
                <ArrowRight size={16} className="transition-smooth group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Action Button */}
      <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <Button
          className="px-8 py-6 text-base font-medium text-black bg-white rounded-xl hover:bg-gray-100 transition-smooth hover-lift hover:shadow-lg"
        >
          View all open jobs
        </Button>
      </div>

    </section>
  );
}