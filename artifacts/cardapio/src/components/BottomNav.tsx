import { Home, Menu, Wine, ShoppingBag } from 'lucide-react';
import { useCart } from '@/store/cart';

interface BottomNavProps {
  activePage: string;
  onChangePage: (page: string) => void;
}

export function BottomNav({ activePage, onChangePage }: BottomNavProps) {
  const { totalCount } = useCart();

  const navItems = [
    { id: 'home', label: 'Início', icon: Home },
    { id: 'menu', label: 'Menu', icon: Menu },
    { id: 'drinks', label: 'Drinks', icon: Wine },
    { id: 'cart', label: 'Pedido', icon: ShoppingBag, badge: true },
  ];

  return (
    <nav
      className="absolute bottom-0 left-0 w-full h-[58px] bg-white flex"
      style={{ borderTop: '1.5px solid var(--black)' }}
    >
      {navItems.map((item, i) => {
        const isActive = activePage === item.id;

        return (
          <button
            key={item.id}
            data-testid={`nav-${item.id}`}
            onClick={() => onChangePage(item.id)}
            className="flex-1 flex flex-col items-center justify-center relative"
            style={{
              backgroundColor: isActive ? 'var(--black)' : 'var(--white)',
              color: isActive ? 'var(--white)' : 'var(--text-muted)',
              borderRight: i < navItems.length - 1 ? '1px solid var(--border-c)' : 'none',
            }}
          >
            {item.badge && totalCount > 0 && (
              <span
                className="absolute top-[6px] right-[calc(50%-18px)] w-[14px] h-[14px] bg-[var(--red)] rounded-full text-white flex items-center justify-center"
                style={{ fontSize: '8px', fontWeight: 900 }}
              >
                {totalCount}
              </span>
            )}
            <item.icon className="w-[18px] h-[18px] mb-[2px]" strokeWidth={1.5} />
            <span
              className="uppercase"
              style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.12em' }}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
