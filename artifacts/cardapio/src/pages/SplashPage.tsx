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
        position: 'relative',
      }}
    >
      {/* Red top accent stripe */}
      <div style={{ width: '100%', height: 4, background: 'var(--red)', flexShrink: 0 }} />

      {/* Header */}
      <div style={{ padding: '22px 24px 0', flexShrink: 0 }}>
        <div style={{
          fontSize: 9, fontWeight: 700, letterSpacing: '0.14em',
          color: 'var(--text-muted)', textTransform: 'uppercase',
          display: 'flex', alignItems: 'center', gap: 10,
          fontFamily: 'Inter, sans-serif',
        }}>
          <span style={{ whiteSpace: 'nowrap' }}>Restaurante Privado · 2026</span>
          <div style={{ flex: 1, height: 1, background: 'var(--border-c)' }} />
        </div>
      </div>

      {/* Main illustration area */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 32px 0',
        gap: 32,
      }}>

        {/* Abstract SVG — two interlocked rings + scribble accent */}
        <svg
          width="260" height="160"
          viewBox="0 0 260 160"
          fill="none"
          style={{ maxWidth: '85%', overflow: 'visible' }}
        >
          {/* Left ring */}
          <circle cx="95" cy="78" r="62" stroke="#0C0C0C" strokeWidth="1.8" fill="none" />
          {/* Right ring */}
          <circle cx="165" cy="78" r="62" stroke="#0C0C0C" strokeWidth="1.8" fill="none" />

          {/* Red filled dot at the overlap center — accent color */}
          <circle cx="130" cy="78" r="7" fill="var(--red)" />

          {/* Small tick marks on left ring — doodle detail */}
          <path d="M 33 78 L 39 78" stroke="#0C0C0C" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M 37 58 L 42 62" stroke="#0C0C0C" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M 37 98 L 42 94" stroke="#0C0C0C" strokeWidth="1.4" strokeLinecap="round" />

          {/* Small tick marks on right ring */}
          <path d="M 227 78 L 221 78" stroke="#0C0C0C" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M 223 58 L 218 62" stroke="#0C0C0C" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M 223 98 L 218 94" stroke="#0C0C0C" strokeWidth="1.4" strokeLinecap="round" />

          {/* Abstract scribble line below rings */}
          <path
            d="M 48 140 C 65 132 82 150 99 140 C 116 130 133 150 150 140 C 167 130 184 150 201 140 C 210 135 215 140 215 140"
            stroke="#0C0C0C" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.5"
          />

          {/* Small abstract top-left squiggle */}
          <path
            d="M 60 22 C 65 16 72 24 78 18 C 84 12 90 20 96 14"
            stroke="#0C0C0C" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.4"
          />

          {/* Small abstract top-right squiggle */}
          <path
            d="M 162 14 C 168 20 175 12 181 18 C 187 24 193 16 199 22"
            stroke="#0C0C0C" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.4"
          />
        </svg>

        {/* Thin rule */}
        <div style={{ width: '100%', height: 1, background: 'var(--border-c)' }} />

        {/* Title */}
        <div style={{ textAlign: 'left', width: '100%' }}>
          <p style={{
            fontSize: 9, fontWeight: 700, letterSpacing: '0.2em',
            color: 'var(--text-muted)', textTransform: 'uppercase',
            fontFamily: 'Inter, sans-serif', marginBottom: 8,
          }}>
            Um jantar para dois.
          </p>
          <h1 style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(46px, 14vw, 64px)',
            lineHeight: 0.88,
            letterSpacing: '-0.04em',
            textTransform: 'uppercase',
            marginBottom: 4,
          }}>
            NOSSA
          </h1>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontStyle: 'italic',
            fontSize: 'clamp(44px, 13vw, 60px)',
            lineHeight: 0.9,
            letterSpacing: '-0.01em',
          }}>
            Noite.
          </h2>
        </div>

        {/* Circular badge — bottom-right aligned like reference */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginTop: 4 }}>
          <svg width="128" height="128" viewBox="0 0 128 128">
            <defs>
              <path
                id="splashBadge"
                d="M 64 64 m -50 0 a 50 50 0 1 1 100 0 a 50 50 0 1 1 -100 0"
              />
            </defs>
            <circle cx="64" cy="64" r="50" fill="none" stroke="#0C0C0C" strokeWidth="1.2" />
            <circle cx="64" cy="64" r="44" fill="none" stroke="#0C0C0C" strokeWidth="0.5" />
            <text fill="#0C0C0C" fontSize="7.5" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="3.2">
              <textPath href="#splashBadge">· COM AMOR · NOSSA NOITE · 2026 ·&nbsp;</textPath>
            </text>
            {/* Red center dot matching the rings illustration */}
            <circle cx="64" cy="64" r="4" fill="var(--red)" />
          </svg>
        </div>
      </div>

      {/* COMEÇAR button */}
      <button
        onClick={onStart}
        style={{
          width: '100%',
          height: 58,
          background: 'var(--black)',
          color: 'var(--cream)',
          border: 'none',
          fontSize: 10,
          fontWeight: 900,
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          flexShrink: 0,
          fontFamily: 'Inter, sans-serif',
          marginTop: 24,
        }}
      >
        COMEÇAR →
      </button>
    </div>
  );
}
