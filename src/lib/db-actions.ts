'use server';

import { prisma } from './prisma';
import { Prisma } from '../../generated/prisma';

// 1. Creamos el molde para eliminar los 'any'
export interface ProductPayload {
 name?: string;
  companyId?: string;
  stockingUnit?: string;
  storageUnit?: string;
  quantity?: number;
  stockQuantity?: number;
  categoryId?: string | null;
  purchaseCost?: number;       
  salePrice?: number;          
  lowStockThreshold?: number;

}

/**
 * 1. PRODUCTOS
 */
export async function addProduct(data: ProductPayload) {
  try {
    const stockingUnit = data.stockingUnit || data.storageUnit || 'unidad';
    const quantity = data.quantity !== undefined ? data.quantity : (data.stockQuantity || 0);

    // En db-actions.ts -> addProduct
const newProduct = await prisma.product.create({
  data: {
    name: data.name!,
    companyId: data.companyId!,
    stockingUnit: data.stockingUnit || 'unidad',
    quantity: data.quantity || 0,
    categoryId: data.categoryId || null,
    purchaseCost: Number(data.purchaseCost) || 0, // Asegúrate de tener estas líneas
    salePrice: Number(data.salePrice) || 0,
    lowStockThreshold: Number(data.lowStockThreshold) || 10,
  },
});

    return {
      ...newProduct,
      quantity: Number(newProduct.quantity),
      stockQuantity: Number(newProduct.quantity),
      purchaseCost: Number(newProduct.purchaseCost),
      salePrice: Number(newProduct.salePrice)
    };
  } catch (error) {
    console.error('Error al insertar producto:', error);
    throw new Error('No se pudo crear el producto');
  }
}

export async function getProducts(userId: string) {
  const companyId = await getCompanyIdForUser(userId);
  if (!companyId) return [];

  const products = await prisma.product.findMany({ 
    where: { companyId: companyId } 
  });
  
  return products.map(p => ({
    ...p,
    quantity: Number(p.quantity),
    stockQuantity: Number(p.quantity),
    // ¡Adiós a los ceros fijos! Ahora leemos la base de datos real:
    lowStockThreshold: p.lowStockThreshold,
    purchaseCost: Number(p.purchaseCost),
    salePrice: Number(p.salePrice),
    categoryId: p.categoryId || '', 
    imageUrl: '',
    stockingUnit: p.stockingUnit as "unidad" | "lb" | "oz" | "L" | "kg" | "qq",
  }));
}

export async function updateProduct(id: string, data: ProductPayload, userId: string) {
  try {
    const dataToUpdate: Prisma.ProductUncheckedUpdateInput = {}; 
    
    if (data.name !== undefined) dataToUpdate.name = data.name;
    if (data.stockingUnit !== undefined) dataToUpdate.stockingUnit = data.stockingUnit;
    if (data.storageUnit !== undefined) dataToUpdate.stockingUnit = data.storageUnit;
    
    // Aseguramos que las cantidades y precios vayan como números puros
    if (data.quantity !== undefined) dataToUpdate.quantity = Number(data.quantity);
    if (data.stockQuantity !== undefined) dataToUpdate.quantity = Number(data.stockQuantity);
    if (data.purchaseCost !== undefined) dataToUpdate.purchaseCost = Number(data.purchaseCost);
    if (data.salePrice !== undefined) dataToUpdate.salePrice = Number(data.salePrice);
    
    // ¡CORRECCIÓN CRÍTICA!: lowStockThreshold es un INT en Postgres.
    // Forzamos que se convierta a un entero puro de JavaScript por si viene como string
    if (data.lowStockThreshold !== undefined) {
      dataToUpdate.lowStockThreshold = parseInt(String(data.lowStockThreshold), 10) || 0;
    }

    if (data.categoryId !== undefined) {
      dataToUpdate.categoryId = data.categoryId || null;
    }

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: dataToUpdate,
    });
    
    return {
      ...updatedProduct,
      quantity: Number(updatedProduct.quantity),
      stockQuantity: Number(updatedProduct.quantity),
      purchaseCost: Number(updatedProduct.purchaseCost),
      salePrice: Number(updatedProduct.salePrice)
    };
  } catch (error) {
    // Modificamos esto para que puedas ver exactamente qué campo o restricción está fallando
    console.error('Error al actualizar producto:', error);
    const errorMessage = error instanceof Error ? error.message : 'No se pudo actualizar el producto';
    throw new Error(errorMessage);
  }
}

export async function deleteProduct(id: string, userId: string) {
  try {
    await prisma.product.delete({
      where: { id },
    });
    return { success: true };
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    throw new Error('No se pudo eliminar el producto');
  }
}

