import React from "react";
import { Briefcase, Building2, Users, Star } from "lucide-react";
import { manrope } from "@/app/layout";

export default function StatsSection() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full px-6 py-24 min-h-[700px] overflow-hidden">
      
      {/* Starry background pattern injected via inline styles for simplicity */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(2px 2px at 20px 30px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 50px 160px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 40px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 130px 80px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 160px 120px, #ffffff, rgba(0,0,0,0))
          `,
          backgroundSize: '200px 200px',
        }}
      />

      {/* Glowing Earth Background Effect */}
      <div className="absolute bottom-0 flex justify-center w-full h-[600px] max-w-[1200px] -translate-x-1/2 left-1/2 pointer-events-none">
        <div className="absolute top-20 w-[150%] md:w-[120%] h-[800px] bg-[#2a3b8c] rounded-[100%] blur-[80px] opacity-40" />
        <div className="absolute top-40 w-[200%] md:w-[140%] h-[1000px] bg-gradient-to-b from-[#1c2763] to-[#050505] rounded-[100%] border-t border-[#4a63e6] shadow-[0_-20px_80px_rgba(42,59,140,0.8)] opacity-90" />
        <div className="absolute top-40 w-full h-[1000px] bg-gradient-to-b from-transparent via-[#050505] to-[#050505] opacity-80 z-0" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto mt-20">
        
        <h2 className={` ${manrope.className} mb-16 text-3xl font-normal tracking-tight text-center text-gray-300 md:text-4xl lg:text-5xl leading-tight`}>
          Assisting over <span className="font-medium text-white">15,000 job seekers</span><br className="hidden md:block" />
          find their dream positions.
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
          
          <StatCard icon={<Briefcase size={20} />} value="50K" label="Active Jobs" />
          <StatCard icon={<Building2 size={20} />} value="12K" label="Companies" />
          <StatCard icon={<Users size={20} />} value="2M" label="Job Seekers" />
          <StatCard icon={<Star size={20} />} value="97%" label="Satisfaction Rate" />

        </div>
      </div>
    </section>
  );
}

// Sub-component for the individual stat boxes to keep the code DRY
function StatCard({ icon, value, label }) {
  return (
    <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 md:p-8 shadow-2xl hover:bg-[#161616] transition-colors duration-300">
      <div className="mb-10 text-gray-400">
        {icon}
      </div>
      <div className="mb-2 text-4xl font-semibold tracking-tight text-white md:text-5xl">{value}</div>
      <div className="text-sm font-medium text-gray-400">{label}</div>
    </div>
  );
}