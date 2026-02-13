"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";

export function ProblemFlow() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Visual - Crossroads */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 mb-8">
              <span className="text-6xl">🗺️</span>
            </div>
          </div>

          {/* Main message */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              서울만 바라보게 된 건,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                다른 길이 안 보여서였어요
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              정보는 수도권 중심. 물어볼 사람도 없고...
            </p>
          </div>

          {/* Numbers emphasis */}
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              숫자를 다시 들여다보면, 답이 달라집니다
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 연봉 - 작게 */}
              <div className="text-center flex flex-col justify-center">
                <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  연봉
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                  -200만원
                </div>
                <p className="text-sm text-gray-700">
                  조금 낮아도
                </p>
              </div>

              {/* 월세 - 크게 강조 */}
              <div className="text-center">
                <div className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-3">
                  월세
                </div>
                <div className="text-5xl sm:text-6xl font-bold text-orange-600 mb-3">
                  -50%
                </div>
                <p className="text-xl sm:text-2xl text-gray-900 font-semibold">
                  절반이고
                </p>
              </div>

              {/* 출퇴근 - 크게 강조 */}
              <div className="text-center">
                <div className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-3">
                  출퇴근
                </div>
                <div className="text-5xl sm:text-6xl font-bold text-orange-600 mb-3">
                  15분
                </div>
                <p className="text-xl sm:text-2xl text-gray-900 font-semibold">
                  이라면?
                </p>
              </div>
            </div>

            <p className="text-center text-lg text-gray-700 mt-8 font-medium">
              실제 삶의 질은 오히려 더 높을 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
