"use client";

import React, { useState } from "react";
import { Button } from "@heroui/react";
import { Plus, ArrowRight, Check, Zap } from "lucide-react";

const pricingData = [
  {
    name: "Starter",
    priceMonthly: 0,
    priceYearly: 0,
    features: ["Daily AI match brief (top 5)", "Verified salary bands", "Company insight dashboards", "1-click apply, unlimited"]
  },
  {
    name: "Growth",
    priceMonthly: 17,
    priceYearly: 12,
    features: ["Daily AI match brief (top 5)", "Verified salary bands", "Company insight dashboards", "1-click apply, unlimited"]
  },
  {
    name: "Premium",
    priceMonthly: 99,
    priceYearly: 75,
    features: ["Everything in Pro", "Multi-profile career portfolios", "Shared talent rooms", "Recruiter view (read-only)"]
  }
];

export default function PricingSections() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-center w-full px-6 py-24 bg-[#050505] overflow-hidden">

      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2.5s' }} />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Header */}
      <div className="flex flex-col items-center mb-12 text-center animate-fade-in-up">
        <div className="flex items-center gap-3 mb-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">
          <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm animate-pulse" />
          Pricing
          <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm animate-pulse" style={{ animationDelay: '0.3s' }} />
        </div>
        <h2 className="mb-8 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Pay for the <span className="animate-glow-text">leverage</span>,<br />not the listings
        </h2>

        {/* Toggle Switch */}
        <div className="flex items-center gap-1 p-1.5 border border-white/10 rounded-full bg-gradient-to-r from-white/5 to-white/5 backdrop-blur transition-smooth hover:border-indigo-500/30">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all ${!isYearly
                ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-500/50"
                : "text-gray-400 hover:text-white"
              }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all flex items-center gap-2 relative ${isYearly
                ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-500/50"
                : "text-gray-400 hover:text-white"
              }`}
          >
            Yearly
            {isYearly && (
              <span className="px-2 py-0.5 bg-gradient-to-r from-green-400 to-emerald-400 text-black text-[10px] font-bold rounded-full animate-bounce">SAVE 25%</span>
            )}
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 relative z-10">
        {pricingData.map((plan, index) => {
          const isPopular = index === 1;
          return (
            <div key={plan.name} className={`flex flex-col p-8 rounded-3xl transition-smooth animate-fade-in-up group relative overflow-hidden ${isPopular
                ? "border-2 border-indigo-500 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 hover:from-indigo-600/20 hover:to-purple-600/20 hover-lift hover:shadow-2xl hover:shadow-indigo-500/50"
                : "border border-white/10 bg-[#111111]/50 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/20 hover-lift hover:bg-[#111111]"
              }`} style={{ animationDelay: `${index * 0.12}s` }}>

              {/* Popular Badge */}
              {isPopular && (
                <div className="absolute -top-1 mt-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 shadow-lg shadow-indigo-500/50">
                  <Zap size={12} /> MOST POPULAR
                </div>
              )}

              {/* Inner glow effect for popular */}
              {isPopular && (
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none" />
              )}

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <h3 className={`text-xl font-bold transition-smooth ${isPopular ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400" : "text-white group-hover:text-indigo-400"
                    }`}>{plan.name}</h3>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white animate-count-up">${isYearly ? plan.priceYearly : plan.priceMonthly}</span>
                    <span className="text-gray-400 text-sm">/month</span>
                  </div>
                  {isYearly && plan.priceYearly < plan.priceMonthly && (
                    <p className="text-xs text-indigo-400 font-medium mt-2">Save ${(plan.priceMonthly - plan.priceYearly) * 12}/year</p>
                  )}
                </div>

                <p className="mb-6 text-sm font-medium text-gray-400 transition-smooth group-hover:text-gray-300">Includes:</p>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400 transition-smooth group-hover:text-gray-300">
                      <Check size={16} className={`mt-0.5 flex-shrink-0 ${isPopular ? "text-indigo-400" : "text-indigo-400/60 group-hover:text-indigo-400"
                        }`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className={`w-full py-6 text-sm font-bold rounded-xl transition-smooth hover-lift hover:shadow-lg flex items-center justify-between ${isPopular
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 hover:shadow-indigo-500/50"
                    : "bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-indigo-500/50 hover:shadow-indigo-500/20"
                  }`}>
                  Get Started <ArrowRight size={16} className="transition-smooth group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}