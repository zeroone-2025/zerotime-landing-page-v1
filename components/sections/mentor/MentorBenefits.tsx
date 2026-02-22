"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    number: 1,
    title: "지역 청년의 미래를 바꾸는 기회",
    description: "지역 청년 인구 감소는 중요한 사회 문제입니다.",
    detail: "선배님의 경험이 지역 청년들의 선택지를 넓힐 수 있습니다.",
  },
  {
    number: 2,
    title: "경험 공유에 대한 소정의 비용 지급 예정",
    description:
      "현재는 초기 단계이지만, 향후 경험 공유에 대해 소정의 금액을 지급하는 구조를 준비 중입니다.",
    detail: "지속 가능한 멘토 생태계를 만드는 것을 목표로 합니다.",
  },
  {
    number: 3,
    title: "인재 추천 및 기업 홍보 기회",
    description:
      "멘토님이 소속된 기업을 자연스럽게 소개하고, 관심 있는 인재와 연결될 수 있는 기회를 제공합니다.",
    subItems: [
      "기업 홍보 기회",
      "지역 기반 우수 인재와의 연결",
      "잠재적 채용 기회 확대",
    ],
  },
  {
    number: 4,
    title: "자신의 커리어를 정리하는 기회",
    description:
      "지나온 경험을 돌아보며 자신의 커리어를 체계적으로 정리할 수 있습니다.",
    detail:
      "짧은 설문이지만, 생각보다 깊이 있게 자신의 길을 돌아보는 계기가 됩니다.",
  },
];

export function MentorBenefits() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            플로우를 통해 선배님이 얻는 가치
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            단순한 커피챗이 아니라, 지역 인재 생태계를 함께 만드는 구조입니다
          </p>
        </div>

        {/* Benefits List */}
        <div className="space-y-8">
          {benefits.map((benefit, index) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div
                key={benefit.number}
                ref={ref}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex gap-6 p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-500">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {benefit.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-2">
                      {benefit.description}
                    </p>
                    {benefit.detail && (
                      <p className="text-gray-500">{benefit.detail}</p>
                    )}
                    {benefit.subItems && (
                      <ul className="mt-3 space-y-2">
                        {benefit.subItems.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
