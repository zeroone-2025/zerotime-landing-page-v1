"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bell, Users, TrendingUp, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Bell,
    name: "알리미",
    description: "학교 공지를 한눈에",
    href: "/alarm",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    icon: Users,
    name: "친해지길 바래",
    description: "시간 조율을 쉽게",
    href: "/chinba",
    gradient: "from-green-600 to-emerald-600",
  },
  {
    icon: TrendingUp,
    name: "플로우",
    description: "취업 로드맵 제공",
    href: "/flow",
    gradient: "from-yellow-600 to-orange-600",
  },
];

export function FinalCTAMain() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          ref={sectionRef}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-12 leading-relaxed">
            제로타임의 서비스로 더 효율적인 대학생활을
          </p>

          {/* Service Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {services.map((service, index) => (
              <Link
                key={service.name}
                href={service.href}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Button
                  size="lg"
                  className={`h-14 px-8 text-base bg-white hover:bg-gray-100 shadow-lg hover:shadow-2xl rounded-xl font-semibold hover:scale-105 transition-all duration-300 bg-gradient-to-r ${service.gradient} text-white border-0`}
                >
                  <service.icon className="mr-2 h-5 w-5" />
                  {service.name}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
