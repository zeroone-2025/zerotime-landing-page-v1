"use client";

import { useEffect, useRef, useState } from "react";
import { User, Clock, MessageSquare, Handshake, ChevronDown } from "lucide-react";

const screens = [
  {
    id: "profile",
    icon: User,
    title: "선배 프로필",
    label: "Profile",
    description: "선배님의 경력, 전공, 활동 지역 등을 한눈에 확인",
    mockup: {
      name: "김지현 멘토",
      role: "프론트엔드 개발자 / 전주",
      tags: ["IT/개발", "전북", "3년차"],
      bio: "전북대 컴퓨터공학과 졸업 후 지역 IT 기업에서 성장 중입니다.",
    },
  },
  {
    id: "timeline",
    icon: Clock,
    title: "커리어 타임라인",
    label: "Timeline",
    description: "멘토의 커리어 여정을 시간순으로 탐색",
    mockup: {
      events: [
        { year: "2020", text: "전북대 컴퓨터공학과 졸업" },
        { year: "2021", text: "지역 스타트업 입사" },
        { year: "2023", text: "프론트엔드 리드 승진" },
        { year: "2024", text: "플로우 멘토 참여" },
      ],
    },
  },
  {
    id: "qna",
    icon: MessageSquare,
    title: "Q&A",
    label: "Q&A",
    description: "궁금한 점을 멘토에게 직접 질문",
    mockup: {
      questions: [
        { q: "지역에서 개발자로 일하면 성장이 가능한가요?", a: "충분히 가능합니다. 오히려 다양한 역할을 경험할 수 있어요." },
        { q: "연봉 수준은 어떤가요?", a: "서울 대비 80~90% 수준이지만, 생활비를 고려하면 체감 차이는 적습니다." },
      ],
    },
  },
  {
    id: "matching",
    icon: Handshake,
    title: "멘토-멘티 매칭",
    label: "Matching",
    description: "관심 분야와 지역 기반으로 최적의 멘토를 추천",
    mockup: {
      matches: [
        { name: "이서준", field: "마케팅", match: "92%" },
        { name: "박민지", field: "디자인", match: "88%" },
        { name: "최현우", field: "개발", match: "95%" },
      ],
    },
  },
];

