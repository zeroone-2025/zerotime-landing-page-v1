"use client";

import { ArrowRight, Users, TrendingUp, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Users, label: "현재 멘토", value: "모집중", color: "from-blue-500 to-cyan-500" },
  { icon: TrendingUp, label: "멘토링 진행", value: "진행예정", color: "from-violet-500 to-purple-500" },
  { icon: MapPin, label: "지역 커버", value: "전북", color: "from-orange-500 to-red-500" },
];

export function HeroMentor() {
  // 현재 날짜 가져오기
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const formattedDate = `${year}.${month}.${day}`;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-50">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-300 to-indigo-300 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              🎯 멘토 모집 중
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              후배들은 아직도
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                서울만 바라보고 있습니다
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              서울의 대기업 몇 곳만 바라보다 지쳐가는 후배들에게,
              <br />
              당신의 경험이 다른 길이 있다는 증거가 됩니다.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link href="https://zerotime.kr" target="_blank">
                <Button
                  size="lg"
                  className="h-12 sm:h-14 px-5 sm:px-8 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-2xl rounded-xl font-semibold hover:scale-105 transition-all duration-300"
                >
                  멘토로 참여하기
                  <ArrowRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
              <Link href="/flow">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 sm:h-14 px-5 sm:px-8 text-sm sm:text-base border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
                >
                  서비스 보러가기
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Stats Cards */}
          <div className="space-y-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-x-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Current Date - Small text */}
            <div className="text-right">
              <p className="text-xs text-gray-500">
                {formattedDate} 기준
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
