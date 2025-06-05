import type { Product } from "../Interfaces/Product"
import { ProductCard } from "./ProductCard"

interface ProductsListProps {
    products: Product[],
    onAddToCart: (product: Product) => void
}

export const ProductsList = ({products, onAddToCart}:ProductsListProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Nuestros Productos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
