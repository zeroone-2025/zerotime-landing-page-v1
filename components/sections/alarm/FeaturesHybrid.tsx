"use client";

import { Layers, Filter, Bell } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Layers,
    title: "통합 조회",
    description:
      "학과 홈페이지, 단과대 사이트, 사업단 공지사항 등 흩어져 있는 교내 정보를 하나로 모았습니다.",
    gradient: "from-blue-500 to-cyan-500",
    lightBg: "from-blue-50 to-cyan-50",
  },
  {
    icon: Filter,
    title: "맞춤 필터링",
    description:
      "장학금, 취업, 특강 등 원하는 키워드를 등록하거나, 내 전공을 선택하여 피드를 구성할 수 있습니다.",
    gradient: "from-violet-500 to-purple-500",
    lightBg: "from-violet-50 to-purple-50",
  },
  {
    icon: Bell,
    title: "실시간 알림",
    description:
      "중요한 공지가 올라오면 즉시 알려드립니다. 새 글이 등록될 때마다 실시간 알림을 받아보세요.",
    gradient: "from-orange-500 to-red-500",
    lightBg: "from-orange-50 to-red-50",
  },
];

export function FeaturesHybrid() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header - v1 스타일 */}
        <div
          ref={headerRef}
          className={`text-center mb-16 sm:mb-20 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Features
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            핵심 기능
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            제로타임이 제공하는 세 가지 핵심 기능으로 학교 생활을 더 스마트하게
            관리하세요.
          </p>
        </div>

        {/* Feature cards - v1 베이스 + v2 인터랙션 */}
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
                              ? "#3B82F6"
                              : index === 1
                                ? "#8B5CF6"
                                : "#F97316"
                          }
                        />
                        <stop
                          offset="100%"
                          stopColor={
                            index === 0
                              ? "#06B6D4"
                              : index === 1
                                ? "#A855F7"
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
