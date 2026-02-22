"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";

const navigation = [
  { name: "제로타임", href: "/" },
  { name: "알리미", href: "/alarm" },
  { name: "친해지길 바래", href: "/chinba" },
  { name: "플로우", href: "/flow" },
  { name: "팀 소개", href: "/team" },
  { name: "선배 모집중", href: "/mentor" },
];

const serviceItems = [
  { name: "알리미", href: "/alarm" },
  { name: "친해지길 바래", href: "/chinba" },
  { name: "플로우", href: "/flow" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-8 w-auto text-gray-900" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Group 1: ZeroTime with hover dropdown */}
            <div className="relative group">
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                제로타임
              </Link>
              <div className="absolute left-0 top-full mt-2 w-44 rounded-xl bg-white border border-gray-200 shadow-lg p-2 opacity-0 translate-y-1 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto before:absolute before:-top-2 before:left-0 before:right-0 before:h-2 before:content-[''] before:bg-transparent">
                {serviceItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <span className="h-6 w-px bg-gray-200" aria-hidden="true" />

            {/* Group 2: Services */}
            <div className="flex items-center gap-6">
              {serviceItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <span className="h-6 w-px bg-gray-200" aria-hidden="true" />

            {/* Group 3: Team */}
            <Link
              href="/team"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              팀 소개
            </Link>

            <span className="h-6 w-px bg-gray-200" aria-hidden="true" />

            {/* Group 4: Mentor */}
            <Link
              href="/mentor"
              className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 font-bold"
            >
              선배 모집중
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden rounded-md p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
