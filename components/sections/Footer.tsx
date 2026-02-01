"use client";

import { Mail, Github, Instagram } from "lucide-react";
import Image from "next/image";
import LogoSymbol from "@/components/ui/LogoSymbol";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/zeroone-2025",
    label: "GitHub",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/zerotime_official/",
    label: "Instagram",
  },
  { icon: Mail, href: "mailto:zeroone012025@gmail.com", label: "Email" },
];

const footerLinks = [
  { label: "이용약관", href: "#" },
  { label: "개인정보처리방침", href: "/privacy" },
  { label: "문의하기", href: "mailto:zeroone012025@gmail.com" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <LogoSymbol className="w-8 h-8 text-white" />
              <span className="text-white font-bold text-lg">ZeroOne</span>
            </div>
            <p className="text-sm text-center md:text-left">
              © {new Date().getFullYear()} ZeroOne. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm hover:text-white transition-colors"
                {...(link.href.startsWith("/") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
