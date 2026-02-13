"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  {
    value: "1,200명+",
    label: "알리미 서비스 이용자",
    description: "교내 공지를 한곳에서 확인하는 학생들",
  },
  {
    value: "100명+",
    label: "제로타임 서비스 가입자",
    description: "제로타임과 함께하는 사용자들",
  },
  {
    value: "운영중",
    label: "친해지길 바래",
    description: "약속 시간을 쉽게 조율하는 서비스",
  },
];

export function StatsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Our Impact
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            제로타임은 이미 학생들과 함께하고 있습니다
          </h3>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div
                key={stat.label}
                ref={ref}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="p-8 rounded-2xl bg-white border-2 border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center h-full">
                  <p className="text-4xl sm:text-5xl font-bold text-blue-600 mb-3">
                    {stat.value}
                  </p>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {stat.label}
                  </h4>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
