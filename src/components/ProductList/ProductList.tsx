import React, { useState } from 'react';
import { Product, CartItem } from '../../types';
import ProductSearch from './ProductSearch';
import ProductListItem from './ProductListItem';
import styles from './ProductList.module.css';

interface ProductListProps {
  products: Product[];
  selectedProducts: CartItem[];
  onSelect: (product: Product) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  selectedProducts,
  onSelect,
  onUpdateQuantity,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className={styles.productListContainer}>
      <div className={styles.searchContainer}>
        <ProductSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={handleSearch}
        />
      </div>
      <ul className={styles.productList}>
        {products
          .filter(
            (product) =>
              product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              product.product_id.includes(searchTerm)
          )
          .map((product) => (
            <ProductListItem
              key={product.product_id}
              product={product}
              quantity={
                selectedProducts.find((p) => p.product_id === product.product_id)
                  ?.quantity || 0
              }
              onSelect={onSelect}
              onUpdateQuantity={(quantity) =>
                onUpdateQuantity(product.product_id, quantity)
              }
            />
          ))}
      </ul>
    </div>
  );
};

export default ProductList;
