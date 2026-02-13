"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function FinalChinba() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="final-section"
      className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Emotional message */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              약속이 어려웠던 게 아닙니다.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                방법이 불편했을 뿐입니다.
              </span>
            </h2>

            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              친바는 시간을 맞추는 과정을
              <br />
              <span className="font-semibold text-gray-900">
                가장 단순하게 만듭니다
              </span>
            </p>
          </div>

          {/* Final CTA */}
          <div className="relative inline-block">
            {/* Glow effect */}
            <div className="absolute -inset-6 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl blur-2xl opacity-40 animate-pulse" />

            <Link href="https://zerotime.kr" target="_blank">
              <Button
                size="lg"
                className="relative h-20 px-16 text-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-2xl hover:shadow-3xl rounded-2xl font-bold hover:scale-105 transition-all duration-300"
              >
                친바 시작하기
                <ArrowRight className="ml-3 h-8 w-8" />
              </Button>
            </Link>
          </div>

          {/* Additional info */}
          <p className="mt-8 text-sm text-gray-500">
            지금 일정 조율을 시작하세요
          </p>
        </div>
      </div>
    </section>
  );
}
