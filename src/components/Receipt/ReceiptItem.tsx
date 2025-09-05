import React from 'react';
import { CartItem } from '../../types';
import styles from './ReceiptItem.module.css';

interface ReceiptItemProps {
  product: CartItem;  // CartItem already includes the quantity property
  onUpdateQuantity: (quantity: number) => void;
}

const ReceiptItem: React.FC<ReceiptItemProps> = ({ product, onUpdateQuantity }) => {
  return (
    <div className={styles.receiptItem}>
      <div className={styles.productInfo}>
        <span className={styles.productName}>{product.product_name}</span>
        <div className={styles.productMeta}>
          <span className={styles.productId}>ID: {product.product_id}</span>
          <span className={styles.categoryLabel}>
            Category: {product.tax_category_label}
          </span>
        </div>
      </div>
      <div className={styles.itemControls}>
        <div 
          className={styles.quantityControl}
          role="group"
          aria-label={`Quantity controls for ${product.product_name}`}
        >
          <button
            type="button"
            onClick={() => onUpdateQuantity(Math.max(0, product.quantity - 1))}
            className={styles.quantityButton}
            aria-label={`Decrease quantity of ${product.product_name}`}
            disabled={product.quantity <= 0}
          >
            <span aria-hidden="true">−</span>
          </button>
          <input
            type="number"
            min="0"
            value={product.quantity}
            onChange={(e) => onUpdateQuantity(Math.max(0, parseInt(e.target.value) || 0))}
            className={styles.quantityInput}
            aria-label={`Quantity of ${product.product_name}`}
          />
          <button
            type="button"
            onClick={() => onUpdateQuantity(product.quantity + 1)}
            className={styles.quantityButton}
            aria-label={`Increase quantity of ${product.product_name}`}
          >
            <span aria-hidden="true">+</span>
          </button>
        </div>
        <span className={styles.price}>
          ${(product.price * product.quantity).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ReceiptItem;