import React from 'react';
import styles from './ReceiptSummary.module.css';

interface ReceiptSummaryProps {
  subtotal: string;
  stateTax: string;
  countyTax: string;
  cityTax: string;
  totalDue: string;
}

const ReceiptSummary: React.FC<ReceiptSummaryProps> = ({
  subtotal,
  stateTax,
  countyTax,
  cityTax,
  totalDue
}) => {
  return (
    <div className={styles.summary}>
      <div className={styles.row}>
        <span>Subtotal:</span>
        <span>${subtotal}</span>
      </div>
      <div className={styles.row}>
        <span>State Tax (6.3%)<sup>*</sup>:</span>
        <span>${stateTax}</span>
      </div>
      <div className={styles.row}>
        <span>County Tax (0.7%)<sup>*</sup>:</span>
        <span>${countyTax}</span>
      </div>
      <div className={styles.row}>
        <span>City Tax (2.0%):</span>
        <span>${cityTax}</span>
      </div>
      <div className={`${styles.row} ${styles.total}`}>
        <span>Total:</span>
        <span>${totalDue}</span>
      </div>
      <div className={`${styles.row}`}><div><sup>*</sup> No State and County tax for groceries</div></div>
    </div>
  );
};

export default ReceiptSummary;
