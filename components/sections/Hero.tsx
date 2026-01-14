"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-8 opacity-0 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          전북대 공지 알림 서비스
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 opacity-0 animate-fade-in-up animation-delay-100">
          전북대학교 공지,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            ZeroTime
          </span>{" "}
          하나로 끝.
        </h1>

        {/* Sub copy */}
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up animation-delay-200">
          학과, 단과대, 사업단 등 흩어진 공지사항을 한곳에서. 맞춤 필터링과
          실시간 알림으로 중요한 정보를 놓치지 마세요.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-300">
          <Link href="https://zerotime.kr" target="_blank">
            <Button
              size="lg"
              className="h-14 px-8 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30"
            >
              바로 사용해보기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="h-14 px-8 text-lg border-gray-300 hover:bg-gray-50"
            onClick={() => {
              document
                .querySelector("#features")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            더 알아보기
          </Button>
        </div>

        {/* Stats or social proof */}
        {/* <div className="mt-16 flex items-center justify-center gap-8 sm:gap-12 text-gray-500 opacity-0 animate-fade-in-up animation-delay-400">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">
              1,000+
            </div>
            <div className="text-sm">활성 사용자</div>
          </div>
          <div className="w-px h-12 bg-gray-200" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">
              10+
            </div>
            <div className="text-sm">지원 학교</div>
          </div>
          <div className="w-px h-12 bg-gray-200" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">
              실시간
            </div>
            <div className="text-sm">알림 제공</div>
          </div>
        </div> */}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-500">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
