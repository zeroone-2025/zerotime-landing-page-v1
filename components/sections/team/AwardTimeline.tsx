"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const awards = [
  {
    date: "2025.06.05",
    title: "전북대 SW/AI 경진대회",
    award: "금상",
    image: "/images/awards/전북대 SWAI 공모전.jpeg",
    description: "SW 오픈소스 공모전",
  },
  {
    date: "2025.08.05",
    title: "전주 ICT 디지털 아이디어 공모전",
    award: "특별상",
    image: "/images/awards/전주ICT.jpg",
    description: "전주 ICT 융합 아이디어 공모전",
  },
  {
    date: "2025.08.22",
    title: "호남 IS 해커톤",
    award: "우수상",
    image: "/images/awards/호남IS해커톤.jpg",
    description: "AI Hub 데이터를 이용한 지역 문제 해결",
  },
  {
    date: "2025.09.10",
    title: "대학 창업 아이디어 챌린지",
    award: "우수상",
    image: "/images/awards/창업경진대회.jpeg",
    description: "전국 대학 창업경진대회",
  },
  {
    date: "2025.09.28",
    title: "전북대 아이디어 해커톤",
    award: "최우수상",
    image: "/images/awards/sw오픈소스해커톤.jpg",
    description: "SW 오픈소스 해커톤",
  },
  {
    date: "2026.01.08",
    title: "전북대 TBM 캠프",
    award: "금상",
    image: "/images/awards/TBM캠프.png",
    description: "Technical Business Mentoring 캠프",
  },
  {
    date: "2026.02",
    title: "전북대 우수 취창업동아리",
    award: "선정",
    image: "/images/awards/전북대 우수 취창업동아리.jpg",
    description: "전북대학교 우수 취창업동아리",
  },
];

