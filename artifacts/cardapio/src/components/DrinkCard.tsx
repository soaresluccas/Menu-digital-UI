import { useState } from 'react';
import { useCart } from '@/store/cart';
import { toast } from 'sonner';

interface DrinkCardProps {
  item: any;
}

export function DrinkCard({ item }: DrinkCardProps) {
  const [flash, setFlash] = useState(false);
  const { addItem, items } = useCart();
  const cartItem = items.find(i => i.id === item.id);

  const handleAdd = () => {
    addItem(item.id, item.name, 'Drink', 1);
    toast(`${item.name} ADICIONADO`);
    setFlash(true);
    setTimeout(() => setFlash(false), 1000);
  };

  return (
    <div className="w-full bg-white flex" style={{ borderBottom: '1.5px solid var(--black)' }}>
      {/* Main Content */}
      <div className="flex-1 flex flex-col" style={{ padding: 18 }}>
        <p
          className="uppercase mb-1"
          style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.16em', color: 'var(--text-muted)' }}
        >
          {item.type}
        </p>

        <h3
          style={{ fontSize: 26, lineHeight: 1.0, fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 10 }}
        >
          {item.name}
        </h3>

        <div className="uppercase mb-2" style={{ fontSize: 10, lineHeight: 1.7 }}>
          <span style={{ color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.06em' }}>NOTAS: </span>
          <span style={{ fontWeight: 700 }}>{item.tasteNotes}</span>
        </div>

        <p
          className="uppercase mb-3"
          style={{ fontSize: 10, lineHeight: 1.65, color: 'var(--text-muted)', letterSpacing: '0.06em', fontWeight: 700 }}
        >
          {item.ingredients}
        </p>

        <div className="flex gap-[6px] flex-wrap mt-auto">
          {item.tags.map((tag: any, idx: number) => (
            <span
              key={idx}
              className="uppercase"
              style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '0.12em',
                padding: '3px 8px',
                border: `1px solid ${tag.color ?? 'var(--border-c)'}`,
                color: tag.color ?? 'var(--text-muted)',
                borderRadius: 100,
              }}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>

      {/* Right Strip */}
      <button
        data-testid={`pedir-drink-${item.id}`}
        onClick={handleAdd}
        className="flex flex-col items-center justify-center relative"
        style={{
          width: 38,
          flexShrink: 0,
          borderLeft: '1.5px solid var(--black)',
          backgroundColor: flash ? 'var(--yellow)' : 'transparent',
          transition: 'background-color 0.15s',
          WebkitTapHighlightColor: 'transparent',
        }}
      >
        {cartItem && cartItem.qty > 0 && (
          <span
            className="absolute top-2 flex items-center justify-center text-white"
            style={{
              width: 18,
              height: 18,
              background: 'var(--black)',
              borderRadius: '50%',
              fontSize: 10,
              fontWeight: 900,
            }}
          >
            {cartItem.qty}
          </span>
        )}
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
          PEDIR ↑↑↑↑↑
        </span>
      </button>
    </div>
  );
}
