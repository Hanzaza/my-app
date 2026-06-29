# Documentación Técnica: Sistema de Control de Venta
# 🚀 Sistema de Control de Venta
 
 Este documento detalla la estructura subyacente, stack tecnológico y decisiones arquitectónicas del sistema.
 
## 1. Stack Tecnológico (Materiales y Herramientas)
## 🛠️ 1. Stack Tecnológico
 
 El proyecto está construido bajo un ecosistema moderno de JavaScript/TypeScript, utilizando un modelo de full-stack acoplado.
 
*   **Lenguaje de Programación:** **TypeScript** estricto (`tsconfig.json`) en todo el ecosistema (cliente y servidor).
*   **Frameworks y Librerías (Cliente/Servidor):** 
-    *   **Next.js (v16.1.6):** Actúa como framework full-stack principal, utilizando el paradigma del **App Router** (`src/app`).
-    *   **React (v19.2.3):** Para el desarrollo de interfaces de usuario interactivas.
-    *   **Tailwind CSS (v3.4.1):** Como motor de estilos por utilidades.
-    *   **Radix UI:** Para la provisión de componentes UI accesibles y "headless" (diálogos, menús, pestañas, etc.).
*   **Sistema Gestor de Base de Datos Relacional (SGBD):** El sistema está configurado para operar sobre **PostgreSQL**, evidenciado en el archivo del esquema (`provider = "postgresql"`). Adicionalmente, se utiliza el adaptador y driver `pg` (Postgres) embebido en Node.js.
*   **ORM (Object-Relational Mapping):** Se emplea **Prisma ORM** (`@prisma/client` y `@prisma/adapter-pg` en su versión `7.8.0`) para la declaración de la estructura de datos, migraciones y ejecución de consultas de forma segura respecto al tipado.
-
## 2. Arquitectura y Acceso a Datos
-
*   **Arquitectura Cliente-Servidor:**
-    El sistema emplea la arquitectura nativa orientada a componentes de Next.js, donde se combinan **Server Components** para la carga inicial eficiente e integraciones con backend, y **Client Components** para la interactividad. El acceso a los datos se resuelve a través de **Server Actions** (por ejemplo, los métodos expuestos en `src/lib/db-actions.ts` indicados con la directiva `'use server'`). Estos Server Actions actúan como controladores directos (capa de lógica de negocio) que invocan al ORM en un entorno de servidor seguro para procesar datos, eliminando la necesidad de crear una capa intermedia de APIs RESTful tradicionales para las operaciones del CRUD principal.
-
*   **Entidades y Tablas de la Base de Datos (10 tablas mapeadas):**
-    Según el análisis del archivo `prisma/schema.prisma`, existen las siguientes **10 entidades** modeladas:
-    1.  `Company` (Empresa)
-    2.  `User` (Usuario)
-    3.  `Product` (Producto)
-    4.  `SaleUnit` (Unidad de Venta/Conversión)
-    5.  `Sale` (Venta / Transacción Maestra)
-    6.  `SaleItem` (Detalle de Venta)
-    7.  `InventoryAdjustment` (Ajuste de Inventario/Mermas)
-    8.  `CashFlow` (Flujo de Caja Maestro)
-    9.  `CashInflow` (Entrada de Efectivo/Ingreso)
-    10. `CashOutflow` (Salida de Efectivo/Egreso)
-
*   **Ejemplo de Operación CRUD (ORM):**
-    El alta de un registro (Create) se realiza invocando los modelos autogenerados de Prisma. Un claro ejemplo se observa en el archivo `src/lib/db-actions.ts` mediante la función `addProduct`:
-    ```typescript
-    export async function addProduct(data: Prisma.ProductUncheckedCreateInput) {
-      // Implementación directa del ORM 'prisma.product.create'
-      const newProduct = await prisma.product.create({
-        data: {
-          name: data.name,
-          companyId: data.companyId,
-          storageUnit: data.storageUnit,
-          stockQuantity: data.stockQuantity,
-        },
-      });
-      return newProduct;
-    }
-    ```
-    *Nota: Adicionalmente se utiliza el método transaccional `prisma.$transaction()` (ej. en `addSale`) para asegurar la integridad referencial al insertar una venta, sus ítems y deducir el inventario simultáneamente.*
-
## 3. Seguridad y Diseño de Interfaz
-
*   **Gestión de Login y Roles:**
-    El inicio de sesión y persistencia de sesión se implementan mediante un flujo de **JSON Web Tokens (JWT)** empleando la librería de bajo nivel `jose`. Al realizar un login válido, se codifica un token que contiene información vital y persistente en el *payload*, incluyendo el identificador, la compañía y el **Rol** del usuario.
-    Los roles están rigurosamente definidos a nivel de base de datos utilizando el sistema *Enum* de Prisma (Enum `Role`: `ADMIN`, `MANAGER`, `EMPLOYEE`). En el frontend, la sesión decodificada alimenta un proveedor de estados globales llamado `AuthContext` (`auth-context-new.tsx`), desde el cual los componentes evalúan condicionalmente los accesos permitidos según el rol.
-*   **Cifrado de Contraseñas:**
-    Para el hashing o cifrado unidireccional de contraseñas (almacenamiento en base de datos y validación de credenciales), el sistema depende explícitamente de la librería **`bcryptjs`**. Se utiliza un factor de trabajo o *salt* estándar (10 rondas), evidenciado en los métodos `hashPassword` y `comparePassword` expuestos en `src/lib/auth.ts`.
*   **Pantallas, Vistas y Formularios Interactivos (15 elementos listados):**
-    A través de los directorios `src/app` y `src/components`, se ha diseñado una amplia interfaz de gestión:
-    1.  Formulario de Inicio de Sesión (*Login Page*)
-    2.  Formulario de Registro (*Register Page*)
-    3.  Formulario para Transferencias de Efectivo (`cash-transfer-form.tsx`)
-    4.  Formulario de Ingresos / Entradas de Dinero (`inflow-form.tsx`)
-    5.  Formulario de Egresos / Gastos de Efectivo (`outflow-form.tsx`)
-    6.  Formulario para Retiro de Caja (`withdrawal-form.tsx`)
-    7.  Formulario de Ajustes por Merma o Pérdida de Inventario (`loss-adjustment-form.tsx`)
-    8.  Formulario de Creación/Edición de Productos (`product-form.tsx`)
-    9.  Importador Masivo (Carga Batch) de Productos (`product-importer.tsx`)
-    10. Cuadro de Diálogo/Modal para Selección de Cantidades de Venta (`quantity-dialog.tsx` en el POS)
-    11. Panel/Formulario de Carrito de Compras en Terminal de Venta (`cart.tsx` en el POS)
-    12. Formulario de Edición de Ventas pasadas (`edit-sale-form.tsx`)
-    13. Formulario para Registro Manual de Venta externa (`log-sale-form.tsx`)
-    14. Formulario de Revisión Final y Cierre de Transacción (`review-form.tsx`)
-    15. Componente Interactivo de Selección de Rangos de Fechas (`date-range-picker.tsx`)
-
## 4. Reportes
-
-El sistema cuenta con varios módulos analíticos y de comprobantes de operaciones diseñados para condensar la información parametrizada, los cuales están centralizados en la ruta `/dashboard/reports` y en componentes dedicados:
-
1.  **Reporte General de Ventas (`sales-report.tsx`):** Desglose paramétrico de las transacciones con consolidado financiero.
2.  **Reporte/Maestro de Inventarios (`inventory-report.tsx`):** Listado y cálculo actual del stock disponible.
3.  **Reporte de Ingresos (`inflows-report.tsx`):** Histórico de todo flujo de dinero entrante a la caja.
4.  **Reporte de Egresos (`outflows-report.tsx`):** Histórico de desembolsos, gastos y transferencias.
5.  **Tabla Base Analítica (`report-table.tsx`):** Componente dinámico de tabla para la renderización de diversas consultas analíticas.
6.  **Gráfica de Tendencia de Ventas (`sales-chart.tsx`):** Visualización estadística elaborada con `recharts`.
7.  **Tarjetas de Resumen/KPI (`stat-card.tsx`):** Tarjetas de totales maestras (ej: Ventas Totales del Mes).
8.  **Comprobante (Factura/Ticket) de POS (`invoice.tsx`):** Clásico reporte maestro-detalle diseñado para ser emitido (impreso/exportado) tras una venta.
-9.  **Recibo de Ingreso (`inflow-receipt.tsx`):** Comprobante documentario para justify entradas de flujo de caja.
-10. **Recibo de Egreso (`outflow-receipt.tsx`):** Comprobante documentario para justify salidas.
-11. **Tabla de Reconciliación/Cuadre (`reconciliation-table.tsx`):** Reporte diario del arqueo de caja frente al flujo real.
-12. **Tabla y Acordeón del Historial de Ventas (`sales-history-table.tsx` y `sales-history-accordion.tsx`):** Vista especializada para auditar el detalle (los ítems adquiridos) de un comprobante emitido.#POS
-   **Lenguaje:** **TypeScript** estricto.
-   **Framework Full-Stack:** **Next.js** (v16.1.6) con **App Router**.
-   **Librería UI:** **React** (v19.2.3).
-   **Estilos:** **Tailwind CSS** (v3.4.1) y **Radix UI** para componentes headless.
-   **Base de Datos:** **PostgreSQL**.
-   **ORM:** **Prisma ORM** (v7.8.0) para acceso a datos y migraciones.

