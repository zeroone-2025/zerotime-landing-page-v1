"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const problems = [
  {
    emoji: "📢",
    title: "공지가 흩어져 있음",
    description: "학과, 단과대, 사업단... 매번 여러 곳을 확인",
    color: "from-blue-500 to-cyan-500",
  },
  {
    emoji: "⏰",
    title: "시간 조율이 어려움",
    description: "카톡, 캘린더, when2meet... 시간만 낭비",
    color: "from-violet-500 to-purple-500",
  },
  {
    emoji: "💼",
    title: "취업 정보가 없음",
    description: "선배들은 어떻게? 나는 뭘 해야 하지?",
    color: "from-orange-500 to-red-500",
  },
];

export function ProblemSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            대학생의 현실
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            매일 반복되는 불편함, 이제 그만
          </p>
        </div>

        {/* Problem Items - Emoji focused */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const { ref, isVisible } = useScrollAnimation();
            
            return (
              <div
                key={index}
                ref={ref}
                className={`text-center transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Large Emoji */}
                <div className="mb-6 transform hover:scale-110 transition-transform duration-300">
                  <span className="text-8xl sm:text-9xl">{problem.emoji}</span>
                </div>

                {/* Title with gradient underline */}
                <div className="relative inline-block mb-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {problem.title}
                  </h3>
                  <div className={`absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r ${problem.color} rounded-full`} />
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mt-6">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
