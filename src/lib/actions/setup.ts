'use server';

import { cookies } from 'next/headers';
import { prisma } from '../prisma';
import { hashPassword, generateToken } from '../auth';

export interface InitialSetupValues {
  companyName: string;
  adminName: string;
  email: string;
  password: string;
}

export async function isInitialSetupRequired(): Promise<boolean> {
  try {
    const companyCount = await prisma.company.count();
    return companyCount === 0;
  } catch (error) {
    console.error('Error verificando el estado de configuración:', error);
    throw new Error('No se pudo verificar la base de datos');
  }
}

export async function createInitialAdminUser(values: InitialSetupValues) {
  try {
    const hashedPassword = await hashPassword(values.password);

    const newCompany = await prisma.company.create({
      data: {
        name: values.companyName,
        users: {
          create: {
            name: values.adminName,
            email: values.email,
            password: hashedPassword,
            role: 'admin',
          },
        },
      },
      include: { users: true },
    });

    const adminUser = newCompany.users[0];

    const token = await generateToken({
      userId: adminUser.id,
      companyId: newCompany.id,
      email: adminUser.email,
      role: adminUser.role,
    });

    // CORRECCIÓN NEXT.JS 15: await cookies()
    const cookieStore = await cookies();
    cookieStore.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });

    return { success: true, company: newCompany };
  } catch (error) {
    console.error('Error creando el setup inicial:', error);
    throw new Error('No se pudo crear la empresa inicial');
  }
}

// --- ACCIONES DE CATEGORÍAS IMPLEMENTADAS ---

export async function addCategory(name: string, userId: string) {
  try {
    // 1. Buscamos a qué empresa pertenece el usuario
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { companyId: true }
    });

    if (!user || !user.companyId) {
      throw new Error("No se encontró la empresa del usuario.");
    }

    // 2. Creamos la categoría usando el companyId real de la base de datos
    const newCategory = await prisma.category.create({
      data: {
        name,
        companyId: user.companyId,
      },
    });
    
    return newCategory;
  } catch (error) {
    console.error('Error al insertar categoría:', error);
    throw new Error('No se pudo crear la categoría');
  }
}

export async function deleteCategory(id: string) {
  try {
    await prisma.category.delete({
      where: { id },
    });
    return { success: true };
  } catch (error) {
    console.error('Error al eliminar categoría:', error);
    throw new Error('No se pudo eliminar la categoría');
  }
}

// --- STUBS PENDIENTES ---

function notImplemented(name: string): never {
  throw new Error(`La acción '${name}' no está implementada aún.`);
}

export interface DraftItem {
  productId: string;
  productName: string;
  orderQuantity: number;
  purchaseCost: number;
}

export async function addOrderDraft(title: string, items: DraftItem[], totalCost: number, userId: string) { notImplemented('addOrderDraft'); }
export async function deleteOrderDraft(draftId: string, userId: string) { notImplemented('deleteOrderDraft'); }

export async function markSaleForReview() { notImplemented('markSaleForReview'); }
export async function updateSaleAndAdjustStock() { notImplemented('updateSaleAndAdjustStock'); }
export async function updateCompanySettings() { notImplemented('updateCompanySettings'); }
export async function updateReconciliationStatus() { notImplemented('updateReconciliationStatus'); }
export async function setCompanySecurityCode() { notImplemented('setCompanySecurityCode'); }
export async function initiateCompanyWipe() { notImplemented('initiateCompanyWipe'); }
export async function updateUserRole() { notImplemented('updateUserRole'); }
export async function deleteUser() { notImplemented('deleteUser'); }
export async function transferPrimaryAdmin() { notImplemented('transferPrimaryAdmin'); }
export async function addUser() { notImplemented('addUser'); }
export async function addCashTransfer() { notImplemented('addCashTransfer'); }
export async function addWithdrawal() { notImplemented('addWithdrawal'); }
export async function adjustStockForLoss() { notImplemented('adjustStockForLoss'); }
export async function addMultipleProducts() { notImplemented('addMultipleProducts'); }