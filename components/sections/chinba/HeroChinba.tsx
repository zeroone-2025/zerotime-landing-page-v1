"use client";

import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroChinba() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Subtle animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-100 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-teal-100 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-20">
        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
            "언제 시간 돼?"를
          </span>
          <br />
          이제 묻지 않아도 됩니다
        </h1>

        {/* Sub copy */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          단톡방에서 끝없이 오가는 시간 조율
          <br />
          어제도, 오늘도, 결국 흐지부지된 약속들
          <br />
          <span className="font-semibold text-gray-900">
            친바는 그 불편함에서 시작되었습니다
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="https://zerotime.kr" target="_blank">
            <Button
              size="lg"
              className="h-14 px-10 text-base bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg hover:shadow-xl rounded-xl font-semibold hover:scale-105 transition-all duration-300"
            >
              친바 사용해보기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          <Button
            size="lg"
            variant="outline"
            className="h-14 px-10 text-base border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
            onClick={() => {
              document
                .getElementById("preview-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Play className="mr-2 h-5 w-5" />
            화면 먼저 보기
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