export function AwardTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stickyTop, setStickyTop] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const imageSrcs = awards
      .map((award) => award.image)
      .filter((src): src is string => Boolean(src));

    imageSrcs.forEach((src) => {
      const img = new window.Image();
      img.decoding = "async";
      img.loading = "eager";
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const updateStickyTop = () => {
      const header = document.querySelector("header");
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      setStickyTop(Math.ceil(headerHeight));
    };

    updateStickyTop();
    window.addEventListener("resize", updateStickyTop);
    return () => window.removeEventListener("resize", updateStickyTop);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !timelineRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      const topOffset = stickyTop;
      const effectiveViewport = viewportHeight - topOffset;
      const scrollable = sectionHeight - effectiveViewport;

      // Calculate scroll progress within the section
      if (
        scrollable > 0 &&
        rect.top <= topOffset &&
        rect.bottom >= viewportHeight
      ) {
        const scrollProgress = (topOffset - rect.top) / scrollable;
        const newIndex = Math.min(
          Math.floor(scrollProgress * awards.length),
          awards.length - 1,
        );
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [stickyTop]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-white to-gray-50"
      style={{ minHeight: `${awards.length * 50}vh` }}
    >
      <div
        className="sticky top-0 h-screen flex items-start lg:items-center overflow-visible lg:overflow-hidden"
        style={
          stickyTop
            ? { top: `${stickyTop}px`, height: `calc(100svh - ${stickyTop}px)` }
            : undefined
        }
      >
        <div className="max-w-7xl mx-auto px-6 w-full h-full">
          {/* Mobile Layout */}
          <div className="lg:hidden h-full">
            <div className="grid grid-cols-[32px_1fr] gap-3 h-full pt-2 pb-2">
              {/* Left: Timeline */}
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-200">
                  <div
                    className="absolute top-0 left-0 w-full bg-gradient-to-b from-indigo-600 to-purple-600 transition-all duration-500"
                    style={{
                      height: `${((activeIndex + 1) / awards.length) * 100}%`,
                    }}
                  />
                </div>

                {/* Timeline points */}
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-4">
                  {awards.map((award, index) => (
                    <div
                      key={index}
                      className={`relative flex items-center transition-all duration-500 ${
                        index === activeIndex ? "scale-110" : "scale-100"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border-4 transition-all duration-500 ${
                          index <= activeIndex
                            ? "bg-gradient-to-br from-indigo-600 to-purple-600 border-white shadow-lg"
                            : "bg-white border-gray-300"
                        }`}
                        style={{ marginLeft: "8px" }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Content */}
              <div className="flex flex-col h-full min-h-0">
                <div className="mb-2">
                  <h2 className="text-[10px] font-semibold text-indigo-600 uppercase tracking-wider mb-0.5">
                    Awards
                  </h2>
                  <h3 className="text-[20px] font-bold text-gray-900 mb-1 leading-tight">
                    결과가 증명하는
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                      실행의 속도
                    </span>
                  </h3>
                  <p className="text-[11px] text-gray-600 leading-snug">
                    제로원은 아이디어를 멈춰두지 않습니다.
                    <br />
                    가설을 검증하고 인정받기까지...
                  </p>
                </div>

                <div className="flex-1 min-h-0 flex flex-col gap-2">
                  {/* Award image */}
                  <div className="relative flex-1 min-h-[200px] max-h-[360px] rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-white">
                    {awards[activeIndex].image ? (
                      <Image
                        src={awards[activeIndex].image}
                        alt={awards[activeIndex].title}
                        fill
                        className="object-contain"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <div className="text-center p-4">
                          <div className="text-4xl mb-2">📸</div>
                          <p className="text-sm font-semibold text-gray-600">
                            사진 업로드 예정
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Award info */}
                  <div className="bg-white rounded-xl p-3 shadow-lg border border-gray-200">
                    <div className="text-[11px] font-semibold text-indigo-600 mb-1">
                      {awards[activeIndex].date}
                    </div>
                    <h4 className="text-base font-bold text-gray-900 mb-1.5">
                      {awards[activeIndex].title}
                    </h4>
                    <div className="inline-block px-2.5 py-0.5 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full mb-1.5">
                      <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                        {awards[activeIndex].award}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">
                      {awards[activeIndex].description}
                    </p>
                  </div>

                  {activeIndex < awards.length - 1 && (
                    <div className="mt-1.5 flex items-center justify-center gap-1 text-[10px] text-gray-400">
                      <span className="flex items-center gap-0.5 animate-bounce">
                        <ChevronDown className="w-3 h-3" />
                        <ChevronDown className="w-3 h-3 -ml-1" />
                      </span>
                      <span>아래로 스크롤 해주세요</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
                Awards
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                결과가 증명하는
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  실행의 속도
                </span>
              </h3>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                제로원은 아이디어를 멈춰두지 않습니다.
                <br />
                가설을 검증하고 인정받기까지...
              </p>

              {/* Current award details */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <div className="text-sm font-semibold text-indigo-600 mb-2">
                  {awards[activeIndex].date}
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {awards[activeIndex].title}
                </h4>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full mb-4">
                  <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                    {awards[activeIndex].award}
                  </span>
                </div>
                <p className="text-base text-gray-600">
                  {awards[activeIndex].description}
                </p>
              </div>

              {activeIndex < awards.length - 1 && (
                <div className="mt-4 flex items-center justify-center gap-1 text-xs text-gray-400">
                  <span className="flex items-center gap-0.5 animate-bounce">
                    <ChevronDown className="w-4 h-4" />
                    <ChevronDown className="w-4 h-4 -ml-1" />
                  </span>
                  <span>아래로 스크롤 해주세요</span>
                </div>
              )}
            </div>

            {/* Right: Timeline & Image */}
            <div className="relative h-[600px]">
              {/* Timeline */}
              <div
                ref={timelineRef}
                className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200"
              >
                <div
                  className="absolute top-0 left-0 w-full bg-gradient-to-b from-indigo-600 to-purple-600 transition-all duration-500"
                  style={{
                    height: `${((activeIndex + 1) / awards.length) * 100}%`,
                  }}
                />
              </div>

              {/* Timeline points */}
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-4">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center transition-all duration-500 ${
                      index === activeIndex ? "scale-110" : "scale-100"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border-4 transition-all duration-500 ${
                        index <= activeIndex
                          ? "bg-gradient-to-br from-indigo-600 to-purple-600 border-white shadow-lg"
                          : "bg-white border-gray-300"
                      }`}
                      style={{ marginLeft: "-7.5px" }}
                    />
                  </div>
                ))}
              </div>

              {/* Award image */}
              <div className="ml-12 h-full flex items-center justify-center">
                {awards[activeIndex].image ? (
                  <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                    <Image
                      src={awards[activeIndex].image}
                      alt={awards[activeIndex].title}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-full h-[500px] rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center border-4 border-white shadow-2xl">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">📸</div>
                      <p className="text-xl font-semibold text-gray-600">
                        사진 업로드 예정
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
