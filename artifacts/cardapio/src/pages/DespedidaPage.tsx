interface DespedidaPageProps {
  onPlay: () => void;
}

const rows = [
  {
    texts: ['GOSTOU DA EXPERIÊNCIA?', 'GOSTOU DA EXPERIÊNCIA?'],
    top: '6%',
    font: "'Archivo Black', sans-serif",
    size: 'clamp(40px, 13vw, 54px)',
    color: '#FFE033',
    letterSpacing: '-0.02em',
    fontStyle: 'normal',
    dir: 'left' as const,
    dur: '22s',
  },
  {
    texts: ['VOU SENTIR SAUDADES!', 'VOU SENTIR SAUDADES!'],
    top: '22%',
    font: "'Anton', sans-serif",
    size: 'clamp(28px, 9.5vw, 38px)',
    color: '#FFFFFF',
    letterSpacing: '0.02em',
    fontStyle: 'normal',
    dir: 'right' as const,
    dur: '18s',
  },
  {
    texts: ['O CASAL MAIS LINDO!', 'O CASAL MAIS LINDO!'],
    top: '40%',
    font: "'Archivo Black', sans-serif",
    size: 'clamp(52px, 17vw, 72px)',
    color: '#FFE033',
    letterSpacing: '-0.03em',
    fontStyle: 'italic',
    dir: 'left' as const,
    dur: '28s',
  },
  {
    texts: ['VOCÊS SÃO A DUPLA DE PROTAGONISTAS', 'VOCÊS SÃO A DUPLA DE PROTAGONISTAS'],
    top: '58%',
    font: "'Anton', sans-serif",
    size: 'clamp(24px, 8.5vw, 34px)',
    color: '#FFFFFF',
    letterSpacing: '0.04em',
    fontStyle: 'normal',
    dir: 'right' as const,
    dur: '16s',
  },
  {
    texts: ['A CASA AGRADECE SUA PRESENÇA', 'A CASA AGRADECE SUA PRESENÇA'],
    top: '74%',
    font: "'Archivo Black', sans-serif",
    size: 'clamp(36px, 12vw, 48px)',
    color: '#FFE033',
    letterSpacing: '-0.02em',
    fontStyle: 'normal',
    dir: 'left' as const,
    dur: '24s',
  },
  {
    texts: ['DIVARAMMM! · DIVARAMMM! · DIVARAMMM!', 'DIVARAMMM! · DIVARAMMM! · DIVARAMMM!'],
    top: '90%',
    font: "'Anton', sans-serif",
    size: 'clamp(22px, 7.5vw, 30px)',
    color: '#FFFFFF',
    letterSpacing: '0.03em',
    fontStyle: 'normal',
    dir: 'right' as const,
    dur: '14s',
  },
];

export function DespedidaPage({ onPlay }: DespedidaPageProps) {
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ background: '#E8003C' }}
    >
      {rows.map((row, i) => (
        <div
          key={i}
          className="absolute whitespace-nowrap flex items-center"
          style={{ top: row.top, left: 0, right: 0, willChange: 'transform' }}
        >
          <div
            className={row.dir === 'left' ? 'marquee-left' : 'marquee-right'}
            style={
              {
                display: 'inline-flex',
                alignItems: 'center',
                '--dur': row.dur,
                fontFamily: row.font,
                fontSize: row.size,
                color: row.color,
                letterSpacing: row.letterSpacing,
                fontStyle: row.fontStyle,
                fontWeight: 900,
                lineHeight: 1,
              } as React.CSSProperties
            }
          >
            {row.texts.map((t, j) => (
              <span key={j} style={{ paddingLeft: 28, paddingRight: 28, flexShrink: 0, display: 'inline-flex', alignItems: 'center' }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <button
          onClick={onPlay}
          style={{
            width: 120,
            height: 120,
            background: '#0C0C0C',
            border: '3px solid #FFFFFF',
            color: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            cursor: 'pointer',
            WebkitTapHighlightColor: 'transparent',
            fontFamily: "'Inter', sans-serif",
            boxShadow: '0 0 0 8px #E8003C, 0 0 0 11px #FFFFFF',
            transition: 'transform 0.1s, background 0.1s',
          }}
          onPointerDown={e => {
            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(0.95)';
            (e.currentTarget as HTMLButtonElement).style.background = '#FFE033';
            (e.currentTarget as HTMLButtonElement).style.color = '#0C0C0C';
          }}
          onPointerUp={e => {
            (e.currentTarget as HTMLButtonElement).style.transform = '';
            (e.currentTarget as HTMLButtonElement).style.background = '#0C0C0C';
            (e.currentTarget as HTMLButtonElement).style.color = '#FFFFFF';
          }}
          onPointerLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.transform = '';
            (e.currentTarget as HTMLButtonElement).style.background = '#0C0C0C';
            (e.currentTarget as HTMLButtonElement).style.color = '#FFFFFF';
          }}
        >
          <svg width={32} height={32} fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          <span style={{ fontSize: 10, fontWeight: 900, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
            Play
          </span>
        </button>
      </div>
    </div>
  );
}
