"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroTeam() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Subtle animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-purple-100 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-20">
        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
          상상이 현실이 되는 시작점,
          <br />
          <span className="relative inline-block mt-4">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              ZeroOne
            </span>
            {/* Animated underline */}
            <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-indigo-200 to-purple-200 -z-10 animate-pulse" />
          </span>
        </h1>

        {/* Sub copy */}
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed">
          상상(0)을 현실(1)로 만드는
          <br />
          <span className="font-semibold text-gray-900">세상에 없던 1을 만드는</span>
        </p>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center mx-auto">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
