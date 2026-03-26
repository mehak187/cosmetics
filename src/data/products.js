const products = [
  // Skincare
  {
    id: 1,
    name: "Vitamin C Brightening Serum",
    category: "Skincare",
    price: 2500,
    originalPrice: 3200,
    image: "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    reviews: 234,
    badge: "Bestseller",
    description: "Advanced brightening serum with 20% Vitamin C for glowing skin"
  },
  {
    id: 2,
    name: "Hyaluronic Acid Moisturizer",
    category: "Skincare",
    price: 1800,
    originalPrice: 2200,
    image: "https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.6,
    reviews: 189,
    badge: "New",
    description: "Deep hydration moisturizer with hyaluronic acid"
  },
  {
    id: 3,
    name: "Retinol Night Cream",
    category: "Skincare",
    price: 3200,
    originalPrice: 4000,
    image: "https://images.pexels.com/photos/5797999/pexels-photo-5797999.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.7,
    reviews: 156,
    badge: "",
    description: "Anti-aging night cream with retinol and peptides"
  },
  {
    id: 4,
    name: "Niacinamide Pore Minimizer",
    category: "Skincare",
    price: 1500,
    originalPrice: 1800,
    image: "https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.5,
    reviews: 312,
    badge: "Hot",
    description: "10% Niacinamide serum for pore tightening and oil control"
  },

  // Makeup
  {
    id: 5,
    name: "Matte Liquid Lipstick Set",
    category: "Makeup",
    price: 2200,
    originalPrice: 3000,
    image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.9,
    reviews: 445,
    badge: "Bestseller",
    description: "Set of 6 long-lasting matte liquid lipsticks"
  },
  {
    id: 6,
    name: "HD Foundation - All Shades",
    category: "Makeup",
    price: 2800,
    originalPrice: 3500,
    image: "https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.7,
    reviews: 278,
    badge: "",
    description: "Full coverage HD foundation with SPF 30"
  },
  {
    id: 7,
    name: "Eyeshadow Palette - Rose Gold",
    category: "Makeup",
    price: 3500,
    originalPrice: 4500,
    image: "https://images.pexels.com/photos/2639947/pexels-photo-2639947.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    reviews: 367,
    badge: "New",
    description: "18 shimmer & matte shades in rose gold tones"
  },
  {
    id: 8,
    name: "Waterproof Mascara",
    category: "Makeup",
    price: 1200,
    originalPrice: 1500,
    image: "https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.6,
    reviews: 523,
    badge: "Hot",
    description: "Volumizing waterproof mascara for dramatic lashes"
  },

  // Haircare
  {
    id: 9,
    name: "Keratin Repair Shampoo",
    category: "Haircare",
    price: 1600,
    originalPrice: 2000,
    image: "https://images.pexels.com/photos/3993398/pexels-photo-3993398.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.5,
    reviews: 198,
    badge: "",
    description: "Sulfate-free keratin shampoo for damaged hair"
  },
  {
    id: 10,
    name: "Argan Oil Hair Serum",
    category: "Haircare",
    price: 1400,
    originalPrice: 1800,
    image: "https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.7,
    reviews: 289,
    badge: "Bestseller",
    description: "Pure argan oil serum for silky smooth hair"
  },
  {
    id: 11,
    name: "Hair Growth Treatment Oil",
    category: "Haircare",
    price: 2000,
    originalPrice: 2500,
    image: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.4,
    reviews: 167,
    badge: "New",
    description: "Natural hair growth oil with biotin and castor oil"
  },

  // Fragrances
  {
    id: 12,
    name: "Midnight Rose Perfume",
    category: "Fragrances",
    price: 4500,
    originalPrice: 5500,
    image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.9,
    reviews: 412,
    badge: "Bestseller",
    description: "Luxury floral perfume with notes of rose and oud"
  },
  {
    id: 13,
    name: "Ocean Breeze Cologne",
    category: "Fragrances",
    price: 3800,
    originalPrice: 4800,
    image: "https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.6,
    reviews: 234,
    badge: "",
    description: "Fresh aquatic cologne for everyday wear"
  },
  {
    id: 14,
    name: "Vanilla Musk Body Mist",
    category: "Fragrances",
    price: 1200,
    originalPrice: 1500,
    image: "https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.5,
    reviews: 345,
    badge: "Hot",
    description: "Sweet vanilla musk body mist - long lasting fragrance"
  },

  // Nails
  {
    id: 15,
    name: "Gel Nail Polish Set",
    category: "Nails",
    price: 2800,
    originalPrice: 3500,
    image: "https://images.pexels.com/photos/3997390/pexels-photo-3997390.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.7,
    reviews: 278,
    badge: "Bestseller",
    description: "12 colors UV gel nail polish set with base & top coat"
  },
  {
    id: 16,
    name: "Nail Art Kit",
    category: "Nails",
    price: 1800,
    originalPrice: 2200,
    image: "https://images.pexels.com/photos/3997381/pexels-photo-3997381.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.4,
    reviews: 156,
    badge: "New",
    description: "Complete nail art kit with brushes, dotting tools & glitters"
  },

  // Tools & Brushes
  {
    id: 17,
    name: "Professional Brush Set - 15pc",
    category: "Tools & Brushes",
    price: 3200,
    originalPrice: 4200,
    image: "https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    reviews: 389,
    badge: "Bestseller",
    description: "Premium 15-piece makeup brush set with leather case"
  },
  {
    id: 18,
    name: "Beauty Blender Set",
    category: "Tools & Brushes",
    price: 800,
    originalPrice: 1200,
    image: "https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.6,
    reviews: 567,
    badge: "Hot",
    description: "Set of 5 beauty blender sponges for flawless application"
  },
];

export default products;

export const categories = [
  { name: "All", icon: "✨", color: "#ff6b9d" },
  { name: "Skincare", icon: "🧴", color: "#4ecdc4" },
  { name: "Makeup", icon: "💄", color: "#ff6b6b" },
  { name: "Haircare", icon: "💇‍♀️", color: "#a855f7" },
  { name: "Fragrances", icon: "🌸", color: "#f59e0b" },
  { name: "Nails", icon: "💅", color: "#ec4899" },
  { name: "Tools & Brushes", icon: "🖌️", color: "#6366f1" },
];
