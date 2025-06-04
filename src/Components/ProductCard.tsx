import type { Product } from '../Interfaces/Product'

interface ProductCardProps {
    product: Product,
    onAddToCart: (product: Product) => void
}

export const ProductCard = ({product, onAddToCart}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <img src={product.image} alt={product.name} className="w-full h-64 object-contain rounded-md bg-gray-50" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h2>
        <p className="text-2xl font-semibold text-green-600 mb-2">${product.price}</p>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <button 
          onClick={() => onAddToCart(product)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
        >
          Add {product.name} to Cart
        </button>
      </div>
    </div>
  )
}
