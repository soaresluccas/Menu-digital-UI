import { useState, useEffect } from 'react';
import { foodItems } from '@/data/menu';
import { FoodItemCard } from '@/components/FoodItemCard';

interface MenuPageProps {
  initialSubTab?: string;
}

export function MenuPage({ initialSubTab = 'entradas' }: MenuPageProps) {
  const [activeTab, setActiveTab] = useState(initialSubTab);

  useEffect(() => {
    if (initialSubTab) setActiveTab(initialSubTab);
  }, [initialSubTab]);

  const tabs = [
    { id: 'entradas', label: 'ENTRADA', category: 'entrada', color: 'var(--cream)', text: 'var(--black)' },
    { id: 'pratos', label: 'PRATOS', category: 'prato', color: 'var(--blue)', text: 'var(--white)' },
    { id: 'sobremesa', label: 'SOBREMESA', category: 'sobremesa', color: 'var(--red)', text: 'var(--white)' }
  ];

  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];
  const items = foodItems.filter(item => item.category === currentTab.category);
  const firstItem = items[0];

  return (
    <div className="flex flex-col min-h-full pb-[60px]">
      {/* Tab Selector */}
      <div className="w-full flex bg-[var(--white)]" style={{ borderBottom: '1.5px solid var(--black)' }}>
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="flex-1 py-4 flex items-center justify-center transition-colors"
            style={{ 
              borderRight: i < tabs.length - 1 ? '1.5px solid var(--black)' : 'none',
              backgroundColor: activeTab === tab.id ? 'var(--black)' : 'transparent',
              color: activeTab === tab.id ? 'var(--white)' : 'var(--black)'
            }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.1em]">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Section Header */}
      {firstItem && (
        <div 
          className="w-full px-6 py-12 flex flex-col"
          style={{ 
            backgroundColor: firstItem.headerBg, 
            color: firstItem.headerColor,
            borderBottom: '1.5px solid var(--black)'
          }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.1em] mb-2 opacity-80">
            {firstItem.section}
          </span>
          <h2 className="text-[58px] leading-[0.9] font-black tracking-[-0.03em]">
            {firstItem.sectionLabel}
          </h2>
        </div>
      )}

      {/* Items */}
      <div className="flex flex-col w-full bg-[var(--cream)]">
        {items.map(item => (
          <FoodItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
