"use client";

import { LogIn, LogOut } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    type: "로그인 전",
    icon: LogOut,
    title: "빠른 접근",
    points: [
      "URL로 방 접근",
      "멤버 확인",
      "가용 시간 확인 가능",
    ],
    gradient: "from-emerald-500 to-teal-500",
    lightBg: "from-emerald-50 to-teal-50",
  },
  {
    type: "로그인 후",
    icon: LogIn,
    title: "관리 중심",
    points: [
      "채널 저장",
      "일정 공유",
      "내 리스트에서 통합 관리 가능",
    ],
    gradient: "from-teal-500 to-cyan-500",
    lightBg: "from-teal-50 to-cyan-50",
  },
];

export function FeatureChinba() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 sm:mb-20 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
            Features
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            로그인 여부와 관계없이
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              모두에게 편리하게
            </span>
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            친바는 접근성과 관리 편의성을 모두 갖췄습니다.
          </p>
        </div>

        {/* Feature cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.type}
              className={`group relative transition-all duration-700 ${
                cardsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.lightBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                
                {/* Type badge */}
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${feature.lightBg} mb-6`}>
                  <span className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient}`}>
                    {feature.type}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-2xl font-bold text-gray-900 mb-6">
                  {feature.title}
                </h4>

                {/* Points */}
                <ul className="space-y-3">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-emerald-600 mr-2 text-xl">✓</span>
                      <span className="text-lg text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Animated border on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`} />
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-20`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
