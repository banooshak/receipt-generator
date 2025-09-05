import React from 'react';
import { CartItem } from '../../types';
import TAX_RATES from '../../constants/taxRates';
import ReceiptItem from './ReceiptItem';
import ReceiptSummary from './ReceiptSummary';
import styles from './Receipt.module.css';

interface ReceiptProps {
  selectedProducts: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
}

const Receipt: React.FC<ReceiptProps> = ({ selectedProducts, onUpdateQuantity }) => {
  const calculateSubtotal = () => {
    if (!selectedProducts?.length) return "0.00";
    return selectedProducts
      .reduce((total, product) => total + (product.price * product.quantity), 0)
      .toFixed(2);
  };

  const { state: stateTaxRate, county: countyTaxRate, city: cityTaxRate } = TAX_RATES;

  const calculateTaxes = () => {
    if (!selectedProducts?.length) {
      return {
        stateTax: "0.00",
        countyTax: "0.00",
        cityTax: "0.00"
      };
    }

    const stateTax = selectedProducts
      .filter(product => product.tax_category !== 'g')
      .reduce((total, product) => total + (product.price * product.quantity * stateTaxRate), 0)
      .toFixed(2);

    const countyTax = selectedProducts
      .filter(product => product.tax_category !== 'g')
      .reduce((total, product) => total + (product.price * product.quantity * countyTaxRate), 0)
      .toFixed(2);

    const cityTax = selectedProducts
      .reduce((total, product) => total + (product.price * product.quantity * cityTaxRate), 0)
      .toFixed(2);

    return { stateTax, countyTax, cityTax };
  };

  const subtotal = calculateSubtotal();
  const { stateTax, countyTax, cityTax } = calculateTaxes();
  const totalDue = (
    parseFloat(subtotal) + 
    parseFloat(stateTax) + 
    parseFloat(countyTax) + 
    parseFloat(cityTax)
  ).toFixed(2);

  const handleClearCart = () => {
    selectedProducts.forEach(product => onUpdateQuantity(product.product_id, 0));
  };

  return (
    <div className={styles.receipt}>
      <div className={styles.fixedHeader}>
        <div className={styles.receiptHeader}>
          <h2 className={styles.receiptTitle}>Receipt Summary</h2>
        </div>
        
        <div className={styles.summaryContainer}>
          <ReceiptSummary
            subtotal={subtotal}
            stateTax={stateTax}
            countyTax={countyTax}
            cityTax={cityTax}
            totalDue={totalDue}
          />
        </div>

        <div className={styles.cartHeader}>
          <div className={styles.cartHeaderContent}>
            <h3 className={styles.cartTitle}>Shopping Cart Items</h3>
            {selectedProducts.length > 0 && (
              <button
                className={styles.clearCartButton}
                onClick={handleClearCart}
                aria-label="Clear all items from cart"
              >
                Clear Cart
              </button>
            )}
          </div>
        </div>
      </div>
      
      <div className={styles.scrollableContent}>
        <div className={styles.receiptItems}>
          {selectedProducts?.length > 0 ? (
            selectedProducts.map(product => (
              <ReceiptItem 
                key={product.product_id} 
                product={product}
                onUpdateQuantity={(quantity) => onUpdateQuantity(product.product_id, quantity)}
              />
            ))
          ) : (
            <div className={styles.emptyReceipt}>
              <p>No items selected</p>
              <p className={styles.hint}>Click on products to add them to your receipt</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Receipt;