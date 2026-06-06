"use client";

import React from "react";
import { LogoLinkedin as Linkedin, MapPin as Pin } from "@gravity-ui/icons";
import Link from "next/link";
import Logo from "@/assets/logo.png"
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] px-6 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        
        {/* Brand Column */}
        <div className="lg:col-span-2">
          <div className="flex items-center text-2xl font-bold tracking-tighter mb-6">
           <Image src={Logo} alt="Hire loop logo" />
          </div>
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed mb-8">
            The AI-native career platform. Built for people who take their work seriously.
          </p>
          <div className="flex gap-4">
            
            <Link href="/" className="p-2 bg-[/111111] rounded-lg text-gray-400 hover:text-white transition-colors border border-white/5">
              <Pin size={18} />
            </Link>
            <Link href="/" className="p-2 bg-[/111111] rounded-lg text-gray-400 hover:text-white transition-colors border border-white/5">
              <Linkedin size={18} />
            </Link>
          </div>
        </div>

        {/* Links Columns */}
        <FooterLinkColumn 
          title="Product" 
          links={["Job discovery", "Worker AI", "Companies", "Salary data"]} 
        />
        <FooterLinkColumn 
          title="Navigations" 
          links={["Help center", "Career library", "Contact"]} 
        />
        <FooterLinkColumn 
          title="Resources" 
          links={["Brand Guideline", "Newsroom"]} 
        />
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>Copyright 2024 — Programming Hero</p>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-white transition-colors">Terms & Policy</Link>
          <Link href="/" className="hover:text-white transition-colors">Privacy Guideline</Link>
        </div>
      </div>
    </footer>
  );
}

// Sub-component for lists
function FooterLinkColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-indigo-500 font-medium text-sm mb-6">{title}</h4>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link}>
            <Link href="/" className="text-gray-400 text-sm hover:text-white transition-colors">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}