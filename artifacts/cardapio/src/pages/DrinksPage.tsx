import { drinks } from '@/data/menu';
import { DrinkCard } from '@/components/DrinkCard';

export function DrinksPage() {
  return (
    <div className="flex flex-col min-h-full pb-[60px] bg-[var(--cream)]">
      {/* Section Header */}
      <div 
        className="w-full px-6 py-12 flex flex-col bg-[var(--green)] text-white"
        style={{ borderBottom: '1.5px solid var(--black)' }}
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.1em] mb-2 opacity-80">
          Seção 03
        </span>
        <h2 className="text-[58px] leading-[0.9] font-black tracking-[-0.03em] mb-4">
          DRINKS.
        </h2>
        <span className="text-[10px] font-bold uppercase tracking-[0.1em] opacity-80">
          {drinks.length} itens disponíveis
        </span>
      </div>

      {/* Items */}
      <div className="flex flex-col w-full">
        {drinks.map(item => (
          <DrinkCard key={item.id} item={item} />
        ))}
      </div>

      {/* Footer Note */}
      <div className="p-8 pb-12 flex flex-col items-center justify-center text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--text-muted)] mb-2">
          BAR DA CASA
        </span>
        <p className="text-[12px] font-medium text-[var(--black)] max-w-[240px]">
          Todos os drinks são preparados com ingredientes frescos e na hora do pedido.
        </p>
      </div>
    </div>
  );
}
