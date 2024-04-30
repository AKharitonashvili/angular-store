export interface CategoryInterface {
  name: string;
  icon: string;
}

export interface ProductInterface {
  header: string;
  price: number;
  oldPrice?: number;
  isFavorite: boolean;
  image: string;
  id: string;
  type?: ProductType[];
  categories: string[];
  options?: string[];
  parameters?: { name: string; value: string; icon: string }[];
  details?: string;
}

export interface BigBannerProductsInterface extends ProductInterface {
  description: string;
}

export type ProductType = 'featured' | 'bestSeller' | 'newArrival';
