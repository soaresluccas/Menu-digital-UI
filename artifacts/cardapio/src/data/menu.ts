export const foodItems = [
  {
    id: 'e1', category: 'entrada', section: 'Seção 01', sectionLabel: 'ENTRADA.',
    name: 'Assorti de Fritos Finos',
    nameStyle: 'sans',
    tag: 'PARA COMPARTILHAR · QUENTE',
    tasteNotes: 'CROCANTE. DOURADO. LEVEMENTE SALGADO.',
    description: 'Petiscos fritos sortidos — pensados para abrir o apetite com leveza.',
    serves: 'SERVE 2 PESSOAS.',
    headerBg: '#F4F1E8', headerColor: '#0C0C0C',
  },
  {
    id: 'p1', category: 'prato', section: 'Seção 02', sectionLabel: 'PRATOS.',
    name: 'Fettuccine Alfredo com Camarão',
    nameStyle: 'serif',
    tag: 'PRATO PRINCIPAL · QUENTE',
    tasteNotes: 'CREMOSO. FRESCO. ELEGANTE.',
    description: 'Macarrão fresco, molho branco ao queijo e camarão selado na manteiga.',
    headerBg: '#0042FF', headerColor: '#FFFFFF',
  },
  {
    id: 's1', category: 'sobremesa', section: 'Seção 04', sectionLabel: 'SOBREMESA.',
    name: 'Milky Moo.',
    nameStyle: 'mixed',
    tag: 'SOBREMESA · GELADO',
    tasteNotes: 'CREMOSO. FRIO. INESQUECÍVEL.',
    description: 'O melhor milkshake do mundo. Sem debate.',
    serves: 'SERVE 1 PESSOA.',
    headerBg: '#E8003C', headerColor: '#FFFFFF',
  },
];

export const drinks = [
  {
    id: 'd1', type: 'COCKTAIL · BASE VODKA',
    name: 'Cosmopolitan',
    tasteNotes: 'CÍTRICO. ELEGANTE. VIBRANTE.',
    ingredients: 'LICOR DE LARANJA, VODKA E CRANBERRY.',
    tags: [{ label: 'Cocktail', color: '#E8003C' }, { label: 'Vodka base', color: null }],
  },
  {
    id: 'd2', type: 'COCKTAIL · BASE RUM',
    name: 'Mojito.',
    tasteNotes: 'FRESCO. HERBÁCEO. REFRESCANTE.',
    ingredients: 'RUM, HORTELÃ FRESCA E LIMÃO SICILIANO.',
    tags: [{ label: 'Cocktail', color: '#006B3C' }, { label: 'Rum base', color: null }],
  },
  {
    id: 'd3', type: 'NACIONAL · BASE CACHAÇA',
    name: 'Caipirinha.',
    tasteNotes: 'ÁCIDO. FRESCO. BRASILEIRO.',
    ingredients: 'LIMÃO GALEGO, LIMÃO SICILIANO, CACHAÇA E GELO.',
    tags: [{ label: 'Nacional', color: '#c8a000' }, { label: 'Cachaça base', color: null }],
  },
];
