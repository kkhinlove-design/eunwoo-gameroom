'use client';

import { useEffect, useState } from 'react';

const GAMES = [
  {
    id: 'sudoku',
    emoji: '🧩',
    title: '스도쿠',
    description: '숫자 퍼즐의 왕! 빈칸을 채워 완성하자',
    features: ['입문~어려움 4단계', 'AI 대결', '친구와 멀티플레이'],
    url: 'https://eunwoo-sudoku.vercel.app',
    gradient: 'from-purple-500 to-indigo-600',
    bgLight: 'bg-purple-50',
    border: 'border-purple-200 hover:border-purple-400',
    badge: 'bg-purple-100 text-purple-700',
  },
  {
    id: 'chess',
    emoji: '♟️',
    title: '체스',
    description: '세계에서 가장 유명한 전략 보드게임',
    features: ['4단계 AI 대결', '로컬 2인 대전', '체크메이트를 노려라'],
    url: 'https://eunwoo-chess.vercel.app',
    gradient: 'from-emerald-500 to-teal-600',
    bgLight: 'bg-emerald-50',
    border: 'border-emerald-200 hover:border-emerald-400',
    badge: 'bg-emerald-100 text-emerald-700',
  },
  {
    id: 'janggi',
    emoji: '🏯',
    title: '장기',
    description: '한국 전통 전략 보드게임, 초와 한의 대결',
    features: ['4단계 AI 대결', '로컬 2인 대전', '장군! 외마!'],
    url: 'https://eunwoo-janggi.vercel.app',
    gradient: 'from-rose-500 to-red-600',
    bgLight: 'bg-rose-50',
    border: 'border-rose-200 hover:border-rose-400',
    badge: 'bg-rose-100 text-rose-700',
  },
  {
    id: 'rummikub',
    emoji: '🎯',
    title: '루미큐브',
    description: '숫자 타일로 조합을 만드는 전략 보드게임',
    features: ['온라인 멀티플레이', '친구와 대결', '전략적 타일 조합'],
    url: 'https://eunwoo-rummikub.vercel.app',
    gradient: 'from-amber-500 to-orange-600',
    bgLight: 'bg-amber-50',
    border: 'border-amber-200 hover:border-amber-400',
    badge: 'bg-amber-100 text-amber-700',
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen p-4 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-10">
          <div className="text-6xl mb-4 animate-float">🎮</div>
          <h1 className="text-4xl sm:text-5xl font-black mb-2">
            <span className="shimmer-text">은우의 게임룸</span>
          </h1>
          <p className="text-lg text-purple-400 font-medium">
            어떤 게임을 하고 싶어?
          </p>
        </div>

        {/* 게임 카드 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 sm:items-stretch">
          {GAMES.map((game, idx) => (
            <a
              key={game.id}
              href={game.url}
              target="_blank"
              rel="noopener noreferrer"
              className="game-card-link h-full"
            >
              <div
                className={`game-card text-center border-2 h-full flex flex-col ${game.border} ${mounted ? 'animate-bounce-in' : ''}`}
                style={{ animationDelay: `${idx * 0.15}s`, animationFillMode: 'both' }}
              >
                {/* 게임 아이콘 */}
                <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">{game.emoji}</div>

                {/* 제목 */}
                <h2 className={`text-xl sm:text-2xl font-black mb-1 sm:mb-2 bg-gradient-to-r ${game.gradient} bg-clip-text text-transparent`}>
                  {game.title}
                </h2>

                {/* 설명 */}
                <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">
                  {game.description}
                </p>

                {/* 기능 뱃지 */}
                <div className="flex flex-wrap justify-center gap-1.5 mb-4 sm:mb-5 flex-1">
                  {game.features.map((f) => (
                    <span
                      key={f}
                      className={`text-xs font-semibold px-2 sm:px-2.5 py-1 rounded-full ${game.badge}`}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* 플레이 버튼 */}
                <div className={`py-2.5 sm:py-3 rounded-xl font-bold text-white bg-gradient-to-r ${game.gradient} shadow-lg mt-auto`}>
                  플레이하기
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* 푸터 */}
        <div className="text-center mt-10 text-purple-300 text-sm">
          Made with love for 은우
        </div>
      </div>
    </div>
  );
}
