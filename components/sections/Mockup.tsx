"use client";

import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";

const mockupFeatures = [
  "한눈에 보는 통합 피드",
  "카테고리별 필터링",
  "키워드 알림 설정",
  "북마크 & 읽음 표시",
];

export function Mockup() {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const { ref: mockupRef, isVisible: mockupVisible } = useScrollAnimation();

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div
            ref={textRef}
            className={`order-2 lg:order-1 transition-all duration-700 ${
              textVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
              Preview
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              직관적인 인터페이스로 빠르게 확인하세요
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              복잡한 학교 공지를 깔끔하게 정리했습니다. 필요한 정보만 빠르게
              찾고, 중요한 공지는 놓치지 않도록 알림을 받으세요.
            </p>

            {/* Feature list */}
            <ul className="space-y-4">
              {mockupFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mockup image */}
          <div
            ref={mockupRef}
            className={`order-1 lg:order-2 relative transition-all duration-700 delay-200 ${
              mockupVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            {/* Browser frame */}
            <div className="relative mx-auto max-w-lg">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl opacity-20 blur-2xl" />

              {/* Browser window */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Browser header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded-md px-3 py-1.5 text-sm text-gray-500 text-center">
                      zerotime.app
                    </div>
                  </div>
                </div>

                {/* App content mockup */}
                <div className="p-4 bg-gray-50 min-h-[400px]">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/logo.png"
                        alt="ZeroTime Logo"
                        width={32}
                        height={32}
                        className="rounded-lg"
                      />
                      <span className="font-bold text-gray-900">ZeroTime</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200" />
                    </div>
                  </div>

                  {/* Filter tabs */}
                  <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                    <div className="px-3 py-1.5 rounded-full bg-blue-500 text-white text-sm whitespace-nowrap">
                      전체
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-white text-gray-600 text-sm whitespace-nowrap border">
                      장학금
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-white text-gray-600 text-sm whitespace-nowrap border">
                      취업
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-white text-gray-600 text-sm whitespace-nowrap border">
                      학사
                    </div>
                  </div>

                  {/* Notice cards */}
                  <div className="space-y-3">
                    {[
                      {
                        badge: "장학금",
                        badgeColor: "bg-green-100 text-green-700",
                        title: "2026학년도 1학기 교내장학금 신청 안내",
                        date: "2분 전",
                        isNew: true,
                      },
                      {
                        badge: "학사",
                        badgeColor: "bg-blue-100 text-blue-700",
                        title: "수강신청 일정 및 유의사항 안내",
                        date: "1시간 전",
                        isNew: true,
                      },
                      {
                        badge: "취업",
                        badgeColor: "bg-purple-100 text-purple-700",
                        title: "삼성전자 채용연계형 인턴십 모집",
                        date: "3시간 전",
                        isNew: false,
                      },
                    ].map((notice, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span
                                className={`px-2 py-0.5 rounded text-xs font-medium ${notice.badgeColor}`}
                              >
                                {notice.badge}
                              </span>
                              {notice.isNew && (
                                <span className="w-2 h-2 rounded-full bg-red-500" />
                              )}
                            </div>
                            <h4 className="text-sm font-medium text-gray-900 line-clamp-1">
                              {notice.title}
                            </h4>
                          </div>
                          <span className="text-xs text-gray-400 whitespace-nowrap">
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
        </div>
      </div>
    </section>
  );
}
