"use client";

import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function SolutionSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div
          ref={sectionRef}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            그래서 제로타임이
            <br />
            만들었습니다
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed mb-12">
            대학생의 <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">시간</span>과{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">선택</span>을 줄여주는
            <br />
            3가지 서비스
          </p>
          
          {/* Arrow Down */}
          <div className="flex justify-center">
            <div className="animate-bounce">
              <ChevronDown className="w-12 h-12 text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
