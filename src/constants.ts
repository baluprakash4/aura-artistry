import { ArtPiece, Testimonial } from './types';

export const ART_PIECES: ArtPiece[] = [
  {
    id: '1',
    title: 'For My Love Scrapbook',
    price: 999,
    description: 'A deeply personal, multi-layered handmade letter with burlap accents and floral details.',
    category: 'handmade crafts',
    imageUrl: 'https://images.unsplash.com/photo-1516589174184-c68526674fd6?auto=format&fit=crop&q=80&w=800',
    featured: true,
    details: {
      size: '8" x 10" (Closed)',
      effort: '12 Hours of Handcrafting',
      materials: ['Vintage Burlap', 'Dried Lavender', 'Handmade Paper', 'Jute Twine']
    }
  },
  {
    id: '2',
    title: 'Magical Moments Birthday Card',
    price: 499,
    description: 'A vibrant red-themed card featuring a custom calendar and heart-shaped balloons.',
    category: 'handmade crafts',
    imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800',
    featured: true,
    details: {
      size: 'A5 (Folded)',
      effort: '4 Hours of Precision Cutting',
      materials: ['Premium Cardstock', 'Silk Ribbon', 'Gold Ink', 'Embossed Paper']
    }
  },
  {
    id: '3',
    title: 'Vintage Blue Rose Scroll',
    price: 799,
    description: 'An elegant, aged parchment scroll with intricate blue rose illustrations and classic calligraphy.',
    category: 'custom gifts',
    imageUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=800',
    featured: true,
    details: {
      size: '12" x 18" (Unrolled)',
      effort: '8 Hours of Calligraphy',
      materials: ['Coffee-Stained Parchment', 'Indian Ink', 'Wooden Dowels', 'Wax Seal']
    }
  },
  {
    id: '4',
    title: 'Valentine\'s Card Set',
    price: 699,
    description: 'A collection of premium black-and-gold themed cards with red ribbon accents and heartfelt messages.',
    category: 'handmade crafts',
    imageUrl: 'https://i.pinimg.com/originals/b8/94/01/b89401cef233bc1074b92f0d7b44c22b.jpg?nii=t',
    details: {
      size: 'Set of 3 (4" x 6")',
      effort: '6 Hours of Detailed Assembly',
      materials: ['Matte Black Paper', 'Metallic Gold Foil', 'Crimson Satin', 'Hand-stamped Envelopes']
    }
  },
  {
    id: '5',
    title: 'Dear Self Coffee-Stained Letter',
    price: 399,
    description: 'A soulful, vintage-style letter on coffee-stained paper adorned with real dried flowers.',
    category: 'custom gifts',
    imageUrl: 'https://th.bing.com/th/id/OIP.RwiYB2GtK0Rjb7oFTDba1AHaHa?w=202&h=202&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
    details: {
      size: 'A4 (Single Sheet)',
      effort: '3 Hours of Aging & Artistry',
      materials: ['Recycled Paper', 'Organic Coffee Stain', 'Pressed Wildflowers', 'Charcoal Pencil']
    }
  },
];

export const INSTAGRAM_POSTS = [
  'https://picsum.photos/seed/ig1/400/400',
  'https://picsum.photos/seed/ig2/400/400',
  'https://picsum.photos/seed/ig3/400/400',
  'https://picsum.photos/seed/ig4/400/400',
  'https://picsum.photos/seed/ig5/400/400',
  'https://picsum.photos/seed/ig6/400/400',
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    customerName: 'Ananya Sharma',
    location: 'Mumbai',
    feedback: 'The scrapbook was absolutely beautiful! Every detail was so thoughtfully crafted. It made our anniversary so special.',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1516589174184-c68526674fd6?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '2',
    customerName: 'Rahul Verma',
    location: 'Delhi',
    feedback: 'I ordered a custom scroll for my parents\' 25th anniversary. The calligraphy and the aged paper look were perfect.',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '3',
    customerName: 'Priya Patel',
    location: 'Ahmedabad',
    feedback: 'The coffee-stained letter with dried flowers is a work of art. It feels so personal and vintage. Highly recommend!',
    rating: 5,
    imageUrl: 'https://th.bing.com/th/id/OIP.RwiYB2GtK0Rjb7oFTDba1AHaHa?w=202&h=202&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
  },
];

export const GREETINGS = [
  "Welcome to RU.CHI! How can I help you today?",
  "Hello! Looking for something special? I'm here to assist.",
  "Greetings! Every piece here tells a story. Which one is yours?",
  "Hi there! Hope you're having a wonderful day exploring my art.",
  "Welcome! Interested in a custom commission? Let's chat!",
  "Hello! Feel free to browse, and let me know if you have any questions.",
  "Hi! My art is made with love. I hope you find something you adore.",
  "Greetings! Each scroll and scrapbook is handcrafted just for you.",
  "Welcome back! Ready to turn your memories into timeless treasures?",
  "Hello! I'm so glad you're here. How can I make your visit better?",
  "Hi! Looking for a unique gift? You're in the right place.",
  "Greetings! Let's create something beautiful together today.",
  "Welcome! My studio is always open for your creative ideas.",
  "Hello! I hope my work brings a little joy to your day.",
  "Hi there! Every detail matters. What caught your eye?",
  "Greetings! Vintage parchment and soulful ink await your story.",
  "Welcome! I'm here to help you find the perfect piece of art.",
  "Hello! Let me know if you'd like to discuss a custom project.",
  "Hi! I'm so happy to share my passion for handmade crafts with you.",
  "Greetings! May your journey through my gallery be inspiring.",
  "Welcome! Your support for handmade art means the world to me.",
  "Hello! Is there a specific memory you'd like to preserve in ink?",
  "Hi there! I'm just a message away if you need any assistance.",
  "Greetings! Welcome to my world of calligraphy and illustration.",
  "Welcome! I hope you find a treasure that speaks to your heart."
];
