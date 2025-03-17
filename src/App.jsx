import { useState } from 'react';
import { ShoppingCart as CartIcon } from 'lucide-react';
import { CartProvider } from './context/CartContext';
import { ProductCard } from './components/ProductCard';
import { Cart } from './components/cart';
import { products } from './data/products';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">React Store</h1>
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="p-2 hover:bg-gray-100 rounded-full relative"
            >
              <CartIcon size={24} />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex gap-8">
            {/* Products Grid */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${isCartOpen ? 'w-2/3' : 'w-full'}`}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Cart Sidebar */}
            {isCartOpen && (
              <div className="w-1/3 bg-white p-6 rounded-lg shadow-lg h-fit sticky top-4">
                <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
                <Cart />
              </div>
            )}
          </div>
        </main>
      </div>
    </CartProvider>
  );
}

export default App;

