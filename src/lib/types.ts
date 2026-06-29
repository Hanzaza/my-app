export type UserRole = 'admin' | 'employee' | 'manager';

export interface Company {
  id: string;
  name: string;
  exchangeRate?: number;
  pettyCashInitial?: number;
  logoUrl?: string;
  securityCodeSet?: boolean;
}

export interface User {
  id: string;
  uid: string;
  email: string;
  name: string;
  role: UserRole;
  company: Company;
}

export interface AppUser extends User {
  uid: string;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  quantity: number;
  salePrice: number;
  purchaseCost: number;
  lowStockThreshold: number;
  categoryId: string;
  imageUrl: string;
  imageHint?: string;
  stockingUnit: 'unidad' | 'lb' | 'oz' | 'L' | 'kg' | 'qq';
  companyId?: string;
  sku?: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface SaleItem {
  id?: string;
  saleId?: string;
  productId: string;
  productName: string;
  salePrice: number;
  unit?: string;
  saleUnitId?: string;
  quantity: number;
  total: number;
}

export interface Sale {
  id: string;
  companyId?: string;
  userId?: string;
  employeeId?: string;
  totalAmount?: number;
  grandTotal: number;
  paymentCurrency: Currency;
  status?: string;
  needsReview?: boolean;
  reviewNotes?: string;
  saleDate?: string;
  date: string;
  employeeName?: string;
  clientName?: string;
  items: SaleItem[];
}

export interface CashOutflow {
  id: string;
  companyId?: string;
  date: string;
  amount: number;
  reason: string;
  currency: Currency;
  cashBox: 'general' | 'petty';
  type: string;
}

export interface Inflow {
  id: string;
  companyId?: string;
  date: string;
  total: number;
  reason: string;
  currency: Currency;
  cashBox: 'general' | 'petty';
  type: string;
}

export interface CashTransfer {
  id: string;
  companyId?: string;
  date: string;
  amount: number;
  currency: Currency;
  fromBox: 'general' | 'petty';
  toBox: 'general' | 'petty';
  reason: string;
  type: string;
}

export interface Reconciliation {
  id: string;
  status: string;
  date?: string;
  total?: number;
}

export interface OrderDraft {
  id: string;
  companyId?: string;
  title: string;
  totalCost: number;
  createdAt: string;
  draftName?: string;
  // Agregamos la propiedad items que faltaba
  items: {
    productId: string;
    productName: string;
    orderQuantity: number;
    purchaseCost: number;
  }[];
}

export type Currency = 'NIO' | 'USD';

export interface NewUserData {
  email: string;
  name: string;
  password: string;
  role: UserRole;
}
