import { useState, useReducer, useRef, useEffect } from "react";
import { Toaster } from "sonner";
import { BottomNav } from "@/components/BottomNav";
import { HomePage } from "@/pages/HomePage";
import { MenuPage } from "@/pages/MenuPage";
import { DrinksPage } from "@/pages/DrinksPage";
import { CartPage } from "@/pages/CartPage";
import { SplashPage } from "@/pages/SplashPage";
import { IntroPage } from "@/pages/IntroPage";
import { OrderOverlay } from "@/components/OrderOverlay";
import { CartContext, CartItem } from "@/store/cart";
import { DespedidaPage } from "@/pages/DespedidaPage";
import { PolaroidPage } from "@/pages/PolaroidPage";

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: 'ADD_ITEM'; id: string; name: string; category: string; qty: number }
  | { type: 'REMOVE_ITEM'; id: string }
  | { type: 'UPDATE_QTY'; id: string; delta: number }
  | { type: 'CLEAR_CART' };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(i => i.id === action.id);
      if (existing) {
        return {
          items: state.items.map(i =>
            i.id === action.id ? { ...i, qty: i.qty + action.qty } : i
          ),
        };
      }
      return {
        items: [...state.items, { id: action.id, name: action.name, category: action.category, qty: action.qty }],
      };
    }
    case 'REMOVE_ITEM':
      return { items: state.items.filter(i => i.id !== action.id) };
    case 'UPDATE_QTY':
      return {
        items: state.items.map(i =>
          i.id === action.id ? { ...i, qty: Math.max(1, i.qty + action.delta) } : i
        ),
      };
    case 'CLEAR_CART':
      return { items: [] };
    default:
      return state;
  }
}

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showIntro, setShowIntro] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [subTab, setSubTab] = useState<string | undefined>(undefined);
  const [showOverlay, setShowOverlay] = useState(false);
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

  const cartContextValue = {
    items: cartState.items,
    addItem: (id: string, name: string, category: string, qty: number) =>
      dispatch({ type: 'ADD_ITEM', id, name, category, qty }),
    removeItem: (id: string) => dispatch({ type: 'REMOVE_ITEM', id }),
    updateQty: (id: string, delta: number) => dispatch({ type: 'UPDATE_QTY', id, delta }),
    clearCart: () => dispatch({ type: 'CLEAR_CART' }),
    totalCount: cartState.items.reduce((sum, i) => sum + i.qty, 0),
  };

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [activePage]);

  const navigate = (page: string, sub?: string) => {
    setActivePage(page);
    if (sub) setSubTab(sub);
  };

  const handleCloseOverlay = () => {
    dispatch({ type: 'CLEAR_CART' });
    setShowOverlay(false);
    navigate("home");
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      <div className="w-full min-h-[100dvh] bg-[var(--cream)] overflow-hidden relative font-sans flex justify-center">
        <div
          className="w-full max-w-[430px] h-[100dvh] relative flex flex-col bg-[var(--cream)]"
          style={{ borderLeft: '1.5px solid var(--black)', borderRight: '1.5px solid var(--black)' }}
        >
          {showSplash ? (
            <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar w-full">
              <SplashPage onStart={() => { setShowSplash(false); setShowIntro(true); }} />
            </div>
          ) : showIntro ? (
            <div className="flex-1 overflow-hidden w-full">
              <IntroPage onFinish={() => setShowIntro(false)} />
            </div>
          ) : activePage === "despedida" ? (
            <div className="flex-1 overflow-hidden w-full">
              <DespedidaPage onPlay={() => navigate("polaroid")} />
            </div>
          ) : activePage === "polaroid" ? (
            <div className="flex-1 overflow-hidden w-full">
              <PolaroidPage onBack={() => navigate("despedida")} />
            </div>
          ) : (
            <>
              <div ref={scrollRef} className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar w-full pb-[58px]">
                <div key={activePage} className="page-transition">
                  {activePage === "home" && <HomePage navigate={navigate} />}
                  {activePage === "menu" && <MenuPage initialSubTab={subTab} />}
                  {activePage === "drinks" && <DrinksPage />}
                  {activePage === "cart" && <CartPage onCheckout={() => setShowOverlay(true)} />}
                </div>
              </div>

              <BottomNav activePage={activePage} onChangePage={navigate} />

              {showOverlay && <OrderOverlay onClose={handleCloseOverlay} />}
            </>
          )}
        </div>

        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: '#0C0C0C',
              color: '#fff',
              border: '1.5px solid #0C0C0C',
              fontSize: '9px',
              fontWeight: '700',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              borderRadius: '0px',
            },
          }}
          offset={76}
        />
      </div>
    </CartContext.Provider>
  );
}

export default App;
