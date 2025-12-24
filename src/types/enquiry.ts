export type EnquiryStatus = 'New' | 'Contacted' | 'Closed';

export interface Enquiry {
  id: string;
  productId: string;
  productName: string;
  productType: 'manufactured' | 'trading';
  name: string;
  email: string;
  phone: string;
  message: string;
  status: EnquiryStatus;
  createdAt: string;
}

export interface EnquiryProductContext {
  id: string;
  name: string;
  type: 'manufactured' | 'trading';
}