## 🏗️ 2. Arquitectura y Acceso a Datos

### Arquitectura Cliente-Servidor
El sistema emplea la arquitectura nativa de Next.js, combinando **Server Components** (para renderizado inicial y acceso a datos) y **Client Components** (para interactividad).

El acceso a datos se centraliza a través de **Server Actions** (ver `src/lib/db-actions.ts`), que actúan como una capa de API segura y directa a la base de datos, eliminando la necesidad de endpoints REST/GraphQL tradicionales.

### Entidades de la Base de Datos
El esquema de Prisma modela 10 entidades principales:
1.  `Company` (Empresa)
2.  `User` (Usuario)
3.  `Product` (Producto)
4.  `SaleUnit` (Unidad de Venta/Conversión)
5.  `Sale` (Venta / Transacción Maestra)
6.  `SaleItem` (Detalle de Venta)
7.  `InventoryAdjustment` (Ajuste de Inventario/Mermas)
8.  `CashFlow` (Flujo de Caja Maestro)
9.  `CashInflow` (Entrada de Efectivo/Ingreso)
10. `CashOutflow` (Salida de Efectivo/Egreso)

### Ejemplo de Operación CRUD (Server Action)
El alta de un producto se realiza a través de una Server Action que valida los datos y luego invoca a Prisma. Esto asegura que la lógica de negocio y el acceso a la base de datos permanezcan en el servidor.

