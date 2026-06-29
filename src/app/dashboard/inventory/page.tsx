"use client";

import { useState, useEffect, useCallback } from "react";
import { ProductsTable } from "@/components/inventory/products-table";
import { Product, Category } from "@/lib/types";

// 1. TODAS las funciones de productos y utilidades vienen de db-actions
import { 
  getProducts, 
  getCategories, 
  addProduct, 
  updateProduct, 
  deleteProduct, 
  restockInventory, 
  getCompanyIdForUser 
} from "@/lib/db-actions";

// 2. SOLO las funciones de crear/borrar categoría vienen de setup
import { addCategory, deleteCategory } from "@/lib/actions/setup";

import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/auth-context-new";
import { Skeleton } from "@/components/ui/skeleton";

export default function InventoryPage() {
  const { user } = useAuth();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchData = useCallback(async () => {
    // Verificamos explícitamente que exista user y uid para apaciguar a TypeScript
    if (!user || !user.uid) return;
    setLoading(true);
    try {
      const [productsData, categoriesData] = await Promise.all([
          getProducts(user.uid as string),
          getCategories(user.uid as string)
      ]);
      
      // Forzamos el tipado con "as unknown as Product[]" para que TS ignore la diferencia de "stockingUnit"
      setProducts(productsData as unknown as Product[]);
      setCategories(categoriesData as unknown as Category[]);
    } catch (error) {
      console.error("Inventory fetch error:", error);
      toast({ variant: "destructive", title: "Error", description: "No se pudieron cargar los datos." });
    } finally {
      setLoading(false);
    }
  }, [toast, user]);

  useEffect(() => {
    if (user) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      fetchData();
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLoading(false);
    }
  }, [user, fetchData]);

  // --- LÓGICA DE PRODUCTOS ---
  
  const handleAddProduct = async (newProductData: Omit<Product, 'id'>) => {
    if (!user || !user.uid) return;
    try {
      const companyId = user.company?.id || await getCompanyIdForUser(user.uid as string);

      if (!companyId) {
        toast({ variant: "destructive", title: "Error", description: "No se encontró la empresa del usuario." });
        return;
      }

      // AQUÍ LA MAGIA: Usamos los nombres actualizados de la base de datos
      const productForDb = {
        name: newProductData.name,
        companyId: companyId, 
        stockingUnit: newProductData.stockingUnit || 'unidad', 
        quantity: Number(newProductData.quantity) || Number(newProductData.quantity) || 0, 
        purchaseCost: Number(newProductData.purchaseCost) || 0,
        salePrice: Number(newProductData.salePrice) || 0,
        lowStockThreshold: Number(newProductData.lowStockThreshold) || 10,
        categoryId: newProductData.categoryId || null, 
      };

      await addProduct(productForDb); 
      await fetchData(); 
      toast({ title: "Éxito", description: "Producto añadido correctamente." });
    } catch (error) {
      console.error(error);
      toast({ variant: "destructive", title: "Error", description: "No se pudo añadir el producto." });
    }
  };

  const handleUpdateProduct = async (updatedProduct: Product) => {
    if (!user || !user.uid) return;
    try {
      await updateProduct(updatedProduct.id, updatedProduct, user.uid as string);
      await fetchData();
      toast({ title: "Éxito", description: "Producto actualizado correctamente." });
    } catch (error) {
      console.error(error);
      toast({ variant: "destructive", title: "Error", description: "No se pudo actualizar el producto." });
    }
  };

  const handleDeleteProduct = async (productId: string) => {
    if (!user || !user.uid) return;
    try {
      await deleteProduct(productId, user.uid as string);
      await fetchData();
      toast({ title: "Éxito", description: "Producto eliminado correctamente." });
    } catch (error) {
      console.error(error);
      toast({ variant: "destructive", title: "Error", description: "No se pudo eliminar el producto." });
    }
  };

  const handleRestockProduct = async (productId: string, qty: number) => {
    if (!user || !user.uid) return;
    try {
      await restockInventory(productId, qty, user.uid as string);
      await fetchData(); 
      toast({ title: "Entrada de Inventario", description: "El stock ha sido actualizado correctamente." });
    } catch (error) {
      console.error(error);
      toast({ variant: "destructive", title: "Error", description: "No se pudo reabastecer el producto." });
    }
  };

  // --- LÓGICA DE CATEGORÍAS ---

  const handleCreateCategory = async (name: string) => {
    if (!user || !user.uid) return;
    try {
      await addCategory(name, user.uid as string);
      await fetchData(); 
      toast({ title: "Categoría creada", description: "La categoría ya está disponible para tus productos." });
    } catch (error) {
      console.error(error);
      toast({ variant: "destructive", title: "Error", description: "No se pudo crear la categoría." });
    }
  };

  const handleRemoveCategory = async (id: string) => {
    if (!user) return;
    try {
      await deleteCategory(id);
      await fetchData();
      toast({ title: "Categoría eliminada", description: "Se ha borrado del sistema exitosamente." });
    } catch (error) {
      console.error(error);
      toast({ variant: "destructive", title: "Error", description: "No se pudo eliminar la categoría." });
    }
  };

  return (
    <div className="flex flex-col">
      <header className="p-4 sm:p-6">
        <h1 className="text-2xl font-bold tracking-tight font-headline">
          Inventario
        </h1>
        <p className="text-muted-foreground">
          Gestiona tus productos, categorías y controla los niveles de stock.
        </p>
      </header>
      <main className="flex-1 p-4 pt-0 sm:p-6 sm:pt-0">
        {loading ? (
          <div className="space-y-4">
             <div className="flex items-center justify-between">
              <Skeleton className="h-10 w-64" />
              <div className="flex gap-2">
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-32" />
              </div>
            </div>
            <Skeleton className="h-96 w-full" />
          </div>
        ) : (
          <ProductsTable
            data={products}
            categories={categories}
            onAddProduct={handleAddProduct}
            onUpdateProduct={handleUpdateProduct}
            onDeleteProduct={handleDeleteProduct}
            onImportComplete={fetchData}
            onAdjustLoss={fetchData}
            onCreateCategory={handleCreateCategory}
            onDeleteCategory={handleRemoveCategory}
            onRestock={handleRestockProduct} 
          />
        )}
      </main>
    </div>
  );
}