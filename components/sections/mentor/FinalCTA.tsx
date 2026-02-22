"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-200 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          단 3분,
          <br />
          간단한 설문으로 시작합니다
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          지금 바로 선배로 참여하세요
        </p>
        <Link href="https://zerotime.kr" target="_blank">
          <Button
            size="lg"
            className="h-16 md:h-20 px-12 md:px-16 text-xl md:text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl hover:shadow-2xl rounded-2xl font-bold hover:scale-105 transition-all duration-300"
          >
            선배로 참여하기
            <ArrowRight className="ml-3 h-6 w-6 md:h-8 md:w-8" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
