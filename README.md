# 🛒 My Shopping Cart App

Una aplicación moderna de carrito de compras construida con **React + TypeScript + Tailwind CSS**, que simula una experiencia de e-commerce real con un diseño elegante y funcional.

## 🌟 Características Principales

- ✅ **Catálogo de productos**
- ✅ **Carrito flotante elegante**
- ✅ **Gestión inteligente de productos** 
- ✅ **Persistencia de datos** en localStorage
- ✅ **Contador dinámico** de items en el carrito

## 🚀 Cómo Ejecutar la Aplicación

### Prerrequisitos
- **Node.js** (versión 16 o superior)
- **Bun** (recomendado) o **npm** o **yarn**

### Instalación y Ejecución

1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd my-shopping-cart
   ```

2. **Instala las dependencias:**
   ```bash
   bun install
   # o alternativamente:
   # npm install
   # yarn install
   ```

3. **Ejecuta la aplicación en modo desarrollo:**
   ```bash
   bun dev
   # o alternativamente:
   # npm run dev
   # yarn dev
   ```

4. **Abre tu navegador** en `http://localhost:5173`

### Scripts Disponibles

```bash
bun dev         # Ejecuta en modo desarrollo
bun run build   # Construye para producción
bun run preview # Previsualiza la build de producción
bun run lint    # Ejecuta el linter
```

**💡 Nota:** Este proyecto está optimizado para **Bun**, pero también es compatible con npm y yarn.

## 🎯 Funcionalidades de la Aplicación

### 🏪 **Catálogo de Productos**
- Visualización de productos en cards elegantes
- Información detallada: nombre, precio, descripción e imagen
- Grid responsivo que se adapta a diferentes tamaños de pantalla

### 🔍 **Búsqueda de Productos**
- Barra de búsqueda en tiempo real
- Filtrado por nombre de producto
- Resultados instantáneos sin recargar la página

### 🛒 **Carrito de Compras Inteligente**
- **Panel flotante** que no bloquea la navegación
- **Prevención de duplicados**: Si agregas un producto existente, incrementa la cantidad
- **Controles de cantidad** con botones + y -
- **Eliminación individual** de productos
- **Cálculo automático** del total
- **Estado vacío** con mensaje amigable

### 💾 **Persistencia de Datos**
- Los datos del carrito se guardan automáticamente en `localStorage`
- Al recargar la página, el carrito mantiene su estado
- Funciona offline


## 🔧 Arquitectura y Hooks Utilizados

### 📁 **Estructura del Proyecto**

```
src/
├── Components/           # Componentes React
│   ├── CartShop.tsx     # Carrito flotante
│   ├── ProductCard.tsx  # Card individual de producto
│   ├── ProductsList.tsx # Lista de productos
│   └── SearchBar.tsx    # Barra de búsqueda
├── hooks/               # Custom Hooks
│   └── useCart.ts       # Hook para gestión del carrito
├── Interfaces/          # Definiciones de tipos TypeScript
│   ├── ActionCart.ts    # Tipos de acciones del reducer
│   ├── CartItem.ts      # Tipo para items del carrito
│   ├── Product.ts       # Tipo para productos
│   └── cartReducer.ts   # Reducer del carrito
├── data/               # Datos estáticos
│   └── products.ts     # Catálogo de productos
└── App.tsx            # Componente principal
```

### 🎣 **Hooks Utilizados**

#### **1. `useState` - Manejo de Estado Local**
```typescript
// Control del estado de búsqueda
const [search, setSearch] = useState("")

// Control de visibilidad del carrito
const [isCartOpen, setIsCartOpen] = useState(false)
```

**Propósito:**
- Gestionar estados simples y locales de los componentes
- Controlar la visibilidad del carrito
- Manejar el texto de búsqueda en tiempo real

#### **2. `useReducer` - Gestión Compleja del Estado**
```typescript
const [cartState, dispatch] = useReducer(cartReducer, initialState, init)
```

**Propósito:**
- Manejar el estado complejo del carrito de compras
- Centralizar toda la lógica de operaciones del carrito


**Acciones del Reducer:**
- `ADD_ITEM`: Agregar producto (o incrementar cantidad si existe)
- `REMOVE_ITEM`: Eliminar producto del carrito
- `UPDATE_QUANTITY`: Actualizar cantidad específica

#### **3. `useEffect` - Efectos Secundarios**
```typescript
useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState));
}, [cartState]);
```

**Propósito:**
- Sincronizar el estado del carrito con localStorage
- Persistir datos automáticamente en cada cambio
- Funciona como "auto-save" del carrito

#### **4. `useCart` - Custom Hook**
```typescript
export const useCart = () => {
    const [cartState, dispatch] = useReducer(cartReducer, initialState, init);
    
    const handleAddToCart = (product: Product) => {
        dispatch({ type: "ADD_ITEM", payload: product })
    }
    
    // ... más handlers
    
    return {
        cartState,
        handleAddToCart,
        handleRemoveFromCart,
        handleUpdateQuantity
    }
}
```

**Ventajas del Custom Hook:**
- **Reutilización**: Lógica del carrito disponible en cualquier componente
- **Encapsulación**: Oculta la complejidad del reducer
- **Testing**: Fácil de testear de forma aislada
- **Mantenimiento**: Centraliza toda la lógica del carrito

## 🛠️ Tecnologías Utilizadas

- **⚛️ React 19** - Biblioteca principal de UI
- **📘 TypeScript** - Tipado estático para mejor desarrollo
- **🎨 Tailwind CSS** - Framework de estilos utilitarios
- **⚡ Vite** - Bundler rápido para desarrollo
- **🟡 Bun** - Runtime y package manager ultrarrápido
- **🔧 ESLint** - Linter para calidad de código


## 🧪 Patrones de Diseño Implementados

### **1. Reducer Pattern**
- Centraliza la lógica del estado del carrito
- Hace predecibles las actualizaciones de estado
- Facilita el debugging con acciones claras

### **2. Custom Hooks Pattern**
- Encapsula lógica reutilizable
- Separa la lógica de la presentación
- Facilita el testing unitario

### **3. Component Composition**
- Componentes pequeños y enfocados
- Reutilización a través de props
- Fácil mantenimiento y testing

### **4. Immutable Updates**
- Todas las actualizaciones del estado son inmutables
- Mejor rendimiento con React
- Previene bugs relacionados con mutaciones

## 🎨 Decisiones de Diseño

### **Carrito Flotante vs. Página Separada**
- ✅ **Elegido**: Carrito flotante
- **Razón**: Mejor UX, permite seguir navegando
- **Inspiración**: Amazon, Shopify, apps modernas



## 📱 Responsive Design


## 🚀 Posibles Mejoras Futuras


## 👨‍💻 Desarrollado por Alejandro Ortiz Trejos

Este proyecto fue desarrollado como tarea universitaria del curso de React + Ruby On Rails de la Universidad Cenfotec.

---

¡Gracias por revisar este proyecto! 🎉
