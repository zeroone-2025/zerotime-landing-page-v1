"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";

export function TeamIntro() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left: Content */}
          <div>
            {/* Main title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12 leading-tight">
              상상을 현실로 만드는
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                실행의 힘
              </span>
            </h2>

            {/* Emphasis box */}
            <div className="mb-12">
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 shadow-xl">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-400 opacity-20 rounded-bl-full" />
                
                <p className="text-xl sm:text-2xl font-bold text-gray-900 leading-relaxed">
                  전북대학교 컴퓨터인공지능학부 ✕ 경영학부가 만나
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                    기술과 비즈니스의 시너지
                  </span>
                  를 만듭니다
                </p>
              </div>
            </div>

            {/* Bottom text */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              아이디어는 대회에 머물지 않습니다.
              <br />
              가설을 검증하고 실제 서비스로 시장에 출시합니다.
            </p>
          </div>

          {/* Right: Image */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Together.jpg"
                alt="Team ZeroOne"
                width={600}
                height={400}
                priority
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
