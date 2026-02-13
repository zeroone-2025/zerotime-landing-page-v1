"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function DemoChinba() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-3">
              Demo
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              친바가 만드는 연결
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              친구들과의 약속잡기, 영상으로 확인해보세요.
            </p>
          </div>

          {/* YouTube embed */}
          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/HdHd8kAWb24"
              title="Chinba Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
