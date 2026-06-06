"use client";

import React, { useState } from "react";
import { Button } from "@heroui/react";
import { Plus, ArrowRight } from "lucide-react";

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
    <section className="relative flex flex-col items-center justify-center w-full px-6 py-24 bg-[#050505]">
      
      {/* Header */}
      <div className="flex flex-col items-center mb-12 text-center">
        <div className="flex items-center gap-3 mb-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">
          <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm" />
          Pricing
          <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm" />
        </div>
        <h2 className="mb-8 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Pay for the leverage,<br />not the listings
        </h2>

        {/* Toggle Switch */}
        <div className="flex items-center p-1 border rounded-full bg-[#111111] border-white/10">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${!isYearly ? "bg-white text-black" : "text-gray-400"}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-6 py-2 text-sm font-medium rounded-full transition-all flex items-center gap-2 ${isYearly ? "bg-white text-black" : "text-gray-400"}`}
          >
            Yearly <span className="px-2 py-0.5 bg-indigo-500 text-white text-[10px] rounded-full">25%</span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {pricingData.map((plan) => (
          <div key={plan.name} className="flex flex-col p-8 border bg-[#111111] border-white/5 rounded-3xl">
            <div className="flex justify-between items-start mb-8">
              <h3 className="text-xl font-medium text-white">{plan.name}</h3>
              <div className="text-2xl font-semibold text-white">
                ${isYearly ? plan.priceYearly : plan.priceMonthly}<span className="text-sm font-normal text-gray-400">/month</span>
              </div>
            </div>

            <p className="mb-6 text-sm font-medium text-gray-300">Start building your insights hub:</p>
            <ul className="mb-8 space-y-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                  <Plus size={16} className="text-gray-600" /> {feature}
                </li>
              ))}
            </ul>

            <Button className="mt-auto w-full py-6 text-sm font-medium bg-white text-black rounded-xl hover:bg-gray-100 flex items-center justify-between">
              Choose This Plan <ArrowRight size={16} />
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}