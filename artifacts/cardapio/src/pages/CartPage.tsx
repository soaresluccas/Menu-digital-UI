import { ShoppingBag, Minus, Plus, Trash2, Check } from 'lucide-react';
import { useCart } from '@/store/cart';

interface CartPageProps {
  onCheckout: () => void;
}

export function CartPage({ onCheckout }: CartPageProps) {
  const { items, totalCount, updateQty, removeItem } = useCart();

  return (
    <div className="flex flex-col min-h-full bg-[var(--cream)]">
      {/* Header */}
      <div style={{ background: 'var(--red)', padding: '28px 20px 20px', borderBottom: '1.5px solid var(--black)' }}>
        <p
          className="uppercase mb-2"
          style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.6)' }}
        >
          SEU PEDIDO
        </p>
        <h2
          className="text-white"
          style={{ fontSize: 'clamp(38px, 14vw, 58px)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.03em', lineHeight: 0.88 }}
        >
          PEDIDO.
        </h2>
      </div>

      {items.length === 0 ? (
        /* Empty State */
        <div className="flex-1 flex flex-col items-center justify-center text-center" style={{ padding: '40px 24px 80px' }}>
          <div
            className="flex items-center justify-center mb-4"
            style={{ width: 52, height: 52, border: '1.5px solid var(--border-c)' }}
          >
            <ShoppingBag className="w-6 h-6" style={{ color: 'var(--mid-gray)' }} strokeWidth={1.5} />
          </div>
          <h3 style={{ fontSize: 20, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: 8 }}>
            Nada aqui ainda.
          </h3>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', maxWidth: 220, lineHeight: 1.5 }}>
            Navegue pelo cardápio e adicione os itens que desejar.
          </p>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="flex-1">
            {items.map((item, idx) => (
              <div
                key={item.id}
                className="w-full bg-white flex"
                style={{ borderBottom: '1.5px solid var(--black)', minHeight: 64 }}
              >
                {/* Number */}
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{ width: 44, borderRight: '1.5px solid var(--black)' }}
                >
                  <span style={{ fontSize: 9, fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1" style={{ padding: '14px 16px' }}>
                  <p style={{ fontSize: 15, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                    {item.name}
                  </p>
                  <p style={{ fontSize: 10, color: 'var(--text-muted)', marginTop: 2, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 700 }}>
                    {item.category}
                  </p>
                </div>

                {/* Controls */}
                <div
                  className="flex items-center flex-shrink-0"
                  style={{ padding: '0 12px', gap: 0, borderLeft: '1.5px solid var(--black)' }}
                >
                  <button
                    data-testid={`cart-minus-${item.id}`}
                    onClick={() => updateQty(item.id, -1)}
                    disabled={item.qty <= 1}
                    className="flex items-center justify-center"
                    style={{ width: 26, height: 26, background: 'none', border: '1px solid var(--border-c)', cursor: 'pointer' }}
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span
                    className="flex items-center justify-center"
                    style={{ width: 22, textAlign: 'center', fontSize: 12, fontWeight: 700 }}
                  >
                    {item.qty}
                  </span>
                  <button
                    data-testid={`cart-plus-${item.id}`}
                    onClick={() => updateQty(item.id, 1)}
                    className="flex items-center justify-center"
                    style={{ width: 26, height: 26, background: 'none', border: '1px solid var(--border-c)', cursor: 'pointer' }}
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                  <button
                    data-testid={`cart-remove-${item.id}`}
                    onClick={() => removeItem(item.id)}
                    className="flex items-center justify-center"
                    style={{ marginLeft: 8, width: 28, height: 28, background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                  >
                    <Trash2 className="w-[13px] h-[13px]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div style={{ borderTop: '1.5px solid var(--black)', background: 'var(--cream)', flexShrink: 0 }}>
            <div style={{ padding: '16px 20px 12px', borderBottom: '1.5px solid var(--black)' }}>
              <div className="flex justify-between items-baseline">
                <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  TOTAL DE ITENS
                </span>
                <span style={{ fontSize: 32, fontWeight: 900, letterSpacing: '-0.03em' }}>
                  {totalCount}
                </span>
              </div>
              <p style={{ fontSize: 10, color: 'var(--text-muted)', marginTop: 4, lineHeight: 1.5 }}>
                {items.map(i => i.name).join(', ')}
              </p>
            </div>
            <button
              data-testid="btn-confirm-order"
              onClick={onCheckout}
              className="w-full flex items-center justify-center gap-[10px]"
              style={{
                minHeight: 52,
                background: 'var(--black)',
                color: 'var(--white)',
                border: 'none',
                fontSize: 10,
                fontWeight: 900,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              <Check className="w-4 h-4" strokeWidth={2.5} />
              CONFIRMAR PEDIDO
            </button>
          </div>
        </>
      )}
    </div>
  );
}
