"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    emoji: "\ud83c\udf0d",
    title: "\uc9c0\uc5ed \uccad\ub144",
    description:
      "\uc9c0\uc5ed\uc5d0\uc11c \uc131\uc7a5\ud55c \uc120\ubc30\uc640 \ud6c4\ubc30\ub97c \uc5f0\uacb0\ud569\ub2c8\ub2e4. \uc11c\uc6b8\ub9cc\uc774 \ub2f5\uc774 \uc544\ub2cc, \ub2e4\uc591\ud55c \uc9c0\uc5ed \uae30\ubc18 \ucee4\ub9ac\uc5b4 \uacbd\ud5d8\uc744 \uacf5\uc720\ud569\ub2c8\ub2e4.",
  },
  {
    emoji: "\ud83d\udcca",
    title: "\ucee4\ub9ac\uc5b4 \ub370\uc774\ud130\ud654",
    description:
      "\uc120\ubc30\ub4e4\uc758 \ub2e4\uc591\ud55c \uacbd\ud5d8\uc744 \uccb4\uacc4\uc801\uc73c\ub85c \uc815\ub9ac\ud569\ub2c8\ub2e4. \ud750\uc5b4\uc838 \uc788\ub358 \uc9c4\ub85c \uc815\ubcf4\ub97c \ud55c\uacf3\uc5d0 \ubaa8\uc544 \ud6c4\ubc30\ub4e4\uc774 \uc27d\uac8c \ud0d0\uc0c9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
  },
  {
    emoji: "\ud83c\udfaf",
    title: "\ud604\uc2e4\uc801 \uc120\ud0dd\uc9c0 \ud50c\ub7ab\ud3fc",
    description:
      "\uc11c\uc6b8\ub9cc\uc774 \ub2f5\uc774 \uc544\ub2cc, \ub2e4\uc591\ud55c \ucee4\ub9ac\uc5b4 \uacbd\ub85c\ub97c \uc81c\uc2dc\ud569\ub2c8\ub2e4. \uc2e4\uc81c \uc120\ubc30\ub4e4\uc758 \uacbd\ud5d8\uc744 \ubc14\ud0d5\uc73c\ub85c \ud604\uc2e4\uc801\uc778 \uc120\ud0dd\uc9c0\ub97c \ub9cc\ub4e4\uc5b4\uac11\ub2c8\ub2e4.",
  },
];

export function FlowFeatures() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            About Flow
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Flow는 이런 서비스입니다
          </h3>
        </div>

        {/* Feature Cards */}
        <div className="space-y-6">
          {features.map((feature, index) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div
                key={feature.title}
                ref={ref}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <span className="text-5xl flex-shrink-0">{feature.emoji}</span>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h4>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
