"use client";

import {
  BriefcaseBusiness,
  Building2,
  Users,
  Star,
} from "lucide-react";

const stats = [
  {
    icon: BriefcaseBusiness,
    value: "50K",
    label: "Active Jobs",
  },
  {
    icon: Building2,
    value: "12K",
    label: "Companies",
  },
  {
    icon: Users,
    value: "2M",
    label: "Job Seekers",
  },
  {
    icon: Star,
    value: "97%",
    label: "Satisfaction Rate",
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      {/* Stars */}
      <div
        className="
          absolute inset-0 opacity-30
          bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
          bg-[length:40px_40px]
        "
      />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/30 blur-[120px]" />

      {/* Globe */}
      <div className="absolute left-1/2 top-[-260px] h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-400/30 via-indigo-600/20 to-transparent shadow-[0_0_120px_rgba(99,102,241,0.7)]">
        {/* Continents */}
        <div className="absolute top-[280px] left-[140px] h-28 w-44 rounded-full bg-white/15 blur-sm" />
        <div className="absolute top-[220px] right-[180px] h-24 w-36 rounded-full bg-white/15 blur-sm" />
        <div className="absolute bottom-[220px] left-[220px] h-20 w-32 rounded-full bg-white/10 blur-sm" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-medium leading-tight text-white md:text-5xl">
            Assisting over 15,000 job seekers
            <br />
            find their dream positions.
          </h2>
        </div>

        {/* Stats Cards */}
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  min-h-[180px]
                  rounded-3xl
                  border border-white/10
                  bg-gradient-to-br
                  from-zinc-950
                  via-zinc-950
                  to-zinc-900
                  p-6
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-indigo-500/40
                  hover:shadow-[0_0_30px_rgba(99,102,241,0.25)]
                "
              >
                <Icon
                  size={18}
                  className="mb-10 text-white/80"
                />

                <h3 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  {item.value}
                </h3>

                <p className="mt-3 text-sm text-zinc-400">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}