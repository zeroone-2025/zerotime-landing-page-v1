"use client";

import { MessageCircle, Heart, Lightbulb } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cards = [
  {
    tags: ["#있는그대로"],
    icon: MessageCircle,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-500",
    title: "완벽한 답이 아니어도\n괜찮습니다",
    description:
      "솔직한 경험 공유만으로도 충분합니다.\n특별한 스펙이나 대단한 커리어가 없어도 됩니다.",
    calloutLabel: "이 정도면 충분해요",
    callout:
      '"처음에서 떨어진 회사들 얘기도 꺼냈어요. 패인이 뭐였고 다음엔 뭘 바꿨는지요. 거창한 성공담보다 그게 현실적으로 훨씬 와닿았다고 하더라고요."',
  },
  {
    tags: ["#경험의가치", "#나의취업이야기"],
    icon: Heart,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-500",
    title: "멘토님의 경험 자체가\n후배들에게 큰 도움이 됩니다",
    description:
      "같은 학교, 비슷한 스펙으로 어떻게 지역에서\n자리 잡았는지, 그 경로 자체가 후배에게\n지도가 됩니다.",
    calloutLabel: "이 정도면 충분해요",
    callout:
      "\"전북에 있는 '하람' 재무팀을 목표로 준비했다고 하니, '이 지역에도 그런 대기업이 있냐'며 놀리더라고요. 제 취업 경로 자체가 후배에게 새로운 정보였어요.\"",
  },
  {
    tags: ["#한마디의힘"],
    icon: Lightbulb,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-500",
    title: "작은 조언 하나가 누군가의\n진로를 바꿀 수 있습니다",
    description:
      '거창한 조언이 아니어도 됩니다.\n"저는 이 회사 이렇게 지원했어요"\n한 마디로 충분합니다.',
    calloutLabel: "이 정도면 충분해요",
    callout:
      '"무조건 서울로 올라가야 성공하는 줄 알던 후배한테, 제가 지방에서 자리 잡고 만족하며 사는 현실적인 얘기를 해줬어요. 거창한 조언도 아니었는데, 수도권 밖으로 시야를 돌리는 결정적 계기가 됐대요."',
  },
];

export function ClosingMessage() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section className="py-20 sm:py-28 bg-[#F5F6FA]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            당신의 경험이 필요합니다
          </h2>
          <p className="text-base sm:text-lg text-gray-500">
            멘토님의 경험은 생각보다 큰 영향을 줍니다.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, index) => {
            const { ref, isVisible } = useScrollAnimation();
            const Icon = card.icon;
            return (
              <div
                key={index}
                ref={ref}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col h-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-blue-500 bg-blue-50 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${card.iconBg}`}
                    >
                      <Icon className={`w-5 h-5 ${card.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 leading-snug whitespace-pre-line">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line mb-5 border-l-2 border-gray-200 pl-3">
                    {card.description}
                  </p>

                  {/* Callout */}
                  <div className="mt-auto bg-[#EEF0F8] rounded-xl p-4">
                    <p className="text-xs font-semibold text-gray-500 mb-2">
                      {card.calloutLabel}
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {card.callout}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote Box */}
        <div className="mt-8 w-full bg-[#EEF2FB] rounded-2xl px-8 py-7">
          <svg
            className="w-8 h-8 text-blue-300 mb-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.312 4.782 6.99 4.95 6.63 5.14c-.36.19-.72.41-1.05.67-.33.26-.64.561-.934.893-.246.271-.509.582-.71.947-.202.34-.392.747-.51 1.203-.117.463-.2.99-.2 1.582 0 2.206 1.794 3.994 4 3.994s4-1.788 4-3.994c0-2.207-1.794-3.996-4-3.996zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.277.113-.599.281-.959.471-.36.19-.72.41-1.05.67-.33.26-.64.561-.934.893-.246.271-.509.582-.71.947-.202.34-.392.747-.51 1.203-.117.463-.2.99-.2 1.582 0 2.206 1.794 3.994 4 3.994s4-1.788 4-3.994c0-2.207-1.794-3.996-4-3.996z" />
          </svg>
          <p className="text-center text-gray-700 text-base sm:text-lg italic leading-relaxed mb-4">
            &ldquo;저도 처음엔 가볍게 시작했습니다. 그런데 그 한 번의 대화가
            오래 남더라고요.&rdquo;
          </p>
          <p className="text-right text-sm text-gray-500 font-medium">
            — 현직 멘토님
          </p>
        </div>
      </div>
    </section>
  );
}
