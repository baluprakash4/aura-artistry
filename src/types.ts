export type ArtCategory = 'paintings' | 'custom gifts' | 'handmade crafts';

export interface ArtPiece {
  id: string;
  title: string;
  price: number;
  description: string;
  category: ArtCategory;
  imageUrl: string;
  featured?: boolean;
  details?: {
    size: string;
    effort: string;
    materials: string[];
  };
}

export interface Workshop {
  id: string;
  title: string;
  description: string;
  date?: string;
  status: 'coming-soon' | 'active';
}

export interface Testimonial {
  id: string;
  customerName: string;
  location?: string;
  feedback: string;
  rating: number;
  imageUrl: string;
}
