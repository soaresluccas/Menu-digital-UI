import { useState, useEffect, useRef, useCallback } from 'react';

interface IntroPageProps {
  onFinish: () => void;
}

const BEAT = 550;

const C: Record<string, string> = {
  red: '#E8003C', blue: '#0042FF', yellow: '#FFE033', green: '#006B3C',
  black: '#0C0C0C', white: '#FFFFFF', cream: '#F4F1E8', purple: '#6B00FF',
};

function Circle({ size, num }: { size: number; num: number }) {
  return (
    <div style={{
      width: size, height: size,
      border: '3px solid currentColor', borderRadius: '50%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900, fontSize: size * 0.228, lineHeight: 1 }}>
        {num}
      </span>
    </div>
  );
}

function Word({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      textAlign: 'center', lineHeight: 1,
      padding: '0 24px', letterSpacing: '-0.02em',
      ...style,
    }}>
      {children}
    </div>
  );
}

const FRAMES: { bg: string; color: string; content: React.ReactNode }[] = [
  // 1 — countdown 5
  { bg: 'red', color: 'white', content: <Circle size={280} num={5} /> },
  // 2 — countdown 4
  { bg: 'blue', color: 'white', content: <Circle size={230} num={4} /> },
  // 3 — countdown 3
  { bg: 'yellow', color: 'black', content: <Circle size={185} num={3} /> },
  // 4 — countdown 2
  { bg: 'green', color: 'white', content: <Circle size={140} num={2} /> },
  // 5 — countdown 1
  { bg: 'black', color: 'yellow', content: <Circle size={95} num={1} /> },
  // 6 — BEM
  {
    bg: 'yellow', color: 'black',
    content: (
      <Word style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 96, fontStyle: 'italic', transform: 'skewX(-6deg)' }}>
        BEM
      </Word>
    ),
  },
  // 7 — VINDOS.
  {
    bg: 'black', color: 'white',
    content: (
      <Word style={{ fontFamily: "'Anton', sans-serif", fontSize: 88, letterSpacing: '0.04em' }}>
        VINDOS<span style={{ color: C.red }}>.</span>
      </Word>
    ),
  },
  // 8 — ♡
  {
    bg: 'red', color: 'white',
    content: (
      <Word style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 110, fontWeight: 900 }}>
        ♡
      </Word>
    ),
  },
  // 9 — A NOITE É NOSSA
  {
    bg: 'blue', color: 'white',
    content: (
      <Word style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 78, lineHeight: 1.05 }}>
        A NOITE<br />É NOSSA
      </Word>
    ),
  },
  // 10 — APROVEITEM
  {
    bg: 'green', color: 'white',
    content: (
      <Word style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 64, textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1.1 }}>
        APROVEITEM<br />
        <span style={{ fontWeight: 300, fontStyle: 'italic', fontSize: '0.6em' }}>cada minuto</span>
      </Word>
    ),
  },
  // 11 — AMOR x3
  {
    bg: 'black', color: 'white',
    content: (
      <Word style={{ fontFamily: "'Space Mono', monospace", fontSize: 42, lineHeight: 1.6, textAlign: 'left' }}>
        AMOR<br />AMOR<br />AMOR <span style={{ color: C.red }}>♡</span>
      </Word>
    ),
  },
  // 12 — com quem a gente ama
  {
    bg: 'purple', color: 'white',
    content: (
      <Word style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 700, fontSize: 68, lineHeight: 1.1 }}>
        com quem<br />a gente ama
      </Word>
    ),
  },
  // 13 — DE VERDADE
  {
    bg: 'yellow', color: 'black',
    content: (
      <Word style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 80, lineHeight: 1, letterSpacing: '-0.03em' }}>
        DE<br />VERDADE
      </Word>
    ),
  },
  // 14 — ♡ ♡ ♡
  {
    bg: 'red', color: 'white',
    content: (
      <Word style={{ fontSize: 72, lineHeight: 1.3 }}>
        ♡ ♡ ♡
      </Word>
    ),
  },
  // 15 — NOSSO
  {
    bg: 'blue', color: 'white',
    content: (
      <Word style={{ fontFamily: "'Anton', sans-serif", fontSize: 100, letterSpacing: '0.02em' }}>
        NOSSO
      </Word>
    ),
  },
  // 16 — CARDÁPIO.
  {
    bg: 'cream', color: 'black',
    content: (
      <Word style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900, fontSize: 'clamp(56px, 18vw, 84px)', letterSpacing: '-0.04em', textTransform: 'uppercase' }}>
        CARDÁPIO<span style={{ color: C.red }}>.</span>
      </Word>
    ),
  },
  // 17 — com amor, boa noite
  {
    bg: 'black', color: 'white',
    content: (
      <Word style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 900, fontSize: 56, lineHeight: 1.2 }}>
        com amor,<br />boa noite ♡
      </Word>
    ),
  },
];

export function IntroPage({ onFinish }: IntroPageProps) {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fadingRef = useRef(false);
  const onFinishRef = useRef(onFinish);
  useEffect(() => { onFinishRef.current = onFinish; }, [onFinish]);

  const advance = useCallback(() => {
    if (fadingRef.current) return;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setCurrent(prev => {
      if (prev >= FRAMES.length - 1) {
        fadingRef.current = true;
        setFading(true);
        setTimeout(() => onFinishRef.current(), 400);
        return prev;
      }
      return prev + 1;
    });
  }, []);

  // Auto-advance timer: reset whenever `current` changes
  useEffect(() => {
    if (fadingRef.current) return;
    timerRef.current = setTimeout(advance, BEAT);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, advance]);

  const frame = FRAMES[current];
  const bg = C[frame.bg] ?? frame.bg;
  const color = C[frame.color] ?? frame.color;

  return (
    <div
      onClick={advance}
      style={{
        height: '100dvh',
        background: bg,
        color,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        opacity: fading ? 0 : 1,
        transition: fading ? 'opacity 0.4s ease' : 'background 0s',
        cursor: 'pointer',
        userSelect: 'none',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {/* Progress dashes */}
      <div style={{
        position: 'absolute', top: 18, left: 20, right: 20,
        display: 'flex', gap: 4, zIndex: 50,
        pointerEvents: 'none',
        mixBlendMode: 'difference',
      }}>
        {FRAMES.map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1, height: 2,
              background: i <= current ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.25)',
              transition: 'background 0.1s',
            }}
          />
        ))}
      </div>

      {/* Skip hint */}
      <div style={{
        position: 'absolute', bottom: 24, right: 24,
        fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.4)',
        fontFamily: 'Inter, sans-serif',
        pointerEvents: 'none',
        mixBlendMode: 'difference',
      }}>
        Toque para avançar →
      </div>

      {/* Frame content */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', flex: 1 }}>
        {frame.content}
      </div>
    </div>
  );
}
