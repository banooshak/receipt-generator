import { useState } from 'react';
import { Product } from '../types';

const useProducts = () => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setSelectedProducts((prev) => [...prev, product]);
  };

  const removeProduct = (productId: string) => {
    setSelectedProducts((prev) => prev.filter(product => product.product_id !== productId));
  };

  const clearProducts = () => {
    setSelectedProducts([]);
  };

  return {
    selectedProducts,
    addProduct,
    removeProduct,
    clearProducts,
  };
};

export default useProducts;