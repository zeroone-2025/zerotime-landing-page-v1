"use client";

import { MessageCircle, Heart, Lightbulb, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const messages = [
  {
    title: "완벽한 답이 아니어도 괜찮습니다",
    description: "솔직한 경험 공유만으로도 충분합니다",
  },
  {
    title: "멘토님의 경험 자체가 후배들에게 큰 도움이 됩니다",
    description: "길을 잃은 후배들에게 방향을 제시합니다",
  },
  {
    title: "작은 조언 하나가 누군가의 진로를 바꿀 수 있습니다",
    description: "한 마디가 큰 변화를 만들어냅니다",
  },
];

export function ClosingMessage() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollAnimation();

  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            당신의 경험이 필요합니다
          </h2>
          <p className="text-lg sm:text-xl text-gray-500">
            멘토님의 경험은 생각보다 큰 영향을 줍니다.
          </p>
        </div>

        {/* Message Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {messages.map((message, index) => {
            const { ref, isVisible } = useScrollAnimation();
            const icons = [
              <MessageCircle key="mc" className="w-6 h-6 text-white" />,
              <Heart key="h" className="w-6 h-6 text-white" />,
              <Lightbulb key="lb" className="w-6 h-6 text-white" />,
            ];
            const colors = [
              "bg-blue-500",
              "bg-violet-500",
              "bg-orange-500",
            ];
            return (
              <div
                key={index}
                ref={ref}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-500 h-full">
                  <div
                    className={`inline-flex p-4 rounded-full mb-6 ${colors[index]}`}
                  >
                    {icons[index]}
                  </div>
                  <p className="text-lg font-bold text-gray-900 leading-relaxed mb-2">
                    {message.title}
                  </p>
                  <p className="text-gray-500">{message.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote Box */}
        <div
          ref={quoteRef}
          className={`transition-all duration-700 ${
            quoteVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative p-8 sm:p-10 rounded-2xl bg-blue-50 max-w-3xl mx-auto">
            <div className="absolute top-6 left-8">
              <Quote className="w-8 h-8 text-blue-300" />
            </div>
            <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed italic mt-8 mb-6">
              &ldquo;저도 처음엔 가볍게 시작했습니다. 그런데 그 한 번의 대화가 오래 남더라고요.&rdquo;
            </blockquote>
            <p className="text-right text-sm text-gray-500 font-medium">
              — 현직 멘토님
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
