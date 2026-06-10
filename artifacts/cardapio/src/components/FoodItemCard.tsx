import { useState } from 'react';
import { ImageIcon, Check, Minus, Plus } from 'lucide-react';
import { useCart } from '@/store/cart';
import { toast } from 'sonner';

interface FoodItemCardProps {
  item: any;
}

export function FoodItemCard({ item }: FoodItemCardProps) {
  const [qty, setQty] = useState(1);
  const [image, setImage] = useState<string | null>(null);
  const [flashPedir, setFlashPedir] = useState(false);
  const [flashAdd, setFlashAdd] = useState(false);
  const { addItem } = useCart();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (typeof ev.target?.result === 'string') {
          setImage(ev.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdd = () => {
    addItem(item.id, item.name, item.category, qty);
    setQty(1);
    toast(`${item.name} ADICIONADO`);
    setFlashPedir(true);
    setFlashAdd(true);
    setTimeout(() => {
      setFlashPedir(false);
      setFlashAdd(false);
    }, 1800);
  };

  return (
    <div className="w-full bg-white flex flex-col" style={{ borderBottom: '1.5px solid var(--black)' }}>
      {/* Image Area */}
      <div
        className="relative w-full"
        style={{ aspectRatio: '4/3', backgroundColor: 'var(--lt-gray)', borderBottom: '1.5px solid var(--black)' }}
      >
        {image ? (
          <img src={image} alt={item.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center" style={{ color: 'var(--mid-gray)' }}>
            <ImageIcon className="w-8 h-8 mb-2" strokeWidth={1.5} />
            <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              ADICIONAR FOTO
            </span>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          data-testid={`img-upload-${item.id}`}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        />
      </div>

      {/* Content Row */}
      <div className="flex w-full" style={{ minHeight: 140 }}>
        {/* Main Content */}
        <div className="flex-1 flex flex-col" style={{ padding: '16px 18px' }}>
          <p
            className="uppercase mb-2"
            style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.16em', color: 'var(--text-muted)' }}
          >
            {item.tag}
          </p>

          <div className="mb-3">
            {item.nameStyle === 'serif' ? (
              <h3 className="font-serif" style={{ fontSize: 28, lineHeight: 1.0, fontWeight: 700, letterSpacing: '-0.02em' }}>
                {item.name}
              </h3>
            ) : item.nameStyle === 'mixed' ? (
              <h3 style={{ fontSize: 28, lineHeight: 1.0, letterSpacing: '-0.02em' }}>
                <span className="font-serif" style={{ fontStyle: 'italic', fontWeight: 700 }}>Milky </span>
                <span style={{ fontWeight: 900 }}>Moo.</span>
              </h3>
            ) : (
              <h3 style={{ fontSize: 28, lineHeight: 1.0, fontWeight: 900, letterSpacing: '-0.02em' }}>
                {item.name}
              </h3>
            )}
          </div>

          <div className="uppercase mb-2" style={{ fontSize: 10, lineHeight: 1.7 }}>
            <span style={{ color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.06em' }}>NOTAS DE SABOR: </span>
            <span style={{ fontWeight: 700 }}>{item.tasteNotes}</span>
          </div>

          <p style={{ fontSize: 12, lineHeight: 1.65, color: 'var(--text-muted)' }}>
            {item.description}
            {item.serves && (
              <span
                className="block mt-1 uppercase"
                style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.06em' }}
              >
                {item.serves}
              </span>
            )}
          </p>
        </div>

        {/* Right Strip — PEDIR AGORA */}
        <button
          data-testid={`pedir-strip-${item.id}`}
          onClick={handleAdd}
          className="flex items-center justify-center"
          style={{
            width: 38,
            flexShrink: 0,
            borderLeft: '1.5px solid var(--black)',
            backgroundColor: flashPedir ? 'var(--yellow)' : 'transparent',
            transition: 'background-color 0.15s',
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          <span
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              transform: 'rotate(180deg)',
              fontSize: 8,
              fontWeight: 900,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              userSelect: 'none',
            }}
          >
            PEDIR AGORA ↑↑↑↑↑
          </span>
        </button>
      </div>

      {/* Footer Row */}
      <div className="flex w-full" style={{ borderTop: '1.5px solid var(--black)', minHeight: 44 }}>
        {/* Qty Control */}
        <div
          className="flex-1 flex items-center gap-0"
          style={{ padding: '0 16px', borderRight: '1.5px solid var(--black)' }}
        >
          <button
            data-testid={`qty-minus-${item.id}`}
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="flex items-center justify-center"
            style={{
              width: 30,
              height: 30,
              background: 'none',
              border: '1px solid var(--border-c)',
              fontSize: 18,
              fontWeight: 300,
              cursor: 'pointer',
            }}
          >
            <Minus className="w-3 h-3" />
          </button>
          <div
            className="flex items-center justify-center"
            style={{
              width: 32,
              height: 30,
              fontSize: 13,
              fontWeight: 700,
              borderTop: '1px solid var(--border-c)',
              borderBottom: '1px solid var(--border-c)',
            }}
          >
            {qty}
          </div>
          <button
            data-testid={`qty-plus-${item.id}`}
            onClick={() => setQty(qty + 1)}
            className="flex items-center justify-center"
            style={{
              width: 30,
              height: 30,
              background: 'none',
              border: '1px solid var(--border-c)',
              fontSize: 18,
              fontWeight: 300,
              cursor: 'pointer',
            }}
          >
            <Plus className="w-3 h-3" />
          </button>
        </div>

        {/* Add Button */}
        <button
          data-testid={`add-btn-${item.id}`}
          onClick={handleAdd}
          className="flex items-center justify-center gap-1"
          style={{
            width: 120,
            flexShrink: 0,
            backgroundColor: flashAdd ? 'var(--green)' : 'var(--red)',
            color: 'var(--white)',
            border: 'none',
            fontSize: 9,
            fontWeight: 900,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'background-color 0.1s',
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          {flashAdd ? (
            <>
              <Check className="w-3 h-3" strokeWidth={3} />
              ADICIONADO
            </>
          ) : (
            'ADD TO CART'
          )}
        </button>
      </div>
    </div>
  );
}
