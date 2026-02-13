import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/sections/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://home.zerotime.kr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | 제로타임",
    default: "제로타임",
  },
  description:
    "공지 확인부터 시간 조율, 취업 준비까지 대학생의 하루를 한 번에 관리하세요",

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
    url: siteUrl,
    title: "제로타임",
    description:
      "공지 확인부터 시간 조율, 취업 준비까지 대학생의 하루를 한 번에 관리하세요",
    siteName: "제로타임",
    images: [
      {
        url: "/logo.png",
        alt: "제로타임 로고",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "제로타임",
    description:
      "공지 확인부터 시간 조율, 취업 준비까지 대학생의 하루를 한 번에 관리하세요",
    images: ["/logo.png"],
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
