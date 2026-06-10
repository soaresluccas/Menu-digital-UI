import { ArrowRight } from 'lucide-react';
import { foodItems, drinks } from '@/data/menu';

interface HomePageProps {
  navigate: (page: string, subTab?: string) => void;
}

export function HomePage({ navigate }: HomePageProps) {
  const getCount = (cat: string) => foodItems.filter(i => i.category === cat).length;
  const drinksCount = drinks.length;

  return (
    <div className="flex flex-col min-h-full pb-[80px]">
      {/* Hero */}
      <div className="w-full pt-12 pb-6 px-6">
        <div className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-[0.1em] flex items-center gap-2 mb-6">
          <span>Restaurante Privado · 2026</span>
          <div className="flex-1 h-[1px] bg-[var(--border-c)]"></div>
        </div>
      </div>

      {/* Giant Title */}
      <div className="w-full bg-[var(--black)] px-6 py-10">
        <h1 className="font-black text-white leading-[0.82] tracking-[-0.04em]" style={{ fontSize: 'clamp(36px, 13.5vw, 68px)' }}>
          CARDÁPIO.
        </h1>
      </div>

      {/* Green Band */}
      <div className="w-full bg-[var(--green)] py-2 flex items-center justify-center" style={{ borderTop: '1.5px solid var(--black)', borderBottom: '1.5px solid var(--black)' }}>
        <span className="text-white text-[9px] font-bold uppercase tracking-[0.2em]">Nossa Noite Especial ♡</span>
      </div>

      {/* Blue Block */}
      <div className="w-full bg-[var(--blue)] px-6 py-10" style={{ borderBottom: '1.5px solid var(--black)' }}>
        <h2 className="font-black text-white leading-[1] tracking-[-0.02em] mb-4" style={{ fontSize: 'clamp(28px, 10vw, 42px)' }}>
          UM JANTAR FEITO COM AMOR.
        </h2>
        <p className="text-[var(--text-muted)] text-[12px] text-white/70 max-w-[280px]">
          Bem-vindos à nossa noite especial. Tudo foi preparado com carinho para celebrarmos juntos.
        </p>
      </div>

      {/* Navigation Rows */}
      <div className="flex flex-col w-full">
        {/* Entrada */}
        <button 
          onClick={() => navigate('menu', 'entradas')}
          className="flex items-center w-full min-h-[52px] bg-[var(--cream)]" style={{ borderBottom: '1.5px solid var(--black)' }}>
          <div className="flex-1 flex items-center justify-between px-6">
            <span className="text-[15px] font-bold uppercase tracking-[0.05em]">Entrada</span>
            <span className="text-[9px] font-bold text-[var(--text-muted)] uppercase">{getCount('entrada')} itens</span>
          </div>
          <div className="w-[52px] h-[52px] flex items-center justify-center" style={{ borderLeft: '1.5px solid var(--black)' }}>
            <ArrowRight className="w-5 h-5" />
          </div>
        </button>

        {/* Pratos */}
        <button 
          onClick={() => navigate('menu', 'pratos')}
          className="flex items-center w-full min-h-[52px] bg-[#4C79FF] text-white" style={{ borderBottom: '1.5px solid var(--black)' }}>
          <div className="flex-1 flex items-center justify-between px-6">
            <span className="text-[15px] font-bold uppercase tracking-[0.05em]">Pratos</span>
            <span className="text-[9px] font-bold text-white/70 uppercase">{getCount('prato')} itens</span>
          </div>
          <div className="w-[52px] h-[52px] flex items-center justify-center" style={{ borderLeft: '1.5px solid var(--black)' }}>
            <ArrowRight className="w-5 h-5" />
          </div>
        </button>

        {/* Drinks */}
        <button 
          onClick={() => navigate('drinks')}
          className="flex items-center w-full min-h-[52px] bg-[var(--green)] text-white" style={{ borderBottom: '1.5px solid var(--black)' }}>
          <div className="flex-1 flex items-center justify-between px-6">
            <span className="text-[15px] font-bold uppercase tracking-[0.05em]">Drinks</span>
            <span className="text-[9px] font-bold text-white/70 uppercase">{drinksCount} itens</span>
          </div>
          <div className="w-[52px] h-[52px] flex items-center justify-center" style={{ borderLeft: '1.5px solid var(--black)' }}>
            <ArrowRight className="w-5 h-5" />
          </div>
        </button>

        {/* Sobremesa */}
        <button 
          onClick={() => navigate('menu', 'sobremesa')}
          className="flex items-center w-full min-h-[52px] bg-[var(--black)] text-[var(--cream)]" style={{ borderBottom: '1.5px solid var(--black)' }}>
          <div className="flex-1 flex items-center justify-between px-6">
            <span className="text-[15px] font-bold uppercase tracking-[0.05em]">Sobremesa</span>
            <span className="text-[9px] font-bold text-[var(--text-muted)] uppercase">{getCount('sobremesa')} itens</span>
          </div>
          <div className="w-[52px] h-[52px] flex items-center justify-center" style={{ borderLeft: '1.5px solid var(--black)' }}>
            <ArrowRight className="w-5 h-5" />
          </div>
        </button>
      </div>

      {/* Nota da Casa */}
      <div className="p-8 pb-16 bg-[var(--cream)] flex flex-col items-center text-center">
        <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-[0.1em] mb-4">NOTA DA CASA</span>
        <p className="text-[14px] leading-[1.6] text-[var(--black)] font-medium mb-6 max-w-[280px]">
          Desliguem os celulares, aproveitem a música e saboreiem cada momento. Hoje a noite é só nossa.
        </p>
        <span className="font-serif italic text-[20px]">Com amor ♡</span>
      </div>
    </div>
  );
}