```typescript
// src/lib/db-actions.ts
export async function addProduct(data: ProductPayload) {
  // 1. Validación de entrada en el servidor
  if (!data.name || !data.companyId) {
    throw new Error('El nombre y el ID de la compañía son obligatorios.');
  }

  // 2. Implementación directa del ORM
 const newProduct = await prisma.product.create({
    data: {
      name: data.name,
      companyId: data.companyId,
      quantity: data.quantity || 0,
      // ...otros campos
    },
  });

  return newProduct;
 }
```
> **Nota:** Se utiliza `prisma.$transaction()` en operaciones complejas como `addSale` para garantizar la integridad de los datos (ej: crear una venta y actualizar el stock de forma atómica).

## 🛡️ 3. Seguridad y Diseño de Interfaz

### Gestión de Login y Roles
-   **Autenticación:** Se implementa un flujo de **JSON Web Tokens (JWT)** con la librería `jose`.
-   **Roles:** Los roles (`ADMIN`, `MANAGER`, `EMPLOYEE`) están definidos en la base de datos con un `Enum` de Prisma y se validan en el frontend a través de un `AuthContext`.
 -   **Cifrado de Contraseñas:** Se utiliza **`bcryptjs`** para el hashing seguro de las contraseñas.
 
 ### Componentes y Formularios Interactivos
 La interfaz de gestión incluye más de 15 componentes especializados, entre los que destacan:
 -   Formularios de Login y Registro.
 -   Formularios de gestión de inventario (`product-form.tsx`, `loss-adjustment-form.tsx`).
 -   Importador masivo de productos (`product-importer.tsx`).
 -   Terminal de Punto de Venta (POS) con carrito y diálogo de cantidad.
 -   Formularios de flujo de caja (`inflow-form.tsx`, `outflow-form.tsx`).
 -   Selector de rangos de fechas (`date-range-picker.tsx`).
 
 ## 📊 4. Reportes
 
 El sistema cuenta con un módulo de reportes centralizado en `/dashboard/reports` para análisis y generación de comprobantes.
 
 1.  **Reporte General de Ventas:** Desglose de transacciones con totales.
 2.  **Reporte de Inventarios:** Stock actual y valoración.
 3.  **Reportes de Flujo de Caja:** Históricos de ingresos y egresos.
 4.  **Gráfica de Tendencia de Ventas:** Visualización con `recharts`.
 5.  **Comprobante de Venta (Ticket/Factura):** Diseño para impresión/exportación.
 6.  **Recibos de Ingreso/Egreso:** Justificantes de movimientos de caja.
 7.  **Tabla de Reconciliación (Arqueo):** Reporte de cuadre de caja diario.
 8.  **Historial de Ventas:** Vista de auditoría para el detalle de cada venta.

