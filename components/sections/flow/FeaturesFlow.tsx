"use client";

import { Users, Brain, Coffee } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Users,
    title: "선배 따라가기",
    description:
      "과탑 말고, 나랑 조건이 비슷한 선배. 어디서 일하고, 어떻게 준비했는지 확인하세요.",
    gradient: "from-orange-500 to-amber-500",
    lightBg: "from-orange-50 to-amber-50",
  },
  {
    icon: Brain,
    title: "AI 커리어 로드맵",
    description:
      "여러 선배의 경로를 AI가 분석해서, 나한테 맞는 준비 순서를 정리해 드려요.",
    gradient: "from-amber-500 to-yellow-500",
    lightBg: "from-amber-50 to-yellow-50",
  },
  {
    icon: Coffee,
    title: "커피챗",
    description:
      "회사 분위기, 실제 생활비, 왜 지역을 선택했는지 선배한테 직접 물어보세요.",
    gradient: "from-orange-600 to-red-500",
    lightBg: "from-orange-50 to-red-50",
  },
];

export function FeaturesFlow() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section className="py-24 sm:py-32 bg-white">
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
          <h2 className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-3">
            Features
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            세 가지 방법으로 연결합니다
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            선배의 경험을 나의 커리어로 연결하는 Flow의 핵심 기능입니다.
          </p>
        </div>

        {/* Feature cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative transition-all duration-700 ${
                cardsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Subtle gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.lightBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                />

                {/* Icon with animation */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.lightBg} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
                >
                  <feature.icon
                    className={`w-7 h-7 bg-gradient-to-br ${feature.gradient} bg-clip-text`}
                    style={{
                      stroke: `url(#gradient-${index})`,
                    }}
                  />
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient
                        id={`gradient-${index}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor={
                            index === 0
                              ? "#F97316"
                              : index === 1
                                ? "#F59E0B"
                                : "#EA580C"
                          }
                        />
                        <stop
                          offset="100%"
                          stopColor={
                            index === 0
                              ? "#F59E0B"
                              : index === 1
                                ? "#EAB308"
                                : "#EF4444"
                          }
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Title */}
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h4>

                {/* Description */}
                <p className="text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Animated border on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
                />
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-20`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
