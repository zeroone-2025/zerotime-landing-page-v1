"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";

export function TeamZeroOne() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={sectionRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Together.jpg"
                alt="Team ZeroOne"
                width={600}
                height={400}
                priority
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
              TEAM ZEROONE
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              아이디어를 현실로 만드는 팀,
              <br />
              ZeroOne
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              우리는 학생들이 겪는 불편함을 직접 해결하고, 더 나은 캠퍼스 생활을 만들기 위해 다양한 서비스를 만듭니다.
              <br />
              <br />
              알리미, 친해지길 바래, 플로우 등 학생들의 실제 니즈에서 출발한 서비스들을 통해 전북대 학생들의 일상을 더 편리하게 만들어가고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
