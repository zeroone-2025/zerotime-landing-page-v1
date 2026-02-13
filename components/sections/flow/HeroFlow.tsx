"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroFlow() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Subtle animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-100 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-amber-100 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
          지역 취업,
          <br />
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
              선배가 길이 됩니다
            </span>
            {/* Animated underline */}
            <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-orange-200 to-amber-200 -z-10 animate-pulse" />
          </span>
        </h1>

        {/* Sub copy */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
          같은 학교, 비슷한 스펙의 선배는 이미 지역에서 일하고 있어요.
          <br />
          그 경로를 보고, 물어보고, 나만의 커리어를 설계하세요.
        </p>

        {/* CTA Button */}
        <Link href="https://zerotime.kr" target="_blank">
          <Button
            size="lg"
            className="h-14 px-10 text-base bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 shadow-lg hover:shadow-xl rounded-xl font-semibold hover:scale-105 transition-all duration-300"
          >
            플로우 시작하기
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
