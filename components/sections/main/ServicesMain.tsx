"use client";

import { Bell, Users, TrendingUp, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Bell,
    title: "알리미",
    tagline: "학교 공지를, 한눈에",
    description: "학교/학과 공지 통합. 사이트 방문 불필요. 중요한 공지는 실시간 알림으로.",
    gradient: "from-blue-500 to-cyan-500",
    lightBg: "from-blue-50 to-cyan-50",
    href: "/alarm",
    buttonText: "알리미 알아보기",
  },
  {
    icon: Users,
    title: "친해지길 바래",
    tagline: "시간 약속, 겹치는 시간만 보면 끝",
    description: "when2meet 기반 직관적 UI. 조율 스트레스 제거. 클릭 몇 번으로 약속 완료.",
    gradient: "from-green-500 to-emerald-500",
    lightBg: "from-green-50 to-emerald-50",
    href: "/chinba",
    buttonText: "친바 알아보기",
  },
  {
    icon: TrendingUp,
    title: "플로우",
    tagline: "선배의 길을 따라가는 취업 로드맵",
    description: "선배 이력 기반 로드맵. 커피챗 연결. 막막한 취업 준비, 이제 방향성을 찾으세요.",
    gradient: "from-yellow-500 to-orange-500",
    lightBg: "from-yellow-50 to-orange-50",
    href: "/flow",
    buttonText: "플로우 알아보기",
  },
];

export function ServicesMain() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Services
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            제로타임의 핵심 서비스
          </h3>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const { ref, isVisible } = useScrollAnimation();
            
            return (
              <div
                key={service.title}
                ref={ref}
                className={`group transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full flex flex-col">
                  {/* Subtle gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.lightBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.lightBg} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                    <service.icon className="w-7 h-7" style={{ stroke: `url(#gradient-${index})` }} />
                    <svg width="0" height="0">
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={index === 0 ? "#3B82F6" : index === 1 ? "#10B981" : "#EAB308"} />
                          <stop offset="100%" stopColor={index === 0 ? "#06B6D4" : index === 1 ? "#059669" : "#F97316"} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Title */}
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h4>

                  {/* Tagline */}
                  <p className={`text-lg font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-4`}>
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-base text-gray-600 leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  {/* Button */}
                  <Link href={service.href}>
                    <Button
                      variant="outline"
                      className={`w-full border-2 hover:scale-105 transition-all duration-300 ${
                        index === 0
                          ? "hover:bg-blue-700 hover:text-white hover:border-blue-700"
                          : index === 1
                          ? "hover:bg-green-700 hover:text-white hover:border-green-700"
                          : "hover:bg-orange-600 hover:text-white hover:border-orange-600"
                      }`}
                    >
                      {service.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>

                  {/* Animated border on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
