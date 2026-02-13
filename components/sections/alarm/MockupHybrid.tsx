"use client";

import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Logo from "@/components/ui/Logo";

const mockupFeatures = [
  "한눈에 보는 통합 피드",
  "카테고리별 필터링",
  "키워드 알림 설정",
  "북마크 & 읽음 표시",
];

export function MockupHybrid() {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const { ref: mockupRef, isVisible: mockupVisible } = useScrollAnimation();

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Title & Description */}
          <div
            ref={textRef}
            className={`order-1 transition-all duration-700 ${
              textVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
              Preview
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              직관적인 인터페이스로
              <br />
              빠르게 확인하세요
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 lg:mb-10 font-medium leading-relaxed">
              복잡한 학교 공지를 깔끔하게 정리했습니다.
              필요한 정보만 빠르게 찾고, 중요한 공지는 놓치지 않도록 알림을 받으세요.
            </p>

            {/* Feature list (desktop only - inline) */}
            <ul className="hidden lg:block space-y-4">
              {mockupFeatures.map((feature, index) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
                    <Check className="w-4 h-4 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-base sm:text-lg text-gray-700 font-medium group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mockup image */}
          <div
            ref={mockupRef}
            className={`order-2 relative transition-all duration-700 delay-200 ${
              mockupVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            {/* Browser frame */}
            <div className="relative mx-auto max-w-lg">
              {/* Animated glow effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-30 blur-3xl animate-pulse" />

              {/* Browser window */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-500">
                {/* Browser header */}
                <div className="flex items-center gap-2 px-5 py-4 bg-gray-100 border-b border-gray-200">
                  <div className="flex gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-500" />
                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-500" />
                    <div className="w-3.5 h-3.5 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded-lg px-4 py-2 text-sm text-gray-600 text-center font-medium">
                      zerotime.kr
                    </div>
                  </div>
                </div>

                {/* App content mockup */}
                <div className="p-5 bg-gray-50 min-h-[450px]">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2 pl-1">
                      <Logo className="h-8 w-auto text-gray-900" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 animate-pulse" />
                  </div>

                  {/* Filter tabs */}
                  <div className="flex gap-2 mb-5 overflow-x-auto pb-2">
                    <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold whitespace-nowrap shadow-lg">
                      전체
                    </div>
                    <div className="px-4 py-2 rounded-xl bg-white text-gray-700 text-sm font-semibold whitespace-nowrap border-2 border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-all cursor-pointer">
                      장학금
                    </div>
                    <div className="px-4 py-2 rounded-xl bg-white text-gray-700 text-sm font-semibold whitespace-nowrap border-2 border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-all cursor-pointer">
                      취업
                    </div>
                    <div className="px-4 py-2 rounded-xl bg-white text-gray-700 text-sm font-semibold whitespace-nowrap border-2 border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-all cursor-pointer">
                      학사
                    </div>
                  </div>

                  {/* Notice cards */}
                  <div className="space-y-3">
                    {[
                      {
                        badge: "장학금",
                        badgeColor: "bg-gradient-to-r from-green-500 to-emerald-600",
                        title: "2026학년도 1학기 교내장학금 신청 안내",
                        date: "2분 전",
                        isNew: true,
                      },
                      {
                        badge: "학사",
                        badgeColor: "bg-gradient-to-r from-blue-500 to-cyan-600",
                        title: "수강신청 일정 및 유의사항 안내",
                        date: "1시간 전",
                        isNew: true,
                      },
                      {
                        badge: "취업",
                        badgeColor: "bg-gradient-to-r from-purple-500 to-pink-600",
                        title: "삼성전자 채용연계형 인턴십 모집",
                        date: "3시간 전",
                        isNew: false,
                      },
                    ].map((notice, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-2xl p-4 border-2 border-gray-100 shadow-sm hover:shadow-lg hover:scale-105 hover:border-gray-300 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span
                                className={`px-3 py-1 rounded-lg text-xs font-bold text-white ${notice.badgeColor}`}
                              >
                                {notice.badge}
                              </span>
                              {notice.isNew && (
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                              )}
                            </div>
                            <h4 className="text-sm font-bold text-gray-900 line-clamp-1">
                              {notice.title}
                            </h4>
                          </div>
                          <span className="text-xs text-gray-500 whitespace-nowrap font-medium">
                            {notice.date}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature list (mobile only - after mockup) */}
          <div className="order-3 lg:hidden">
            <ul className="space-y-4">
              {mockupFeatures.map((feature, index) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
                    <Check className="w-4 h-4 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-base sm:text-lg text-gray-700 font-medium group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
