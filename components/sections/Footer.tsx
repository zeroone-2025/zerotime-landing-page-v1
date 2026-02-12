"use client";

import { Mail, Github, Instagram } from "lucide-react";
import Link from "next/link";
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

const services = [
  { label: "알리미", href: "/alarm" },
  { label: "친해지길 바래", href: "/chinba" },
  { label: "플로우", href: "/flow" },
  { label: "멘토", href: "/mentor" },
];

const company = [
  { label: "팀 소개", href: "/team" },
  { label: "서비스 소개", href: "/" },
];

const legal = [
  { label: "개인정보처리방침", href: "/privacy" },
  { label: "이용약관", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <LogoSymbol className="w-8 h-8 text-white" />
              <span className="text-white font-bold text-lg">ZeroTime</span>
            </div>
            <p className="text-sm">
              학생들의 시간을 아껴주는 서비스
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">서비스</h4>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="hover:text-white transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">회사</h4>
            <ul className="space-y-2 text-sm">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">법적 고지</h4>
            <ul className="space-y-2 text-sm">
              {legal.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-sm">
          © {new Date().getFullYear()} ZeroTime. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
