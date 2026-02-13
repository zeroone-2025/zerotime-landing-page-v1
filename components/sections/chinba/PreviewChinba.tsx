"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "방 생성 화면",
    description: "간단한 정보 입력으로 일정 조율 방을 만듭니다",
    emoji: "🏠",
    placeholder: "방 생성 UI 스크린샷",
  },
  {
    title: "멤버 일정 입력 화면",
    description: "각 멤버가 자신의 가능한 시간을 선택합니다",
    emoji: "👥",
    placeholder: "일정 입력 UI 스크린샷",
  },
  {
    title: "타임테이블 통합 화면",
    description: "모든 멤버의 일정이 한눈에 보입니다",
    emoji: "📊",
    placeholder: "타임테이블 UI 스크린샷",
  },
  {
    title: "겹치는 시간 표시 화면",
    description: "모두가 가능한 시간을 자동으로 찾아줍니다",
    emoji: "✨",
    placeholder: "결과 화면 UI 스크린샷",
  },
];

export function PreviewChinba() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);

  useEffect(() => {
    // Show next section button only when reaching the last slide
    setShowNextButton(currentSlide === slides.length - 1);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const scrollToNext = () => {
    document.getElementById('final-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="preview-section" className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-2">
            Preview
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            친바가 만드는
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              간편한 일정 조율
            </span>
          </h3>
        </div>

        {/* Slide container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Slide content */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-4 sm:p-6 mb-4 min-h-[280px] flex flex-col justify-between">
            <div>
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{slides[currentSlide].emoji}</div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  {slides[currentSlide].title}
                </h4>
              </div>

              {/* Screenshot placeholder */}
              <div className="w-full rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center border-2 border-emerald-200" style={{ aspectRatio: '2/1' }}>
                <p className="text-base font-semibold text-emerald-700">
                  {slides[currentSlide].placeholder}
                </p>
              </div>
            </div>

            {/* Bridge message on last slide */}
            {currentSlide === slides.length - 1 && (
              <div className="mt-4 p-3 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 text-center">
                <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  이제, 약속이 미뤄지지 않습니다
                </p>
              </div>
            )}
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-between items-center mb-6">
            <Button
              variant="outline"
              size="lg"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="rounded-full w-12 h-12 p-0 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 disabled:opacity-30"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Progress bar */}
            <div className="flex-1 mx-8">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-sm font-semibold text-emerald-600">
                  {currentSlide + 1} / {slides.length}
                </span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-600 to-teal-600 transition-all duration-500"
                  style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                />
              </div>
              {/* Dots */}
              <div className="flex justify-center gap-2 mt-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-emerald-600 w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="lg"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="rounded-full w-12 h-12 p-0 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 disabled:opacity-30"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Next section button (only on last slide) */}
          {showNextButton && (
            <div className="text-center animate-fade-in">
              <Button
                size="lg"
                onClick={scrollToNext}
                className="h-14 px-10 text-base bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg hover:shadow-xl rounded-xl font-semibold hover:scale-105 transition-all duration-300"
              >
                다음으로
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
