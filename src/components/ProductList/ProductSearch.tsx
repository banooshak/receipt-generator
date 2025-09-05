import React from 'react';
import styles from './ProductSearch.module.css';

interface ProductSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onSearch: (term: string) => void;
}

const ProductSearch: React.FC<ProductSearchProps> = ({
  searchTerm,
  setSearchTerm,
  onSearch,
}) => {
  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <div className={styles.searchWrapper}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          onSearch(e.target.value);
        }}
        placeholder="Search products..."
        className={styles.searchInput}
        aria-label="Search products"
      />
      <button
        type="button"
        onClick={handleClear}
        className={styles.clearButton}
        disabled={!searchTerm}
        aria-label="Clear search"
      >
        Clear
      </button>
    </div>
  );
};

export default ProductSearch;