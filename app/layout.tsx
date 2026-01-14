import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZeroTime - 모든 학교 공지, 하나로 끝",
  description:
    "흩어진 학교 공지를 한곳에서 통합 조회. 맞춤 필터링과 실시간 알림으로 중요한 공지를 놓치지 마세요.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
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
      </head>
      <body className={`${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
