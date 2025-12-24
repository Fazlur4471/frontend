import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Enquiry, EnquiryStatus, EnquiryProductContext } from '@/types/enquiry';

interface EnquiryContextType {
  enquiries: Enquiry[];
  addEnquiry: (enquiry: Omit<Enquiry, 'id' | 'status' | 'createdAt'>) => void;
  updateEnquiryStatus: (id: string, status: EnquiryStatus) => void;
  deleteEnquiry: (id: string) => void;
  // Modal state
  isEnquiryModalOpen: boolean;
  enquiryProductContext: EnquiryProductContext | null;
  openEnquiryModal: (product: EnquiryProductContext) => void;
  closeEnquiryModal: () => void;
}

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

// Mock initial enquiries for demo
const mockEnquiries: Enquiry[] = [
  {
    id: 'enq-1',
    productId: 'mfg-1',
    productName: 'Industrial Motor Controller',
    productType: 'manufactured',
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '+1 555-0123',
    message: 'I need 50 units for our new production line. Please provide bulk pricing.',
    status: 'New',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'enq-2',
    productId: 'trd-2',
    productName: 'Siemens S7-1200 PLC',
    productType: 'trading',
    name: 'Sarah Johnson',
    email: 'sarah.j@techcorp.com',
    phone: '+1 555-0456',
    message: 'Looking for 10 units with extended warranty options.',
    status: 'Contacted',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

export const EnquiryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [enquiries, setEnquiries] = useState<Enquiry[]>(mockEnquiries);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryProductContext, setEnquiryProductContext] = useState<EnquiryProductContext | null>(null);

  const addEnquiry = (enquiryData: Omit<Enquiry, 'id' | 'status' | 'createdAt'>) => {
    const newEnquiry: Enquiry = {
      ...enquiryData,
      id: `enq-${Date.now()}`,
      status: 'New',
      createdAt: new Date().toISOString(),
    };
    setEnquiries(prev => [newEnquiry, ...prev]);
  };

  const updateEnquiryStatus = (id: string, status: EnquiryStatus) => {
    setEnquiries(prev =>
      prev.map(enq => (enq.id === id ? { ...enq, status } : enq))
    );
  };

  const deleteEnquiry = (id: string) => {
    setEnquiries(prev => prev.filter(enq => enq.id !== id));
  };

  const openEnquiryModal = (product: EnquiryProductContext) => {
    setEnquiryProductContext(product);
    setIsEnquiryModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsEnquiryModalOpen(false);
    setEnquiryProductContext(null);
  };

  return (
    <EnquiryContext.Provider
      value={{
        enquiries,
        addEnquiry,
        updateEnquiryStatus,
        deleteEnquiry,
        isEnquiryModalOpen,
        enquiryProductContext,
        openEnquiryModal,
        closeEnquiryModal,
      }}
    >
      {children}
    </EnquiryContext.Provider>
  );
};

export const useEnquiry = () => {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error('useEnquiry must be used within an EnquiryProvider');
  }
  return context;
};
