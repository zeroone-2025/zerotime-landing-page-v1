"use client";

import { Bell, Users, TrendingUp, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";

const services = [
  {
    icon: Bell,
    title: "알리미",
    description: "학과, 단과대, 사업단 공지사항 등 흩어져 있는 교내 정보를 하나로 모았습니다.",
    gradient: "from-blue-500 to-cyan-500",
    lightBg: "from-blue-50 to-cyan-50",
    href: "/alarm",
  },
  {
    icon: Users,
    title: "친해지길 바래",
    description: "친구들과의 약속 시간을 쉽게 조율하는 서비스입니다.",
    gradient: "from-violet-500 to-purple-500",
    lightBg: "from-violet-50 to-purple-50",
    href: "/chinba",
  },
  {
    icon: TrendingUp,
    title: "플로우",
    description: "지역 선후배를 연결하여 진로와 취업에 대한 실질적인 도움을 제공합니다.",
    gradient: "from-orange-500 to-red-500",
    lightBg: "from-orange-50 to-red-50",
    href: "/flow",
  },
];

export function ServicesSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Services
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ZEROTIME Services
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            전북대 학생들을 위한 다양한 서비스를 제공합니다.
          </p>
        </div>

        {/* Service items - vertical stack */}
        <div className="space-y-6">
          {services.map((service, index) => {
            const { ref, isVisible } = useScrollAnimation();
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={service.title}
                ref={ref}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : `opacity-0 ${isEven ? "-translate-x-8" : "translate-x-8"}`
                }`}
              >
                <Link href={service.href} className="group block">
                  <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${service.lightBg} border-2 border-transparent hover:border-gray-200 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      {/* Icon */}
                      <div className={`flex-shrink-0 p-6 rounded-2xl bg-gradient-to-br ${service.gradient} group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                        <service.icon className="w-10 h-10 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center md:text-left">
                        <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                          {service.title}
                        </h4>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="flex-shrink-0">
                        <div className="p-3 rounded-full bg-white/50 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                          <ArrowRight className={`w-6 h-6 bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent group-hover:translate-x-1 transition-transform duration-300`} style={{ stroke: `url(#gradient-arrow-${index})` }} />
                          <svg width="0" height="0">
                            <defs>
                              <linearGradient id={`gradient-arrow-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor={index === 0 ? "#3B82F6" : index === 1 ? "#8B5CF6" : "#F97316"} />
                                <stop offset="100%" stopColor={index === 0 ? "#06B6D4" : index === 1 ? "#A855F7" : "#EF4444"} />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>


        {/* Home Button */}
        <div className="mt-16 text-center">
          <Link href="/">
            <div className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-full transition-all duration-300 group cursor-pointer border border-blue-200 hover:border-blue-300">
              제로타임 가기
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
