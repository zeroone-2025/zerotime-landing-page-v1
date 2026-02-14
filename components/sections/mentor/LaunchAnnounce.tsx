"use client";

import { Rocket, FileText, GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: Rocket,
    title: "멘토 풀 모집",
    description:
      "간단한 경험 설문을 통해 다양한 커리어 데이터를 수집하고 있습니다.",
    active: true,
  },
  {
    icon: FileText,
    title: "정식 멘토링 멘토 모집",
    description:
      "질문응답, 커피챗등 간단한 멘토링에 참여할 멘토분을 모집합니다.",
    active: false,
  },
  {
    icon: GraduationCap,
    title: "지자체·기업 협력 확장",
    description:
      "지역 기업 및 지자체와 파트너십을 구축하여 지속 가능한 구조를 구축합니다.",
    active: false,
  },
];

export function LaunchAnnounce() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation();
  const { ref: boxRef, isVisible: boxVisible } = useScrollAnimation();

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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            플로우는 정식 런칭을 향해
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              달려가고 있습니다!
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div
          ref={stepsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-700 ${
            stepsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className={`p-6 rounded-2xl border-2 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 h-full ${
                  step.active
                    ? "bg-white border-blue-200 shadow-lg"
                    : "bg-white border-gray-200 shadow-md"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-3 rounded-xl ${
                      step.active
                        ? "bg-gradient-to-br from-blue-500 to-indigo-500"
                        : "bg-gray-200"
                    }`}
                  >
                    <step.icon
                      className={`w-6 h-6 ${step.active ? "text-white" : "text-gray-500"}`}
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-500">
                    STEP {index + 1}
                  </span>
                  {step.active && (
                    <span className="ml-auto px-3 py-1 text-xs font-bold text-blue-600 bg-blue-100 rounded-full">
                      NOW
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>

              {/* Connector arrow (not on last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-6 text-gray-300">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Highlight Box */}
        <div
          ref={boxRef}
          className={`transition-all duration-700 ${
            boxVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="p-8 rounded-2xl border-2 border-orange-300 bg-orange-50">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-4">
                지금은 설문 단계입니다
              </h3>
              <p className="text-lg text-gray-700 mb-2">
                3분 정도의 간단한 설문으로 여러분의 소중한 경험을 공유해주세요.
              </p>
              <p className="text-base text-gray-600 font-medium">
                이 데이터가 모여 후배들의 길잡이가 됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
