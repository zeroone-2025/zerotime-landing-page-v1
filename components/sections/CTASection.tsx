"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div
        className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4" />
          무료로 시작하기
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          지금 바로 시작하세요
        </h2>

        {/* Sub copy */}
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10">
          더 이상 여러 사이트를 돌아다니며 공지를 확인하지 마세요. ZeroTime으로
          스마트한 학교 생활을 시작하세요.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="https://zerotime.kr" target="_blank">
            <Button
              size="lg"
              className="h-14 px-8 text-lg bg-white text-blue-600 hover:bg-gray-100 shadow-lg shadow-black/20 transition-all duration-300 hover:shadow-xl"
            >
              바로 사용해보기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Trust indicators */}
        <p className="mt-8 text-sm text-white/60">
          가입 없이 바로 사용 가능 · 언제든 알림 설정 변경
        </p>
      </div>
    </section>
  );
}
