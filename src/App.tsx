import { useState, useEffect } from 'react';
import ProductList from './components/ProductList/ProductList';
import Receipt from './components/Receipt/Receipt';
import Header from './components/Layout/Header';
import Container from './components/Layout/Container';
import { Product, CartItem } from './types';
import { fetchProducts } from './services/productService';
import './App.css';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<CartItem[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productData = await fetchProducts();
        setProducts(productData);
      } catch (error) {
        console.error('Failed to load products:', error);
      }
    };
    
    loadProducts();
  }, []);

  const handleProductSelect = (product: Product) => {
    setSelectedProducts(prevSelected => {
      const existingItem = prevSelected.find(item => item.product_id === product.product_id);
      
      if (existingItem) {
        return prevSelected.map(item =>
          item.product_id === product.product_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevSelected, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setSelectedProducts(prevSelected => {
      if (quantity <= 0) {
        return prevSelected.filter(item => item.product_id !== productId);
      }
      
      return prevSelected.map(item =>
        item.product_id === productId
          ? { ...item, quantity }
          : item
      );
    });
  };

  return (
    <div className="App">
      <Header />
      <Container>
        <ProductList 
          products={products} 
          selectedProducts={selectedProducts}
          onSelect={handleProductSelect}
          onUpdateQuantity={handleUpdateQuantity}
        />
        <Receipt 
          selectedProducts={selectedProducts}
          onUpdateQuantity={handleUpdateQuantity}
        />          
      </Container>
    </div>
  );
}

export default App;