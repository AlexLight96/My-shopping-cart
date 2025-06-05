import './App.css'

import { products } from './data/products'
import { ProductsList } from './Components/ProductsList'
import { useCart } from './hooks/useCart'
import { CartShop } from './Components/CartShop';
import { useState } from 'react';
import { SearchBar } from './Components/SearchBar';

function App() {

  const { 
    cartState,
    handleAddToCart, 
    handleRemoveFromCart, 
    handleUpdateQuantity 
  } = useCart();

  const [search, setSearch] = useState("")
  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleSearchChange = (searchTerm: string) => {
    setSearch(searchTerm)
  }

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  const totalItems = cartState.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <>
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Mi Aplicación de Compras
            </h1>
            
            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h15M6 13v8a2 2 0 002 2h8a2 2 0 002-2v-8" />
              </svg>
              <span className="font-medium">Carrito</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-6 h-6 flex items-center justify-center font-semibold animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <SearchBar onSearchChange={handleSearchChange} />
        <ProductsList products={filteredProducts} onAddToCart={handleAddToCart} />
        
        <CartShop 
          items={cartState} 
          handleUpdateQuantity={handleUpdateQuantity} 
          handleRemoveFromCart={handleRemoveFromCart}
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />
      </div>
    </>
  )
}

export default App
