export type ArtCategory = 'paintings' | 'custom gifts' | 'handmade crafts';

export interface ArtPiece {
  id: string;
  title: string;
  price: number;
  description: string;
  category: ArtCategory;
  imageUrl: string;
  featured?: boolean;
}

export interface Workshop {
  id: string;
  title: string;
  description: string;
  date?: string;
  status: 'coming-soon' | 'active';
}
