import { Check } from 'lucide-react';

interface OrderOverlayProps {
  onClose: () => void;
}

export function OrderOverlay({ onClose }: OrderOverlayProps) {
  return (
    <div className="absolute inset-0 z-[999] bg-[var(--cream)] flex flex-col max-w-[430px] mx-auto">
      <div className="flex-1 bg-[var(--black)] p-8 flex flex-col items-center justify-center text-center">
        <div className="w-[80px] h-[80px] border-[3px] border-[var(--yellow)] flex items-center justify-center mb-8">
          <Check className="w-10 h-10 text-[var(--yellow)] stroke-[3px]" />
        </div>
        <h2 className="text-[56px] leading-[0.9] font-black text-white tracking-[-0.03em] mb-4">
          PEDIDO<br/>FEITO!
        </h2>
        <p className="text-[14px] text-[var(--text-muted)] font-medium max-w-[250px]">
          Seu pedido foi anotado com sucesso e logo será preparado.
        </p>
      </div>
      
      <button 
        onClick={onClose}
        className="w-full h-[58px] bg-[var(--yellow)] text-[var(--black)] font-black text-[12px] uppercase tracking-[0.1em] flex items-center justify-center"
      >
        ← VOLTAR AO CARDÁPIO
      </button>
    </div>
  );
}
