"use client";

import React from "react";
import { Button } from "@heroui/react";

export default function CTASection() {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-[#050505] flex flex-col items-center justify-center text-center px-6">
      
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      
      {/* Grid background effect */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, #3b82f6 0%, transparent 70%), 
                            linear-gradient(to right, #1f2937 1px, transparent 1px), 
                            linear-gradient(to bottom, #1f2937 1px, transparent 1px)`,
          backgroundSize: '100% 100%, 40px 40px, 40px 40px'
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            suppressHydrationWarning
            className="absolute w-1 h-1 bg-indigo-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatParticle ${2.5 + Math.random() * 2}s ease-out forwards`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight animate-fade-in-up">
          Your next role is<br />already <span className="animate-glow-text">looking for you</span>
        </h2>
        <p className="text-gray-400 mb-10 text-lg animate-fade-in-up delay-100">
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </p>
        <div className="flex items-center gap-4 justify-center animate-fade-in-up delay-200">
          <Button className="bg-white text-black font-medium h-12 px-8 rounded-xl hover:bg-gray-100 transition-smooth hover-lift hover:shadow-lg hover:shadow-white/30">
            Create a free account
          </Button>
          <Button className="bg-[#111111] border border-white/10 text-white h-12 px-8 rounded-xl hover:bg-[#161616] transition-smooth hover-lift hover:shadow-lg hover:shadow-indigo-500/30 hover:border-indigo-500/50">
            View pricing
          </Button>
        </div>
      </div>
    </section>
  );
}