"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function ProblemChinba() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left: Text */}
          <div>
            <h2 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
              Problem
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              시간 조율,
              <br />
              왜 이렇게 복잡했을까요?
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <span className="text-2xl mr-3">❌</span>
                <p className="text-lg text-gray-600">
                  <span className="font-semibold text-gray-900">일일이 연락하며 시간 맞추기</span>
                  <br />
                  "나 이 시간 돼", "나는 안 돼" 무한 반복
                </p>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-3">❌</span>
                <p className="text-lg text-gray-600">
                  <span className="font-semibold text-gray-900">단톡방에서 시간 조율</span>
                  <br />
                  메시지에 묻혀버린 일정, 누가 가능한지 헷갈림
                </p>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-3">❌</span>
                <p className="text-lg text-gray-600">
                  <span className="font-semibold text-gray-900">When2Meet 사용</span>
                  <br />
                  링크는 잊히고, 방은 사라지고, 다시 만들기 번거로움
                </p>
              </div>
            </div>

            {/* Solution */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200">
              <p className="text-xl sm:text-2xl font-bold text-gray-900 leading-relaxed">
                그래서 우리는
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  '기억되고, 관리되는 일정 조율'
                </span>
                을 만들었습니다
              </p>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 flex flex-col items-center justify-center border-4 border-white shadow-2xl p-8 overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden opacity-20">
                <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-300 rounded-full blur-2xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-teal-300 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
              </div>

              {/* Illustration content */}
              <div className="relative z-10 w-full space-y-6">
                {/* 1. Messy chat messages */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border-2 border-emerald-200">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-300 rounded-full" />
                      <div className="bg-gray-100 rounded-lg px-3 py-1 text-xs">언제 시간 돼?</div>
                    </div>
                    <div className="flex items-center gap-2 justify-end">
                      <div className="bg-emerald-100 rounded-lg px-3 py-1 text-xs">나는 안 돼 😅</div>
                      <div className="w-6 h-6 bg-emerald-300 rounded-full" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-300 rounded-full" />
                      <div className="bg-gray-100 rounded-lg px-3 py-1 text-xs">나 이 시간 가능</div>
                    </div>
                    <div className="flex items-center gap-2 justify-end">
                      <div className="bg-emerald-100 rounded-lg px-3 py-1 text-xs">아 나 그때 약속 있어</div>
                      <div className="w-6 h-6 bg-teal-300 rounded-full" />
                    </div>
                  </div>
                  <div className="mt-2 text-center text-xs text-gray-400">😵 😓 🤔</div>
                </div>

                {/* 2. Broken When2Meet grid */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg border-2 border-red-200 relative overflow-hidden">
                  <div className="grid grid-cols-5 gap-1 opacity-50">
                    {[...Array(15)].map((_, i) => (
                      <div key={i} className={`h-4 rounded ${i % 3 === 0 ? 'bg-emerald-200' : 'bg-gray-200'}`} />
                    ))}
                  </div>
                  {/* Broken link icon */}
                  <div className="absolute inset-0 flex items-center justify-center bg-white/80">
                    <div className="text-4xl">🔗💔</div>
                  </div>
                  <div className="absolute top-2 right-2 text-red-500 text-xs font-bold">링크 분실</div>
                </div>

                {/* 3. Confused people */}
                <div className="flex justify-center gap-4">
                  <div className="text-center">
                    <div className="text-3xl mb-1">😵‍💫</div>
                    <div className="text-xs text-gray-600">어디갔지?</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-1">😩</div>
                    <div className="text-xs text-gray-600">또 만들어?</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-1">🤦</div>
                    <div className="text-xs text-gray-600">복잡해...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
