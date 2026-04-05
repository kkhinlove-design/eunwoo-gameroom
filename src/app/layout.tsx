import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "은우의 게임룸",
  description: "체스, 장기, 스도쿠를 즐겨보세요!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
