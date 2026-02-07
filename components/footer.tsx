"use client";

import Link from "next/link";
import { Twitter, Linkedin, Github, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white overflow-hidden">
      {/* Corner Gradient Glow */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-pink-500/30 via-purple-500/20 to-transparent blur-3xl" />

      {/* Main Container */}
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* Top Divider */}
        <div className="mb-12 h-px w-full bg-white/10" />

        {/* Center Logo */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2">
              <Image
                        src="/logo.svg"
                        alt="Metropolitan Logo"
                        width={172}
                        height={172}
                        className="object-contain" >
                      </Image>
          </div>
        </div>

        {/* Links */}
        <nav className="mb-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/70 font-jost">
          <Link href="#" className="hover:text-white transition">
            Products
          </Link>

          <Link href="#" className="hover:text-white transition">
            Studio
          </Link>

          <Link href="#" className="hover:text-white transition">
            Clients
          </Link>

          <Link href="#" className="hover:text-white transition">
            Pricing
          </Link>

          <Link href="#" className="hover:text-white transition">
            Blog
          </Link>

          <Link href="#" className="hover:text-white transition">
            Privacy
          </Link>

          <Link href="#" className="hover:text-white transition">
            Terms
          </Link>
        </nav>

        {/* Bottom Divider */}
        <div className="mb-8 h-px w-full border-t border-dashed border-white/10" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-white/60 font-jost">
          {/* Copyright */}
          <p>© Scalezy 2026. All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-white transition">
              <Twitter size={18} />
            </Link>

            <Link href="#" className="hover:text-white transition">
              <Linkedin size={18} />
            </Link>

            <Link href="#" className="hover:text-white transition">
              <Github size={18} />
            </Link>

            <Link href="#" className="hover:text-white transition">
              <Facebook size={18} />
            </Link>

            <Link href="#" className="hover:text-white transition">
              <Instagram size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
