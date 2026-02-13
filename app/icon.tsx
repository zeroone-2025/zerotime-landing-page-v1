import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "0px", // 로고와 동일하게 네모나게 (약간 둥글게 원하면 6px 등으로 설정)
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 흰색 배경을 이미 div가 가지고 있으므로, rect는 굳이 필요 없음 
              하지만 SVG 내부 호환성을 위해 추가할 수도 있음. */}
          
          <g transform="translate(50, 50) skewX(-6) translate(-50, -50)">
            <path
              d="M20 20 H80 V32 L40 68 H80 V80 H20 V68 L60 32 H20 V20 Z"
              fill="#111827"
            />
            <rect x="84" y="70" width="10" height="10" fill="#3B82F6" />
          </g>
        </svg>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
