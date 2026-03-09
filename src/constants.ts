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
  },
  {
    id: '2',
    title: 'Magical Moments Birthday Card',
    price: 499,
    description: 'A vibrant red-themed card featuring a custom calendar and heart-shaped balloons.',
    category: 'handmade crafts',
    imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800',
    featured: true,
  },
  {
    id: '3',
    title: 'Vintage Blue Rose Scroll',
    price: 799,
    description: 'An elegant, aged parchment scroll with intricate blue rose illustrations and classic calligraphy.',
    category: 'custom gifts',
    imageUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=800',
    featured: true,
  },
  {
    id: '4',
    title: 'Valentine\'s Card Set',
    price: 699,
    description: 'A collection of premium black-and-gold themed cards with red ribbon accents and heartfelt messages.',
    category: 'handmade crafts',
    imageUrl: 'https://i.pinimg.com/originals/b8/94/01/b89401cef233bc1074b92f0d7b44c22b.jpg?nii=t',
  },
  {
    id: '5',
    title: 'Dear Self Coffee-Stained Letter',
    price: 399,
    description: 'A soulful, vintage-style letter on coffee-stained paper adorned with real dried flowers.',
    category: 'custom gifts',
    imageUrl: 'https://th.bing.com/th/id/OIP.RwiYB2GtK0Rjb7oFTDba1AHaHa?w=202&h=202&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
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
