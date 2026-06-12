interface SplashPageProps {
  onStart: () => void;
}

export function SplashPage({ onStart }: SplashPageProps) {
  return (
    <div
      className="page-transition"
      style={{
        minHeight: '100dvh',
        background: 'var(--cream)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div style={{ padding: '28px 24px 0', flexShrink: 0 }}>
        <div
          style={{
            fontSize: 9, fontWeight: 700, letterSpacing: '0.12em',
            color: 'var(--text-muted)', textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', gap: 12,
          }}
        >
          <span style={{ whiteSpace: 'nowrap' }}>Restaurante Privado · 2026</span>
          <div style={{ flex: 1, height: 1, background: 'var(--border-c)' }} />
        </div>
      </div>

      {/* Main content */}
      <div
        style={{
          flex: 1, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: '24px 24px 16px',
        }}
      >
        {/* Hand-drawn heart illustration */}
        <svg
          width="280" height="230"
          viewBox="0 0 280 230"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ maxWidth: '90%' }}
        >
          {/* Outer heart */}
          <path
            d="M140 185 C140 185 58 134 58 82 C58 53 76 37 96 37 C112 37 126 50 140 64 C154 50 168 37 184 37 C204 37 222 53 222 82 C222 134 140 185 140 185Z"
            stroke="#0C0C0C" strokeWidth="2.8" strokeLinejoin="round" strokeLinecap="round"
          />
          {/* Inner heart — depth line */}
          <path
            d="M140 170 C140 170 72 124 72 83 C72 57 87 47 100 47 C113 47 125 58 140 72 C155 58 167 47 180 47 C193 47 208 57 208 83 C208 124 140 170 140 170Z"
            stroke="#0C0C0C" strokeWidth="1" strokeLinejoin="round" strokeLinecap="round"
            opacity="0.25"
          />

          {/* Left arrow pointing at heart */}
          <path d="M14 100 C28 96 42 90 56 85" stroke="#0C0C0C" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M50 79 L57 85 L50 91" stroke="#0C0C0C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* Right arrow pointing at heart */}
          <path d="M266 100 C252 96 238 90 224 85" stroke="#0C0C0C" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M230 79 L223 85 L230 91" stroke="#0C0C0C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />

          {/* Star top-left */}
          <path d="M56 24 L58.5 31 L66 33.5 L58.5 36 L56 43 L53.5 36 L46 33.5 L53.5 31Z"
            stroke="#0C0C0C" strokeWidth="1.3" strokeLinejoin="round" />
          {/* Star top-right */}
          <path d="M218 17 L220.5 24 L228 26.5 L220.5 29 L218 36 L215.5 29 L208 26.5 L215.5 24Z"
            stroke="#0C0C0C" strokeWidth="1.3" strokeLinejoin="round" />

          {/* Small dot accents */}
          <circle cx="36" cy="58" r="3" fill="#0C0C0C" />
          <circle cx="244" cy="58" r="3" fill="#0C0C0C" />
          <circle cx="82" cy="16" r="2.2" fill="#0C0C0C" />
          <circle cx="195" cy="14" r="2.2" fill="#0C0C0C" />
          <circle cx="24" cy="76" r="1.8" fill="#0C0C0C" opacity="0.5" />
          <circle cx="256" cy="76" r="1.8" fill="#0C0C0C" opacity="0.5" />

          {/* Wavy underline doodle */}
          <path
            d="M74 200 C84 194 94 208 104 200 C114 192 124 208 134 200 C144 192 154 208 164 200 C174 192 184 208 194 200 C204 192 210 200 210 200"
            stroke="#0C0C0C" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.45"
          />

          {/* Small zig-zag top center */}
          <path d="M124 10 L130 4 L136 10 L142 4 L148 10 L154 4 L160 10"
            stroke="#0C0C0C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
        </svg>

        {/* Title */}
        <div style={{ textAlign: 'center', marginTop: 12, marginBottom: 28 }}>
          <h1
            style={{
              fontSize: 'clamp(44px, 14vw, 64px)',
              fontWeight: 900,
              lineHeight: 0.86,
              letterSpacing: '-0.04em',
              textTransform: 'uppercase',
              marginBottom: 6,
              fontFamily: 'Inter, sans-serif',
            }}
          >
            UMA NOITE
          </h1>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(42px, 13vw, 60px)',
              fontWeight: 700,
              fontStyle: 'italic',
              lineHeight: 0.9,
              letterSpacing: '-0.01em',
            }}
          >
            Especial.
          </h2>
        </div>

        {/* Circular badge */}
        <svg width="158" height="158" viewBox="0 0 158 158">
          <defs>
            <path
              id="splashCircle"
              d="M 79 79 m -61 0 a 61 61 0 1 1 122 0 a 61 61 0 1 1 -122 0"
            />
          </defs>
          {/* Double ring */}
          <circle cx="79" cy="79" r="61" fill="none" stroke="#0C0C0C" strokeWidth="1.3" />
          <circle cx="79" cy="79" r="55" fill="none" stroke="#0C0C0C" strokeWidth="0.6" />
          <text fill="#0C0C0C" fontSize="8.2" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="3.8">
            <textPath href="#splashCircle">· NOSSA NOITE · COM AMOR · 2026 ·&nbsp;&nbsp;</textPath>
          </text>
          {/* Small heart inside badge */}
          <path
            d="M79 90 C79 90 66 81 66 73 C66 67 71 63 76 63 C78 63 79 65 79 67 C79 65 80 63 82 63 C87 63 92 67 92 73 C92 81 79 90 79 90Z"
            fill="none" stroke="#0C0C0C" strokeWidth="1.6" strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* COMEÇAR button */}
      <button
        onClick={onStart}
        style={{
          width: '100%',
          height: 62,
          background: 'var(--black)',
          color: 'var(--cream)',
          border: 'none',
          fontSize: 11,
          fontWeight: 900,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          flexShrink: 0,
          fontFamily: 'Inter, sans-serif',
        }}
      >
        COMEÇAR →
      </button>
    </div>
  );
}
