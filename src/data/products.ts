export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: 'masculino' | 'feminino';
  sizes: number[];
  images: string[];
  videoUrl?: string;
  badge?: 'ultimas-unidades' | 'promocao';
  promoEndTime?: Date;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Oxford Clássico Premium',
    description: 'Sapato Oxford em couro legítimo com acabamento artesanal. Ideal para ocasiões formais e ambiente corporativo. Palmilha anatômica para máximo conforto durante todo o dia.',
    price: 299.90,
    originalPrice: 599.90,
    category: 'masculino',
    sizes: [38, 39, 40, 41, 42, 43, 44],
    images: [
      'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800',
    ],
    videoUrl: 'https://youtube.com/watch?v=example',
    badge: 'promocao',
    promoEndTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
  },
  {
    id: '2',
    name: 'Tênis Urban Street',
    description: 'Tênis casual moderno com design urbano. Solado em borracha antiderrapante e cabedal em material sintético premium. Perfeito para o dia a dia.',
    price: 189.90,
    category: 'masculino',
    sizes: [39, 40, 41, 42, 43],
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800',
    ],
    badge: 'ultimas-unidades',
  },
  {
    id: '3',
    name: 'Social Executivo',
    description: 'Sapato social em couro com design elegante. Bico fino e salto baixo para conforto. Forro interno macio e respirável.',
    price: 349.90,
    category: 'masculino',
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    images: [
      'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=800',
    ],
  },
  {
    id: '4',
    name: 'Mocassim Comfort',
    description: 'Mocassim em couro macio com palmilha memory foam. Ideal para quem busca estilo e conforto. Costura reforçada e solado flexível.',
    price: 229.90,
    originalPrice: 459.90,
    category: 'masculino',
    sizes: [40, 41, 42, 43],
    images: [
      'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=800',
    ],
    badge: 'promocao',
    promoEndTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
  },
  {
    id: '5',
    name: 'Scarpin Elegance',
    description: 'Scarpin clássico em verniz com salto médio de 7cm. Bico fino e design atemporal. Perfeito para eventos e ambiente profissional.',
    price: 199.90,
    category: 'feminino',
    sizes: [34, 35, 36, 37, 38, 39],
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800',
    ],
    badge: 'ultimas-unidades',
  },
  {
    id: '6',
    name: 'Sandália Glamour',
    description: 'Sandália de salto alto com tiras delicadas e detalhes em strass. Salto de 10cm com plataforma para maior estabilidade.',
    price: 279.90,
    originalPrice: 559.90,
    category: 'feminino',
    sizes: [35, 36, 37, 38],
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800',
    ],
    badge: 'promocao',
    promoEndTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
  },
  {
    id: '7',
    name: 'Tênis Athleisure',
    description: 'Tênis feminino esportivo com design moderno. Cabedal em malha respirável e solado ultra leve. Ideal para atividades do dia a dia.',
    price: 159.90,
    category: 'feminino',
    sizes: [34, 35, 36, 37, 38, 39, 40],
    images: [
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800',
    ],
  },
  {
    id: '8',
    name: 'Ankle Boot Couro',
    description: 'Bota de cano curto em couro legítimo com zíper lateral. Salto bloco de 5cm e solado tratorado. Elegante e versátil.',
    price: 329.90,
    category: 'feminino',
    sizes: [35, 36, 37, 38, 39],
    images: [
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800',
    ],
    badge: 'ultimas-unidades',
  },
  {
    id: '9',
    name: 'Sapatilha Ballet',
    description: 'Sapatilha em couro macio com laço decorativo. Bico redondo e palmilha acolchoada. Confortável para uso prolongado.',
    price: 129.90,
    category: 'feminino',
    sizes: [34, 35, 36, 37, 38, 39, 40],
    images: [
      'https://images.unsplash.com/photo-1518049362265-d5b2a6467571?w=800',
    ],
  },
  {
    id: '10',
    name: 'Derby Moderno',
    description: 'Sapato Derby em couro com design contemporâneo. Solado em borracha natural e cadarço encerado. Versátil para várias ocasiões.',
    price: 269.90,
    category: 'masculino',
    sizes: [38, 39, 40, 41, 42, 43, 44],
    images: [
      'https://images.unsplash.com/photo-1478186510433-7a04ee95b24a?w=800',
    ],
  },
];
