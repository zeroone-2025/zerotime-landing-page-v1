"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    emoji: "\ud83c\udf0d",
    title: "지역 청년",
    description: (
      <>
        지역에서 성장한 선배와 후배를 연결합니다.
        <br />
        서울만이 답이 아닌, 다양한 지역 기반 커리어 경험을 공유합니다.
      </>
    ),
  },
  {
    emoji: "\ud83d\udcca",
    title: "현실적 선택지 플랫폼",
    description: (
      <>
        나와 비슷한 스펙을 가진 선배님을 추천해드립니다.
        <br />
        실제 선배들의 커리어 경로를 탐색하며 현실적인 진로 방향을 찾아보세요.
      </>
    ),
  },
  {
    emoji: "\ud83c\udfaf",
    title: "커리어 데이터화",
    description: (
      <>
        선택한 선배님들의 로드맵을 바탕으로 AI가 나만의 커리어 로드맵을
        작성해드립니다.
        <br />
        여러 경로를 종합하여 맞춤형 진로 계획을 만들어보세요.
      </>
    ),
  },
];

export function FlowFeatures() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            About Flow
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            플로우는 이런 서비스입니다
          </h3>
        </div>

        {/* Feature Cards */}
        <div className="space-y-6">
          {features.map((feature, index) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div
                key={feature.title}
                ref={ref}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <span className="text-5xl flex-shrink-0">
                      {feature.emoji}
                    </span>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h4>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
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
