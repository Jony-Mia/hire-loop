"use client";

import React from "react";
import { Button } from "@heroui/react";

export default function CTASection() {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-[#050505] flex flex-col items-center justify-center text-center px-6">
      {/* Grid background effect */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, #3b82f6 0%, transparent 70%), 
                            linear-gradient(to right, #1f2937 1px, transparent 1px), 
                            linear-gradient(to bottom, #1f2937 1px, transparent 1px)`,
          backgroundSize: '100% 100%, 40px 40px, 40px 40px'
        }}
      />
      
      <div className="relative z-10 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
          Your next role is<br />already looking for you
        </h2>
        <p className="text-gray-400 mb-10 text-lg">
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-black font-medium h-12 px-8 rounded-xl hover:bg-gray-100">
            Create a free account
          </Button>
          <Button className="bg-[#111111] border border-white/10 text-white h-12 px-8 rounded-xl hover:bg-[#161616]">
            View pricing
          </Button>
        </div>
      </div>
    </section>
  );
}