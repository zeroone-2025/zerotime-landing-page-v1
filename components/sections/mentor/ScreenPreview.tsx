"use client";

import { useEffect, useRef, useState } from "react";
import {
  UserPlus,
  ClipboardList,
  Settings2,
  BadgeCheck,
  ChevronDown,
} from "lucide-react";

const steps = [
  {
    id: "cta",
    icon: UserPlus,
    label: "Step 1",
    title: "선배로 참여하기",
    description: "단 3분, 간단한 설문으로 선배 등록을 시작합니다",
    image: "/images/zerotime/step1.png",
  },
  {
    id: "type",
    icon: ClipboardList,
    label: "Step 2",
    title: "유형 선택",
    description: "학생 또는 선배 중 나에게 해당하는 유형을 선택",
    image: "/images/zerotime/step2.png",
  },
  {
    id: "info",
    icon: Settings2,
    label: "Step 3",
    title: "정보 입력",
    description: "학력, 경력, 직무 키워드 등 프로필 정보를 단계별로 입력",
    image: "/images/zerotime/step3.png",
  },
  {
    id: "done",
    icon: BadgeCheck,
    label: "Step 4",
    title: "최종 확인",
    description: "입력한 내용을 확인하고 로그인 후 저장하면 등록 완료",
    image: "/images/zerotime/step4.png",
  },
];

export function ScreenPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrolled = -rect.top;
      const segmentHeight = sectionHeight / steps.length;
      const index = Math.min(
        Math.max(Math.floor(scrolled / segmentHeight), 0),
        steps.length - 1,
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-50"
      style={{ minHeight: `${steps.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center py-12 md:py-0 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6 w-full">
          {/* Section Title */}
          <div className="text-center mb-4 md:mb-12">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-1 md:mb-3">
              Guide
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              선배 등록 과정 가이드
            </h3>
          </div>

          <div className="flex gap-8 items-start">
            {/* Left: Step Timeline (desktop only) */}
            <div className="hidden md:flex flex-shrink-0 flex-col items-center gap-0">
              {steps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                      index === activeIndex
                        ? "bg-gradient-to-br from-blue-600 to-indigo-600 scale-110 shadow-lg"
                        : index < activeIndex
                          ? "bg-blue-200"
                          : "bg-gray-200"
                    }`}
                  >
                    <step.icon
                      className={`w-5 h-5 ${
                        index === activeIndex
                          ? "text-white"
                          : index < activeIndex
                            ? "text-blue-600"
                            : "text-gray-400"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-xs mt-1 font-medium transition-colors duration-300 ${
                      index === activeIndex ? "text-blue-600" : "text-gray-400"
                    }`}
                  >
                    {step.label}
                  </span>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-0.5 h-12 transition-colors duration-500 ${
                        index < activeIndex ? "bg-blue-400" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Center: Image Screen */}
            <div className="flex-1 max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Browser top bar */}
                <div className="bg-gray-900 px-4 md:px-6 py-2 md:py-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-[10px] md:text-xs text-gray-400 font-mono">
                    flow.zerotime.kr
                  </span>
                  <div className="w-8 md:w-12" />
                </div>

                {/* Step Header */}
                <div className="px-4 md:px-8 pt-4 md:pt-6 pb-3 md:pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 md:gap-3">
                    <div className="p-1.5 md:p-2 rounded-lg md:rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex-shrink-0">
                      {(() => {
                        const Icon = steps[activeIndex].icon;
                        return (
                          <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        );
                      })()}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm md:text-base font-bold text-gray-900">
                        {steps[activeIndex].label} · {steps[activeIndex].title}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-500 truncate">
                        {steps[activeIndex].description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step Image */}
                <div className="w-full bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    key={activeIndex}
                    src={steps[activeIndex].image}
                    alt={`${steps[activeIndex].title} 화면`}
                    className="w-full h-auto block transition-opacity duration-500"
                  />
                </div>
              </div>

              {/* Mobile: Dot Indicators + Scroll hint */}
              <div className="flex md:hidden flex-col items-center mt-4 gap-2">
                <div className="flex items-center gap-2">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={`rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? "w-6 h-2.5 bg-blue-600"
                          : "w-2.5 h-2.5 bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
                {activeIndex < steps.length - 1 && (
                  <div className="flex flex-col items-center gap-1 animate-bounce">
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                    <ChevronDown className="w-5 h-5 text-gray-300 -mt-3.5" />
                  </div>
                )}
                {activeIndex < steps.length - 1 && (
                  <p className="text-xs text-gray-400">
                    아래로 스크롤 해주세요
                  </p>
                )}
              </div>
            </div>

            {/* Right: Scroll Indicator (desktop only) */}
            <div
              className={`hidden md:flex flex-shrink-0 flex-col items-center gap-3 transition-opacity duration-500 ${
                activeIndex < steps.length - 1 ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="w-7 h-11 rounded-full border-2 border-gray-300 flex items-start justify-center p-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" />
              </div>
              <div className="flex flex-col items-center gap-0.5 animate-bounce">
                <ChevronDown className="w-4 h-4 text-gray-400" />
                <ChevronDown className="w-4 h-4 text-gray-300 -mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
