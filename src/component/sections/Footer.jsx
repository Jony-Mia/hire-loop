"use client";

import React from "react";
import { LogoLinkedin as Linkedin, MapPin as Pin } from "@gravity-ui/icons";
import Link from "next/link";
import Logo from "@/assets/logo.png"
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] px-6 py-20 border-t border-white/5 relative overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">

        {/* Brand Column */}
        <div className="lg:col-span-2 animate-fade-in-up">
          <div className="flex items-center text-2xl font-bold tracking-tighter mb-6 hover-scale transition-smooth">
            <Image src={Logo} alt="Hire loop logo" />
          </div>
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed mb-8 transition-smooth hover:text-gray-300">
            The AI-native career platform. Built for people who take their work seriously.
          </p>
          <div className="flex gap-4">

            <Link href="/" className="p-2 bg-[#111111] rounded-lg text-gray-400 hover:text-indigo-400 transition-smooth hover-lift border border-white/5 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/20">
              <Pin size={18} />
            </Link>
            <Link href="/" className="p-2 bg-[#111111] rounded-lg text-gray-400 hover:text-indigo-400 transition-smooth hover-lift border border-white/5 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/20">
              <Linkedin size={18} />
            </Link>
          </div>
        </div>

        {/* Links Columns */}
        <FooterLinkColumn
          title="Product"
          links={["Job discovery", "Worker AI", "Companies", "Salary data"]}
          delay={0}
        />
        <FooterLinkColumn
          title="Navigations"
          links={["Help center", "Career library", "Contact"]}
          delay={1}
        />
        <FooterLinkColumn
          title="Resources"
          links={["Brand Guideline", "Newsroom"]}
          delay={2}
        />
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <p className="transition-smooth hover:text-gray-400">Copyright 2024 — Hireloop</p>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-white transition-smooth hover-lift">Terms & Policy</Link>
          <Link href="/" className="hover:text-white transition-smooth hover-lift">Privacy Guideline</Link>
        </div>
      </div>
    </footer>
  );
}

// Sub-component for lists
function FooterLinkColumn({ title, links, delay = 0 }) {
  return (
    <div className="animate-fade-in-up" style={{ animationDelay: `${delay * 0.1}s` }}>
      <h4 className="text-indigo-500 font-medium text-sm mb-6 transition-smooth hover:text-indigo-400">{title}</h4>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={link} className="animate-fade-in-up" style={{ animationDelay: `${delay * 0.1 + index * 0.08}s` }}>
            <Link href="/" className="text-gray-400 text-sm hover:text-white transition-smooth hover-lift hover:text-indigo-400">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}