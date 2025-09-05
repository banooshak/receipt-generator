import React from 'react';
import { Product } from '../../types';
import styles from './ProductListItem.module.css';

interface ProductListItemProps {
  product: Product;
  quantity?: number;
  onSelect: (product: Product) => void;
  onUpdateQuantity?: (quantity: number) => void;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ 
  product, 
  quantity = 0,
  onSelect,
  onUpdateQuantity 
}) => {
  return (
    <li 
      className={`${styles.productItem} ${quantity > 0 ? styles.selected : ''}`}
      onClick={() => !quantity && onSelect(product)}
    >
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.product_name}</h3>
        <div className={styles.productMeta}>
          <p className={styles.productId}>ID: {product.product_id}</p>
          <p className={styles.categoryLabel}>Category: {product.tax_category_label}</p>
        </div>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
      </div>
      {quantity > 0 && (
        <div 
          className={styles.quantityControl}
          onClick={e => e.stopPropagation()}
          role="group"
          aria-label={`Quantity controls for ${product.product_name}`}
        >
          <button
            type="button"
            onClick={() => onUpdateQuantity?.(Math.max(0, quantity - 1))}
            className={styles.quantityButton}
            aria-label={`Decrease quantity of ${product.product_name}`}
          >
            <span aria-hidden="true">−</span>
          </button>
          <span className={styles.quantity}>{quantity}</span>
          <button
            type="button"
            onClick={() => onUpdateQuantity?.(quantity + 1)}
            className={styles.quantityButton}
            aria-label={`Increase quantity of ${product.product_name}`}
          >
            <span aria-hidden="true">+</span>
          </button>
        </div>
      )}
    </li>
  );
};

export default ProductListItem;
