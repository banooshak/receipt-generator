import React from 'react';
import styles from './Container.module.css';
import { Product } from '../../types';



interface ContainerProps {
  children: [
    React.ReactNode,
    React.ReactElement<{ selectedProducts: Product[] }>
  ];
}
const Container: React.FC<ContainerProps> = ({ children }) => {

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        {children[0]}
      </div>
      <div className={styles.sidebar}>
        <div className={styles.summarySection}>
          {children[1]}
        </div>
      </div>
    </div>
  );
};

export default Container;