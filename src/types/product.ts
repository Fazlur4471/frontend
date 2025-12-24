export interface Product {
  id: string;
  name: string;
  category: string;
  type?: string;
  description: string;
  shortDescription: string;
  specifications: Record<string, string>;
  applications: string[];
  images: string[];
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ManufacturedProduct extends Product {
  productType: 'manufactured';
}

export interface TradingProduct extends Product {
  productType: 'trading';
  brand?: string;
}

export type ProductType = ManufacturedProduct | TradingProduct;
