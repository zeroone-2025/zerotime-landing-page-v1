"use client";

import { User, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reviews = [
  {
    name: "김민수",
    department: "컴퓨터공학과",
    year: "21학번",
    message:
      "장학금 공지를 놓칠 뻔했는데 알리미 덕분에 바로 확인했어요. 정말 유용합니다!",
  },
  {
    name: "이지은",
    department: "경영학과",
    year: "22학번",
    message:
      "학과 공지, 단과대 공지 일일이 확인하기 힘들었는데 한 곳에서 다 볼 수 있어서 너무 편해요.",
  },
  {
    name: "박준혁",
    department: "전자공학과",
    year: "20학번",
    message:
      "취업 관련 공지를 실시간으로 받아볼 수 있어서 좋아요. 이제 중요한 정보를 놓치지 않아요!",
  },
];

export function ReviewsHybrid() {
  const { ref: counterRef, isVisible: counterVisible } = useScrollAnimation();
  const { ref: reviewsRef, isVisible: reviewsVisible } = useScrollAnimation();

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Counter Section */}
        <div
          ref={counterRef}
          className={`text-center mb-16 transition-all duration-700 ${
            counterVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-100">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 border-2 border-white"
                />
              ))}
            </div>
            <p className="text-lg font-semibold text-gray-900">
              지금 <span className="text-blue-600">95명</span>의 전북대 학생이
              사용 중
            </p>
          </div>
        </div>

        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            counterVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Reviews
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            학생들의 생생한 후기
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            알리미를 사용하는 전북대 학생들의 실제 경험을 들어보세요.
          </p>
        </div>

        {/* Reviews Grid */}
        <div ref={reviewsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${
                reviewsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="w-12 h-12 text-blue-600" />
                </div>

                {/* Profile */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-500">
                      {review.department} {review.year}
                    </p>
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <p className="text-gray-700 leading-relaxed">
                    "{review.message}"
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
