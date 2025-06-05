import type { CartItem } from "../Interfaces/CartItem"
import type { Product } from "../Interfaces/Product"

interface CartShopProps {
    items: CartItem[],
    handleUpdateQuantity: (productId: string, quantity: number) => void
    handleRemoveFromCart: (product: Product) => void
    isOpen: boolean
    onClose: () => void
}

export const CartShop = ({items, handleUpdateQuantity, handleRemoveFromCart, isOpen, onClose}: CartShopProps) => {

const total = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)

if (!isOpen) return null

  return (
    <div className="fixed top-16 right-4 w-96 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 max-h-[80vh] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h15M6 13v8a2 2 0 002 2h8a2 2 0 002-2v-8" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Carrito de Compras</h3>
            <p className="text-xs text-gray-500">{items.length} artículos</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="p-1.5 hover:bg-white hover:shadow-sm rounded-full transition-all duration-200"
        >
          <svg className="w-4 h-4 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Content */}
      {items.length === 0 ? (
        <div className="p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" />
            </svg>
          </div>
          <p className="text-gray-500 text-sm">Tu carrito está vacío</p>
          <p className="text-xs text-gray-400 mt-1">¡Agrega algunos productos para comenzar!</p>
        </div>
      ) : (
        <>
          {/* Items */}
          <div className="max-h-80 overflow-y-auto">
            {items.map(item => (
              <div key={item.product.id} className="p-4 border-b border-gray-50 hover:bg-gray-25 transition-colors">
                <div className="flex items-start space-x-3">
                  {/* Product Image Placeholder */}
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                   <img src={item.product.image} alt={item.product.name} className="w-12 h-12 rounded-lg" />
                  </div>
                  
                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 truncate">{item.product.name}</h4>
                    <p className="text-sm font-semibold text-blue-600">${item.product.price.toFixed(2)}</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => handleUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                          className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                        >
                          <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-gray-900">{item.quantity}</span>
                        <button 
                          onClick={() => handleUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                        >
                          <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => handleRemoveFromCart(item.product)}
                        className="text-xs text-red-500 hover:text-red-700 hover:underline transition-colors"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 bg-gray-50 border-t border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-lg font-semibold text-gray-900">Total</span>
              <span className="text-xl font-bold text-gray-900">${total.toFixed(2)}</span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