function ProfileMockup({ data }: { data: typeof screens[0]["mockup"] }) {
  const d = data as { name: string; role: string; tags: string[]; bio: string };
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex items-center gap-3 md:gap-4">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
          <User className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </div>
        <div>
          <p className="text-base md:text-xl font-bold text-gray-900">{d.name}</p>
          <p className="text-sm md:text-base text-gray-500">{d.role}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {d.tags.map((tag) => (
          <span key={tag} className="px-2.5 py-0.5 md:px-3 md:py-1 text-xs md:text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-sm md:text-base text-gray-600 leading-relaxed">{d.bio}</p>
    </div>
  );
}

function TimelineMockup({ data }: { data: typeof screens[1]["mockup"] }) {
  const d = data as { events: { year: string; text: string }[] };
  return (
    <div className="space-y-3 md:space-y-4">
      {d.events.map((event, i) => (
        <div key={i} className="flex gap-3 md:gap-4">
          <div className="flex flex-col items-center">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-blue-600" />
            {i < d.events.length - 1 && <div className="w-0.5 flex-1 bg-gray-200 mt-1" />}
          </div>
          <div className="pb-3 md:pb-4">
            <span className="text-xs md:text-sm font-bold text-blue-600">{event.year}</span>
            <p className="text-sm md:text-base text-gray-700">{event.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function QnaMockup({ data }: { data: typeof screens[2]["mockup"] }) {
  const d = data as { questions: { q: string; a: string }[] };
  return (
    <div className="space-y-3 md:space-y-4">
      {d.questions.map((item, i) => (
        <div key={i} className="space-y-1.5 md:space-y-2">
          <div className="p-2.5 md:p-3 bg-gray-100 rounded-xl rounded-tl-none">
            <p className="text-xs md:text-sm font-medium text-gray-900">Q. {item.q}</p>
          </div>
          <div className="p-2.5 md:p-3 bg-blue-50 rounded-xl rounded-tr-none ml-3 md:ml-4">
            <p className="text-xs md:text-sm text-blue-800">A. {item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function MatchingMockup({ data }: { data: typeof screens[3]["mockup"] }) {
  const d = data as { matches: { name: string; field: string; match: string }[] };
  return (
    <div className="space-y-2.5 md:space-y-3">
      {d.matches.map((m, i) => (
        <div key={i} className="flex items-center justify-between p-3 md:p-4 bg-gray-50 rounded-xl border border-gray-100">
          <div className="flex items-center gap-2.5 md:gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xs md:text-sm">{m.name[0]}</span>
            </div>
            <div>
              <p className="text-sm md:text-base font-semibold text-gray-900">{m.name}</p>
              <p className="text-xs md:text-sm text-gray-500">{m.field}</p>
            </div>
          </div>
          <span className="text-base md:text-lg font-bold text-blue-600">{m.match}</span>
        </div>
      ))}
    </div>
  );
}

const mockupRenderers = [ProfileMockup, TimelineMockup, QnaMockup, MatchingMockup];

export function ScreenPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrolled = -rect.top;
      const segmentHeight = sectionHeight / screens.length;
      const index = Math.min(
        Math.max(Math.floor(scrolled / segmentHeight), 0),
        screens.length - 1
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Mockup = mockupRenderers[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-50"
      style={{ minHeight: `${screens.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center py-12 md:py-0 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6 w-full">
          {/* Section Title */}
          <div className="text-center mb-4 md:mb-12">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-1 md:mb-3">
              Preview
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              실제 화면 미리보기
            </h3>
          </div>

          <div className="flex gap-8 items-start">
            {/* Left: Timeline Bar (desktop only) */}
            <div className="hidden md:flex flex-shrink-0 flex-col items-center gap-0">
              {screens.map((screen, index) => (
                <div key={screen.id} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                      index === activeIndex
                        ? "bg-gradient-to-br from-blue-600 to-indigo-600 scale-110 shadow-lg"
                        : index < activeIndex
                        ? "bg-blue-200"
                        : "bg-gray-200"
                    }`}
                  >
                    <screen.icon
                      className={`w-5 h-5 ${
                        index === activeIndex ? "text-white" : index < activeIndex ? "text-blue-600" : "text-gray-400"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-xs mt-1 font-medium transition-colors duration-300 ${
                      index === activeIndex ? "text-blue-600" : "text-gray-400"
                    }`}
                  >
                    {screen.label}
                  </span>
                  {index < screens.length - 1 && (
                    <div
                      className={`w-0.5 h-12 transition-colors duration-500 ${
                        index < activeIndex ? "bg-blue-400" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Center: Mockup Screen */}
            <div className="flex-1 max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Browser top bar */}
                <div className="bg-gray-900 px-4 md:px-6 py-2 md:py-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-[10px] md:text-xs text-gray-400 font-mono">flow.zerotime.kr</span>
                  <div className="w-8 md:w-12" />
                </div>

                {/* Screen Header */}
                <div className="px-4 md:px-8 pt-4 md:pt-6 pb-3 md:pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 md:gap-3">
                    <div className="p-1.5 md:p-2 rounded-lg md:rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex-shrink-0">
                      {(() => {
                        const Icon = screens[activeIndex].icon;
                        return <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />;
                      })()}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm md:text-base font-bold text-gray-900">{screens[activeIndex].title}</h4>
                      <p className="text-xs md:text-sm text-gray-500 truncate">{screens[activeIndex].description}</p>
                    </div>
                  </div>
                </div>

                {/* Screen Content */}
                <div className="p-4 md:p-8 min-h-[200px] md:min-h-[320px]">
                  <Mockup data={screens[activeIndex].mockup} />
                </div>
              </div>

              {/* Mobile: Dot Indicators + Scroll hint */}
              <div className="flex md:hidden flex-col items-center mt-4 gap-2">
                <div className="flex items-center gap-2">
                  {screens.map((_, index) => (
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
                {activeIndex < screens.length - 1 && (
                  <div className="flex flex-col items-center gap-1 animate-bounce">
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                    <ChevronDown className="w-5 h-5 text-gray-300 -mt-3.5" />
                  </div>
                )}
                {activeIndex < screens.length - 1 && (
                  <p className="text-xs text-gray-400">아래로 스크롤 해주세요</p>
                )}
              </div>
            </div>

            {/* Right: Scroll Indicator (desktop only) */}
            <div
              className={`hidden md:flex flex-shrink-0 flex-col items-center gap-3 transition-opacity duration-500 ${
                activeIndex < screens.length - 1 ? "opacity-100" : "opacity-0"
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
