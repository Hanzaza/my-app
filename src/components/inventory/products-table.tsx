"use client"
"use no memo"

import * as React from "react"
import {
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { FileUp, FolderKanban, Plus, X } from "lucide-react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getColumns, ProductColumnActions } from "./columns"
import { Product, Category } from "@/lib/types"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ProductForm } from "./product-form"
import { ProductImporter } from "./product-importer"

interface ProductsTableProps extends Omit<ProductColumnActions, 'categories' | 'onAdjustLoss'> {
  data: Product[];
  categories: Category[];
  onAddProduct: (product: Omit<Product, 'id'>) => void;
  onImportComplete: () => void;
  onAdjustLoss: () => void;
  onCreateCategory: (name: string) => Promise<void>;
  onDeleteCategory: (id: string) => Promise<void>;
  onRestock: (id: string, qty: number) => Promise<void>;
}

export function ProductsTable({ 
  data, 
  categories, 
  onAddProduct, 
  onUpdateProduct, 
  onDeleteProduct, 
  onImportComplete, 
  onAdjustLoss, 
  onCreateCategory, 
  onDeleteCategory, 
  onRestock 
}: ProductsTableProps) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  
  const [isAddDialogOpen, setIsAddDialogOpen] = React.useState(false)
  const [isImportDialogOpen, setIsImportDialogOpen] = React.useState(false)
  const [isCategoryDialogOpen, setIsCategoryDialogOpen] = React.useState(false)

  const [newCategoryName, setNewCategoryName] = React.useState("");
  const [isSubmittingCategory, setIsSubmittingCategory] = React.useState(false);

  const columns = React.useMemo(
    () => getColumns({ onUpdateProduct, onDeleteProduct, onAdjustLoss, categories, onRestock }),
    [onUpdateProduct, onDeleteProduct, onAdjustLoss, categories, onRestock]
  );
  
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  const handleCreateCategoryClick = async () => {
    if (!newCategoryName.trim()) return;
    setIsSubmittingCategory(true);
    try {
      await onCreateCategory(newCategoryName);
      setNewCategoryName(""); 
    } finally {
      setIsSubmittingCategory(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Input
          placeholder="Filtrar productos..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <div className="flex gap-2">
          
          <Dialog open={isImportDialogOpen} onOpenChange={setIsImportDialogOpen}>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <FileUp className="mr-2 h-4 w-4"/>
                    Importar
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Importar Productos desde Excel</DialogTitle>
                    <DialogDescription>
                        Sube un archivo .xlsx con tus productos. El sistema omitirá los productos cuyo nombre ya exista.
                    </DialogDescription>
                </DialogHeader>
                <ProductImporter
                    allProducts={data} 
                    categories={categories} 
                    onImport={() => {
                        setIsImportDialogOpen(false);
                        onImportComplete();
                    }}
                />
            </DialogContent>
          </Dialog>

          <Dialog open={isCategoryDialogOpen} onOpenChange={setIsCategoryDialogOpen}>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <FolderKanban className="mr-2 h-4 w-4"/>
                    Categorías
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Gestionar Categorías</DialogTitle>
                    <DialogDescription>
                        Crea y elimina categorías para organizar tus productos.
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nueva Categoría</label>
                    <div className="flex gap-2">
                      <Input 
                        placeholder="Ej. Bebidas" 
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleCreateCategoryClick()}
                        disabled={isSubmittingCategory}
                      />
                      <Button onClick={handleCreateCategoryClick} disabled={!newCategoryName.trim() || isSubmittingCategory} className="bg-blue-500 hover:bg-blue-600">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Categorías Existentes</label>
                    <div className="flex flex-wrap gap-2 p-3 border rounded-md min-h-[60px] max-h-[200px] overflow-y-auto bg-slate-50 dark:bg-slate-900/50">
                      {categories.length === 0 ? (
                        <span className="text-sm text-muted-foreground m-auto">No hay categorías creadas.</span>
                      ) : (
                        categories.map((cat) => (
                          <Badge key={cat.id} variant="secondary" className="pl-3 pr-1 py-1 flex items-center gap-1 text-sm">
                            {cat.name}
                            <button 
                              onClick={() => onDeleteCategory(cat.id)}
                              className="rounded-full p-0.5 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                            >
                              <X className="h-3 w-3 text-slate-500" />
                            </button>
                          </Badge>
                        ))
                      )}
                    </div>
                  </div>
                </div>
            </DialogContent>
          </Dialog>

          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-500 hover:bg-blue-600">
                <Plus className="mr-2 h-4 w-4" />
                Añadir Producto
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Añadir Nuevo Producto</DialogTitle>
                <DialogDescription>
                  Completa los detalles a continuación para añadir un nuevo producto a tu inventario.
                </DialogDescription>
              </DialogHeader>
              <ProductForm 
                categories={categories}
                onSubmit={(data) => {
                  onAddProduct(data);
                  setIsAddDialogOpen(false);
              }} />
            </DialogContent>
          </Dialog>

        </div>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  Aún no hay productos. ¡Añade el primero o importa una lista!
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Anterior
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Siguiente
        </Button>
      </div>
    </div>
  )
}