export async function restockInventory(id: string, qty: number, userId: string) {
  try {
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        quantity: {
          increment: qty,
        },
      },
    });
    return {
      ...updatedProduct,
      quantity: Number(updatedProduct.quantity),
      stockQuantity: Number(updatedProduct.quantity)
    };
  } catch (error) {
    console.error('Error al reabastecer producto:', error);
    throw new Error('No se pudo reabastecer el producto');
  }
}

/**
 * 2. VENTAS
 */
interface SaleInput {
  companyId: string;
  userId: string;
  totalAmount: number;
  items: {
    productId: string;
    saleUnitId: string;
    quantitySold: number;
    priceAtSale: number;
  }[];
}

export async function addSale(data: SaleInput) {
  try {
    const saleResult = await prisma.$transaction(async (tx) => {
      const sale = await tx.sale.create({
        data: {
          companyId: data.companyId,
          userId: data.userId,
          totalAmount: data.totalAmount,
          status: 'COMPLETED',
          items: {
            create: data.items.map((item) => ({
              productId: item.productId,
              saleUnitId: item.saleUnitId,
              quantitySold: item.quantitySold,
              priceAtSale: item.priceAtSale,
            })),
          },
        },
        include: { items: true },
      });

      for (const item of data.items) {
        const saleUnit = await tx.saleUnit.findUniqueOrThrow({
          where: { id: item.saleUnitId }
        });

        const quantityToDeduct = Number(item.quantitySold) * Number(saleUnit.conversionFactor);

        await tx.product.update({
          where: { id: item.productId },
          data: { quantity: { decrement: quantityToDeduct } },
        });
      }
      
      return sale;
    });

    return {
      ...saleResult,
      totalAmount: Number(saleResult.totalAmount),
      items: saleResult.items.map(item => ({
        ...item,
        quantitySold: Number(item.quantitySold),
        priceAtSale: Number(item.priceAtSale)
      }))
    };
  } catch (error) {
    console.error('Error procesando la venta:', error);
    throw new Error('No se pudo completar la venta');
  }
}

export async function getSales(companyId: string) {
  const sales = await prisma.sale.findMany({ 
    where: { companyId }, 
    include: { 
      items: { include: { product: true } }, 
      user: true 
    }, 
    orderBy: { createdAt: 'desc' } 
  });
  
  return sales.map(s => ({
    ...s,
    totalAmount: Number(s.totalAmount) || 0,
    grandTotal: Number(s.totalAmount) || 0,
    paymentCurrency: 'NIO' as "NIO" | "USD",
    saleDate: s.saleDate.toISOString(),
    createdAt: s.createdAt.toISOString(),
    updatedAt: s.updatedAt.toISOString(),
    date: s.saleDate.toISOString(), 
    employeeName: s.user?.name || '',
    items: s.items.map(item => ({
      ...item,
      productName: item.product?.name || '',
      salePrice: Number(item.priceAtSale) || 0,
      quantity: Number(item.quantitySold) || 0,
      total: Number(item.priceAtSale) * Number(item.quantitySold) || 0,
    })),
  }));
}

/**
 * 3. FUNCIONES ADICIONALES (MOCKS Y CATEGORÍAS)
 */
export async function getCashOutflows(_companyId: string) { return []; }
export async function getInflows(_companyId: string) { return []; }
export async function getCashTransfers(_companyId: string) { return []; }
export async function getOrderDrafts(_companyId: string) { return []; }

export async function getUsers(companyId: string) { 
  const users = await prisma.user.findMany({ where: { companyId } }); 
  return users.map(u => ({
    ...u,
    uid: u.id,
    role: u.role.toLowerCase(), 
    company: {} as Record<string, unknown>, 
  }));
}

export async function getClosedReconciliations(_companyId: string) { return []; }

export async function getCategories(userId: string) {
  const companyId = await getCompanyIdForUser(userId);
  if (!companyId) return [];

  const categories = await prisma.category.findMany({
    where: { companyId: companyId }
  });

  return categories.map(c => ({
    id: c.id,
    name: c.name,
    companyId: c.companyId
  }));
}

export async function getCompanyIdForUser(userId: string) { 
  const user = await prisma.user.findUnique({ 
    where: { id: userId },
    select: { companyId: true } 
  });
  return user?.companyId || null;
}

export async function addCashOutflow(_data: unknown) { return null; }
export async function addInflow(_data: unknown) { return null; }
export async function getReconciliationStatus(_companyId: string) { return { status: 'open' }; }
export async function updateReconciliationStatus(_companyId: string, _status: unknown) { return null; }