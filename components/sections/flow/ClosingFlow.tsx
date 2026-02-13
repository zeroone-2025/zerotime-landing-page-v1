"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function ClosingFlow() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Strong message */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
              경험을 흐름으로 연결하다
            </span>
          </h2>

          {/* Value proposition */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            정보 단절 없는 지역 정착,
            <br />
            <span className="font-semibold text-gray-900">Flow가 만듭니다</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="https://zerotime.kr" target="_blank">
              <Button
                size="lg"
                className="h-14 px-10 text-base bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 shadow-lg hover:shadow-xl rounded-xl font-semibold hover:scale-105 transition-all duration-300"
              >
                플로우로 가기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link href="https://zerotime.kr" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-10 text-base border-2 border-orange-600 text-orange-600 hover:bg-orange-50 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
              >
                선배 정보 입력하기
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
