import { useRef, useState } from "react";

interface PolaroidPageProps {
  onBack: () => void;
}

export function PolaroidPage({ onBack }: PolaroidPageProps) {
  const [photoSrc, setPhotoSrc] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setPhotoSrc(ev.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden flex items-center justify-center"
      style={{ background: '#0042FF' }}
    >
      {/* Decorative SVG scribbles */}
      <svg className="absolute pointer-events-none" style={{ top: '6%', left: '-8%', width: 200 }} viewBox="0 0 200 150" fill="none">
        <path d="M10 80 C 40 20, 80 130, 120 50 C 150 -10, 170 100, 195 60" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      </svg>
      <svg className="absolute pointer-events-none" style={{ top: '8%', right: '-10%', width: 170, transform: 'rotate(20deg)' }} viewBox="0 0 180 140" fill="none">
        <path d="M5 30 C 50 90, 70 -10, 110 50 C 140 100, 160 20, 175 70" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
        <circle cx="160" cy="30" r="10" stroke="#FFFFFF" strokeWidth="2" fill="none" opacity="0.6" />
      </svg>
      <svg className="absolute pointer-events-none" style={{ bottom: '10%', left: '-10%', width: 190, transform: 'rotate(-15deg) scaleY(-1)' }} viewBox="0 0 190 150" fill="none">
        <path d="M5 50 C 60 10, 50 120, 100 70 C 140 30, 160 110, 185 60" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      </svg>
      <svg className="absolute pointer-events-none" style={{ bottom: '4%', right: '-6%', width: 220, transform: 'rotate(150deg)' }} viewBox="0 0 220 160" fill="none">
        <path d="M10 90 C 60 30, 90 140, 140 70 C 170 30, 190 110, 215 80" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
        <path d="M30 30 L 50 50 M50 30 L30 50" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      </svg>
      <svg className="absolute pointer-events-none" style={{ top: '42%', left: '2%', width: 90, transform: 'rotate(45deg)' }} viewBox="0 0 100 100" fill="none">
        <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M82 18 L18 82" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
      </svg>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center z-10" style={{ padding: '24px 24px 0' }}>
        <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
          Lembrança da Noite
        </span>
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: '1.5px solid #FFFFFF',
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            WebkitTapHighlightColor: 'transparent',
            color: '#FFFFFF',
            flexShrink: 0,
          }}
        >
          <svg width={16} height={16} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Polaroid card */}
      <div
        style={{
          width: 280,
          background: '#FFFFFF',
          padding: '18px 18px 60px',
          boxShadow: '0 4px 0 rgba(0,0,0,0.06)',
          position: 'relative',
          zIndex: 5,
          transform: 'rotate(-1.5deg)',
          border: '1.5px solid #0C0C0C',
        }}
      >
        {/* Photo frame */}
        <div
          onClick={() => inputRef.current?.click()}
          style={{
            width: '100%',
            aspectRatio: '1/1',
            background: '#0C0C0C',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          {photoSrc ? (
            <img src={photoSrc} alt="Foto da noite" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                background: 'repeating-linear-gradient(45deg, #1a1a1a 0px, #1a1a1a 10px, #0c0c0c 10px, #0c0c0c 20px)',
              }}
            >
              <svg width={32} height={32} fill="none" stroke="rgba(255,255,255,0.5)" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', textAlign: 'center', padding: '0 20px' }}>
                Toque para adicionar a foto da noite
              </span>
            </div>
          )}
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleFile}
            style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%', height: '100%', display: 'none' }}
          />
        </div>

        {/* Caption */}
        <p style={{ marginTop: 18, textAlign: 'center', fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 700, fontSize: 22, color: '#0C0C0C' }}>
          Nossa noite ♡
        </p>
        <p style={{ marginTop: 6, textAlign: 'center', fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.35)' }}>
          12 · Jun · 2026
        </p>
      </div>
    </div>
  );
}
