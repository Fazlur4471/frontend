import React, { createContext, useContext, useState, useCallback } from 'react';
import { ManufacturedProduct, TradingProduct } from '@/types/product';
import { initialManufacturedProducts, initialTradingProducts } from '@/data/mockProducts';

interface ProductContextType {
  manufacturedProducts: ManufacturedProduct[];
  tradingProducts: TradingProduct[];
  addManufacturedProduct: (product: Omit<ManufacturedProduct, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateManufacturedProduct: (id: string, product: Partial<ManufacturedProduct>) => void;
  deleteManufacturedProduct: (id: string) => void;
  addTradingProduct: (product: Omit<TradingProduct, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateTradingProduct: (id: string, product: Partial<TradingProduct>) => void;
  deleteTradingProduct: (id: string) => void;
  getManufacturedById: (id: string) => ManufacturedProduct | undefined;
  getTradingById: (id: string) => TradingProduct | undefined;
  getFeaturedManufactured: () => ManufacturedProduct[];
  getFeaturedTrading: () => TradingProduct[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [manufacturedProducts, setManufacturedProducts] = useState<ManufacturedProduct[]>(initialManufacturedProducts);
  const [tradingProducts, setTradingProducts] = useState<TradingProduct[]>(initialTradingProducts);

  const generateId = (prefix: string) => `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const getTimestamp = () => new Date().toISOString().split('T')[0];

  const addManufacturedProduct = useCallback((product: Omit<ManufacturedProduct, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newProduct: ManufacturedProduct = {
      ...product,
      id: generateId('mfg'),
      createdAt: getTimestamp(),
      updatedAt: getTimestamp(),
    };
    setManufacturedProducts(prev => [...prev, newProduct]);
  }, []);

  const updateManufacturedProduct = useCallback((id: string, updates: Partial<ManufacturedProduct>) => {
    setManufacturedProducts(prev =>
      prev.map(product =>
        product.id === id
          ? { ...product, ...updates, updatedAt: getTimestamp() }
          : product
      )
    );
  }, []);

  const deleteManufacturedProduct = useCallback((id: string) => {
    setManufacturedProducts(prev => prev.filter(product => product.id !== id));
  }, []);

  const addTradingProduct = useCallback((product: Omit<TradingProduct, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newProduct: TradingProduct = {
      ...product,
      id: generateId('trd'),
      createdAt: getTimestamp(),
      updatedAt: getTimestamp(),
    };
    setTradingProducts(prev => [...prev, newProduct]);
  }, []);

  const updateTradingProduct = useCallback((id: string, updates: Partial<TradingProduct>) => {
    setTradingProducts(prev =>
      prev.map(product =>
        product.id === id
          ? { ...product, ...updates, updatedAt: getTimestamp() }
          : product
      )
    );
  }, []);

  const deleteTradingProduct = useCallback((id: string) => {
    setTradingProducts(prev => prev.filter(product => product.id !== id));
  }, []);

  const getManufacturedById = useCallback((id: string) => {
    return manufacturedProducts.find(product => product.id === id);
  }, [manufacturedProducts]);

  const getTradingById = useCallback((id: string) => {
    return tradingProducts.find(product => product.id === id);
  }, [tradingProducts]);

  const getFeaturedManufactured = useCallback(() => {
    return manufacturedProducts.filter(product => product.featured).slice(0, 3);
  }, [manufacturedProducts]);

  const getFeaturedTrading = useCallback(() => {
    return tradingProducts.filter(product => product.featured).slice(0, 3);
  }, [tradingProducts]);

  return (
    <ProductContext.Provider
      value={{
        manufacturedProducts,
        tradingProducts,
        addManufacturedProduct,
        updateManufacturedProduct,
        deleteManufacturedProduct,
        addTradingProduct,
        updateTradingProduct,
        deleteTradingProduct,
        getManufacturedById,
        getTradingById,
        getFeaturedManufactured,
        getFeaturedTrading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
