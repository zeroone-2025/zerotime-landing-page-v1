"use client";

import {
  Clock,
  Target,
  Zap,
  TrendingUp,
  Users as UsersIcon,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    icon: Clock,
    title: "시간 낭비 감소",
    description: "공지 확인, 시간 조율 시간 최소화",
  },
  {
    icon: Target,
    title: "정보 접근성",
    description: "필요한 정보를 빠르게 찾기",
  },
  {
    icon: Zap,
    title: "스트레스 제로",
    description: "복잡한 과정 없이 간편하게",
  },
  {
    icon: TrendingUp,
    title: "취업 방향성",
    description: "선배 경험으로 로드맵 구축",
  },
];

const stats = [
  { label: "서비스 학교", value: "전북대학교" },
  { label: "누적 사용자", value: "1,200+" },
  { label: "베타 만족도", value: "92%" },
];

export function SummaryTeamSection() {
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Benefits - Radial Layout */}
        <div
          ref={benefitsRef}
          className={`mb-20 transition-all duration-700 ${
            benefitsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-20">
            제로타임의 가치
          </h2>

          {/* Radial Grid */}
          <div className="relative max-w-5xl mx-auto">
            {/* Center Circle with Logo and Blue Border */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-white flex items-center justify-center shadow-2xl z-10 p-10 border-4 border-blue-600">
              <img
                src="/logo-symbol.svg"
                alt="ZeroTime Logo"
                className="w-full h-full"
              />
            </div>

            {/* Grid Container */}
            <div className="grid grid-cols-2 gap-16 sm:gap-20 md:gap-24">
              {benefits.map((benefit, index) => {
                const positions = [
                  "justify-end items-end text-right", // Top-left
                  "justify-start items-end text-left", // Top-right
                  "justify-end items-start text-right", // Bottom-left
                  "justify-start items-start text-left", // Bottom-right
                ];

                return (
                  <div
                    key={index}
                    className={`flex ${positions[index]} p-8 min-h-[260px]`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="max-w-[260px]">
                      <div
                        className={`inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 mb-4 ${index % 2 === 0 ? "ml-auto" : "mr-auto"}`}
                      >
                        <benefit.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      {/* Mobile: 2 lines, Desktop: 1 line */}
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                        <span className="md:hidden">
                          {benefit.title === "시간 낭비 감소" ? (
                            <>
                              시간 낭비
                              <br />
                              감소
                            </>
                          ) : benefit.title === "정보 접근성" ? (
                            <>
                              정보
                              <br />
                              접근성
                            </>
                          ) : benefit.title === "스트레스 제로" ? (
                            <>
                              스트레스
                              <br />
                              제로
                            </>
                          ) : (
                            <>
                              취업
                              <br />
                              방향성
                            </>
                          )}
                        </span>
                        <span className="hidden md:inline">
                          {benefit.title}
                        </span>
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Team Introduction */}
        <div
          ref={teamRef}
          className={`mb-16 transition-all duration-700 ${
            teamVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
              TEAM ZEROONE
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              아이디어를 현실로 만드는 팀
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              전북대학교에서 시작된{" "}
              <span className="font-semibold text-gray-900">ZeroOne</span>은
              빠른 실행으로 아이디어를 검증하고,
              <br />
              실제 서비스로 구현하는 학생 창업팀입니다.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                몰입과 자율, 빠른 실행과 학습, 실패를 통한 성장
              </span>
              을 핵심 가치로 삼습니다.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className={`transition-all duration-700 ${
            statsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 text-center"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
                  {stat.label}
                </p>
                <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
