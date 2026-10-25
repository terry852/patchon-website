import type { Metadata } from "next";
import { Noto_Sans_TC, Space_Grotesk } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_TC({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  preload: false,
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "PATCH ON+ 宿醉貼 | 精密透皮貼片",
  description:
    "PATCH ON+ 透皮貼片：飲酒前 20 分鐘貼上，唔使食、唔使沖水，效用可長達 24 小時。莎莎、King’s Wine Cellar 及指定網店有售。",
  openGraph: {
    title: "PATCH ON+ 宿醉貼",
    description: "飲酒前貼一片，陪你盡興到最後。",
    locale: "zh_HK",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-Hant-HK"
      className={`${notoSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
