import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | ZeroTime",
    default: "ZeroTime",
  },
  description:
    "흩어진 학교 공지를 한곳에서 통합 조회. 맞춤 필터링과 실시간 알림으로 중요한 공지를 놓치지 마세요.",

  manifest: "/manifest.json",
  // icons: { 
  //   icon: [
  //     { url: "/logo-symbol.svg", type: "image/svg+xml" },
  //     { url: "/favicon.ico" },
  //   ],
  //   shortcut: "/favicon.ico",
  //   apple: "/apple-icon-180x180.png",
  //   other: {
  //     rel: "apple-touch-icon-precomposed",
  //     url: "/apple-icon-180x180.png",
  //   },
  // },
  openGraph: {
    type: "website",
    url: "https://zerotime.kr",
    title: "ZeroTime - 모든 학교 공지, 하나로 끝",
    description:
      "흩어진 학교 공지를 한곳에서 통합 조회. 맞춤 필터링과 실시간 알림으로 중요한 공지를 놓치지 마세요.",
    siteName: "ZeroTime",
    images: [
      {
        url: "/apple-icon-180x180.png",
        width: 180,
        height: 180,
        alt: "ZeroTime Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "ZeroTime - 모든 학교 공지, 하나로 끝",
    description:
      "흩어진 학교 공지를 한곳에서 통합 조회. 맞춤 필터링과 실시간 알림으로 중요한 공지를 놓치지 마세요.",
    images: ["/apple-icon-180x180.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
