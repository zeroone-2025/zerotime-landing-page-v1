"use client";

import { MessageCircle, Zap, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const workingWays = [
  {
    icon: MessageCircle,
    emoji: "💬",
    title: "의사소통",
    points: ["제안 중심 대화", "기록", "즉시 공유"],
    gradient: "from-blue-500 to-cyan-500",
    lightBg: "from-blue-50 to-cyan-50",
  },
  {
    icon: Zap,
    emoji: "⚡",
    title: "의사결정",
    points: ["빠른 결정", "권한과 책임", "즉시 결정"],
    gradient: "from-indigo-500 to-purple-500",
    lightBg: "from-indigo-50 to-purple-50",
  },
  {
    icon: Users,
    emoji: "🤝",
    title: "회의 문화",
    points: ["안건 중심", "결정을 위한 모임", "회의 후 즉시 실행"],
    gradient: "from-violet-500 to-purple-500",
    lightBg: "from-violet-50 to-purple-50",
  },
];

export function WorkingWay() {
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            몰입과 자율,
            <br />
            그리고{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              압도적인 속도
            </span>
          </h2>
        </div>

        {/* Working way cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {workingWays.map((way, index) => (
            <div
              key={way.title}
              className={`group relative transition-all duration-700 ${
                cardsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${way.lightBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                
                {/* Emoji */}
                <div className="text-5xl mb-4">{way.emoji}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {way.title}
                </h3>

                {/* Points */}
                <ul className="space-y-2">
                  {way.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span className="text-base text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Animated border on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${way.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href="https://easy-troodon-40b.notion.site/240cfa1bae7f800ea988c3546cbe81d9?pvs=74" target="_blank">
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-10 text-base border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
            >
              우리가 만드는 문화 →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
