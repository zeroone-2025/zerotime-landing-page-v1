"use client";

import Logo from "@/components/ui/Logo";

export function HeroMain() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-50">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-300 to-indigo-300 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        {/* Large Logo */}
        <div className="flex justify-center mb-8">
          <Logo className="h-20 sm:h-32 md:h-40 lg:h-48 w-auto text-gray-900" />
        </div>

        {/* Sub Copy */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
          공지 확인부터 시간 조율, 취업 준비까지
          <br />
          대학생의 하루를 한 번에 관리하세요
        </p>
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
