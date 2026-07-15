import { Building2, Hammer, ShieldCheck, Sparkles, Truck } from 'lucide-react';

export type Product = {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: string;
  availability: string;
  description: string;
  highlights: string[];
};

export const heroStats = [
  { label: 'Verified suppliers', value: '120+' },
  { label: 'Items in stock', value: '450+' },
  { label: 'Zones covered', value: '12' },
];

export const categories = [
  {
    title: 'Building materials',
    icon: '🏗️',
    description: 'Cement, steel, bricks, sand and aggregate for every structural need.',
  },
  {
    title: 'Tiles & fittings',
    icon: '🧱',
    description: 'Floor tiles, wall tiles, sanitary ware and bathroom fittings.',
  },
  {
    title: 'Electrical & plumbing',
    icon: '🔌',
    description: 'Wires, cables, switches, pipes, valves and pump systems.',
  },
  {
    title: 'Tools & safety',
    icon: '🛠️',
    description: 'Power tools, hardware, safety gear and site accessories.',
  },
];

export const products: Product[] = [
  {
    id: 1,
    slug: 'jsw-cement-53-grade',
    name: 'JSW 53 Grade Cement - 50kg',
    category: 'Building materials',
    price: '₹420/bag',
    availability: 'In stock',
    description: 'Premium 53 grade cement for high-strength RCC and masonry work.',
    highlights: ['Quick setting', 'Low sulphate', 'Consistent quality'],
  },
  {
    id: 2,
    slug: 'tata-steel-rebar-12mm',
    name: 'Tata Steel Rebar 12mm',
    category: 'Building materials',
    price: '₹92/kg',
    availability: 'In stock',
    description: 'Thermo mechanically treated steel bar for reinforced concrete.',
    highlights: ['High ductility', 'Rust resistant', 'Batch verified'],
  },
  {
    id: 3,
    slug: 'pergo-porcelain-tile',
    name: 'Porcelain Floor Tile 600x600mm',
    category: 'Tiles & fittings',
    price: '₹145/sqft',
    availability: 'Limited stock',
    description: 'Durable and slip-resistant porcelain tile for living spaces.',
    highlights: ['Scratch resistant', 'Easy clean', 'Premium finish'],
  },
  {
    id: 4,
    slug: 'finolex-copper-wire',
    name: 'Finolex Copper Electrical Wire 2.5mm',
    category: 'Electrical & plumbing',
    price: '₹198/coil',
    availability: 'In stock',
    description: 'Flexible copper wiring for lighting and power circuits.',
    highlights: ['Better conductivity', 'Insulation protected', 'Fire safe'],
  },
  {
    id: 5,
    slug: 'hindiusa-swimming-pump',
    name: 'Heavy Duty Water Pump',
    category: 'Electrical & plumbing',
    price: '₹9,500/unit',
    availability: 'In stock',
    description: 'Robust pump for construction sites and water supply systems.',
    highlights: ['High capacity', 'Energy efficient', 'Warranty included'],
  },
  {
    id: 6,
    slug: 'bosch-angle-grinder',
    name: 'Bosch Angle Grinder 750W',
    category: 'Tools & safety',
    price: '₹3,450/unit',
    availability: 'In stock',
    description: 'Compact grinder for cutting, grinding and finishing work.',
    highlights: ['Ergonomic grip', 'High RPM', 'Long life'],
  },
];

export const features = [
  {
    title: 'Verified supplier network',
    description: 'We link you with trusted local distributors and construction vendors in Delhi NCR.',
    icon: ShieldCheck,
  },
  {
    title: 'Fast delivery planning',
    description: 'Order materials for same-day or next-day delivery in metro and outskirts.',
    icon: Truck,
  },
  {
    title: 'Transparent pricing',
    description: 'Upfront rates, GST-inclusive costing and procurement support for every order.',
    icon: Sparkles,
  },
  {
    title: 'Project-ready sourcing',
    description: 'Curated materials and bundles designed for civil, finishing and MEP projects.',
    icon: Building2,
  },
];

export const testimonials = [
  {
    author: 'Rohit Mehra',
    role: 'Site Engineer, Noida',
    quote: 'MODIT helped us secure quality cement and steel for the new residential block in under 24 hours.',
  },
  {
    author: 'Anjali Sharma',
    role: 'Interior Contractor, Gurugram',
    quote: 'The tile and sanitary ware sourcing process was fast, and the delivery team was very responsive.',
  },
  {
    author: 'Amit Aggarwal',
    role: 'Builder, Ghaziabad',
    quote: 'Reliable pricing and immediate availability for bulk orders gave us the confidence to scale the project.',
  },
];
