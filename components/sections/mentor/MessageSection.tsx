"use client";

import { Quote, Heart, Lightbulb } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const messages = [
  {
    icon: Quote,
    text: "완벽한 답이 아니어도 괜찮습니다",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Heart,
    text: "멘토님의 경험 자체가 후배들에게는 큰 도움이 됩니다",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Lightbulb,
    text: "작은 조언 하나가 누군가의 진로를 바꿀 수 있습니다",
    color: "from-orange-500 to-red-500",
  },
];

export function MessageSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            당신의 경험이 필요합니다
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {messages.map((message, index) => {
            const { ref, isVisible } = useScrollAnimation();
            
            return (
              <div
                key={index}
                ref={ref}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${message.color} mb-6`}>
                    <message.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg font-semibold text-gray-900 leading-relaxed">
                    {message.text}
                  </p>
                  
                  {/* Decorative gradient */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${message.color} rounded-b-2xl`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
