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
    <section className="relative flex flex-col items-center justify-center w-full px-6 py-24 bg-[#050505]">
      
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="flex items-center gap-3 mb-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">
          <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm" />
          Smart Job Discovery
          <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm" />
        </div>
        <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
          The roles you&apos;d never<br />find by searching
        </h2>
      </div>

      {/* Job Cards Grid */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobData.map((job, index) => (
          <div
            key={index}
            className="flex flex-col p-6 transition-colors duration-300 border bg-[#111111] border-white/5 rounded-2xl hover:bg-[#161616]"
          >
            <h3 className="mb-3 text-xl font-medium text-white">{job.title}</h3>
            
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              {job.description}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              <Chip
                variant="flat"
                classNames={{
                  base: "bg-white/5 border border-white/10 px-1",
                  content: "text-gray-300 text-xs font-medium flex items-center gap-1.5",
                }}
              >
                <MapPin size={12} className="text-fuchsia-400" />
                {job.location}
              </Chip>
              
              <Chip
                variant="flat"
                classNames={"bg-white/5 border border-white/10 px-1 text-gray-300 text-xs font-medium flex items-center gap-1.5"}
              >
                <Briefcase size={12} className="text-fuchsia-400" />
                {job.type}
              </Chip>
              
              <Chip
                variant="flat"
                classNames={"bg-white/5 border border-white/10 px-1 mt-1 text-gray-300 text-xs font-medium flex items-center gap-1.5"}
              >
                <CircleDollarSign size={12} className="text-fuchsia-400" />
                {job.salary}
              </Chip>
            </div>

            {/* Action Link */}
            <div className="mt-auto">
              <button className="flex items-center gap-2 text-sm font-medium text-white transition-opacity group hover:opacity-80">
                Apply Now 
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Action Button */}
      <div className="mt-16">
        <Button 
          className="px-8 py-6 text-base font-medium text-black bg-white rounded-xl hover:bg-gray-100"
        >
          View all open jobs
        </Button>
      </div>
      
    </section>
  );
}