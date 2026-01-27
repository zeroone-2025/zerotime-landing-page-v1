import type { Metadata } from "next";
import Script from "next/script";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZeroTime - 전북대학교 공지, 하나로 끝",
  description:
    "흩어진 학교 공지를 한곳에서 통합 조회. 맞춤 필터링과 실시간 알림으로 중요한 공지를 놓치지 마세요.",

  manifest: "/manifest.json",
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
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NTMKSN2GSM"
        />
        <Script id="ga-init">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-NTMKSN2GSM');`}
        </Script>
      </head>
      <body className={`${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
