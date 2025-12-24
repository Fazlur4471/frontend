// Mock API service layer - ready to be replaced with real API calls

import { ManufacturedProduct, TradingProduct } from '@/types/product';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API endpoints - these will be replaced with actual API calls
export const api = {
  // Manufactured Products
  manufactured: {
    getAll: async (): Promise<ManufacturedProduct[]> => {
      await delay(100);
      // In production: return fetch('/api/manufactured').then(res => res.json());
      return [];
    },
    getById: async (id: string): Promise<ManufacturedProduct | null> => {
      await delay(100);
      // In production: return fetch(`/api/manufactured/${id}`).then(res => res.json());
      return null;
    },
    create: async (product: Omit<ManufacturedProduct, 'id' | 'createdAt' | 'updatedAt'>): Promise<ManufacturedProduct> => {
      await delay(200);
      // In production: return fetch('/api/manufactured', { method: 'POST', body: JSON.stringify(product) }).then(res => res.json());
      return {} as ManufacturedProduct;
    },
    update: async (id: string, product: Partial<ManufacturedProduct>): Promise<ManufacturedProduct> => {
      await delay(200);
      // In production: return fetch(`/api/manufactured/${id}`, { method: 'PATCH', body: JSON.stringify(product) }).then(res => res.json());
      return {} as ManufacturedProduct;
    },
    delete: async (id: string): Promise<void> => {
      await delay(200);
      // In production: return fetch(`/api/manufactured/${id}`, { method: 'DELETE' });
    },
  },

  // Trading Products
  trading: {
    getAll: async (): Promise<TradingProduct[]> => {
      await delay(100);
      // In production: return fetch('/api/trading').then(res => res.json());
      return [];
    },
    getById: async (id: string): Promise<TradingProduct | null> => {
      await delay(100);
      // In production: return fetch(`/api/trading/${id}`).then(res => res.json());
      return null;
    },
    create: async (product: Omit<TradingProduct, 'id' | 'createdAt' | 'updatedAt'>): Promise<TradingProduct> => {
      await delay(200);
      // In production: return fetch('/api/trading', { method: 'POST', body: JSON.stringify(product) }).then(res => res.json());
      return {} as TradingProduct;
    },
    update: async (id: string, product: Partial<TradingProduct>): Promise<TradingProduct> => {
      await delay(200);
      // In production: return fetch(`/api/trading/${id}`, { method: 'PATCH', body: JSON.stringify(product) }).then(res => res.json());
      return {} as TradingProduct;
    },
    delete: async (id: string): Promise<void> => {
      await delay(200);
      // In production: return fetch(`/api/trading/${id}`, { method: 'DELETE' });
    },
  },

  // Contact Form
  contact: {
    submit: async (data: {
      name: string;
      email: string;
      phone: string;
      product?: string;
      message: string;
    }): Promise<{ success: boolean; message: string }> => {
      await delay(500);
      // In production: return fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) }).then(res => res.json());
      return { success: true, message: 'Thank you for your enquiry. We will contact you shortly.' };
    },
  },

  // Authentication
  auth: {
    login: async (username: string, password: string): Promise<{ success: boolean; token?: string }> => {
      await delay(300);
      // In production: return fetch('/api/auth/login', { method: 'POST', body: JSON.stringify({ username, password }) }).then(res => res.json());
      if (username === 'admin' && password === 'admin123') {
        return { success: true, token: 'mock-jwt-token' };
      }
      return { success: false };
    },
    logout: async (): Promise<void> => {
      await delay(100);
      // In production: return fetch('/api/auth/logout', { method: 'POST' });
    },
  },
};
