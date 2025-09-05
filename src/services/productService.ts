import { Product } from '../types';

const products: Product[] = [
  {
    product_id: '017082112774',
    product_name: 'JK LNK BEEF TERI',
    price: 5.99,
    tax_category: 'g',
    tax_category_label: 'Groceries',
  },
  {
    product_id: '018200530470',
    product_name: 'BUD LT 12 CAN',
    price: 11.99,
    tax_category: 'o',
    tax_category_label: 'Other Items',
  },
  {
    product_id: '028400157827',
    product_name: 'CHEETOS CHED JAL',
    price: 3.99,
    tax_category: 'g',
    tax_category_label: 'Groceries',
  },
  {
    product_id: '028400589864',
    product_name: 'CHEETOS CRUNCHY',
    price: 3.99,
    tax_category: 'g',
    tax_category_label: 'Groceries',
  },
  {
    product_id: '080660956756',
    product_name: 'CORONA LT 12 BTL',
    price: 12.99,
    tax_category: 'o',
    tax_category_label: 'Other Items',
  },
  {
    product_id: '305730133203',
    product_name: 'ADVIL IBU 20CT',
    price: 7.99,
    tax_category: 'nd',
    tax_category_label: 'Non-Prescription Drug',
  },
  {
    product_id: '051000199447',
    product_name: 'CAMPBELL GO COCO',
    price: 4.69,
    tax_category: 'g',
    tax_category_label: 'Groceries',
  },
  {
    product_id: '051000058874',
    product_name: 'CAMPBELL HLTH TOM',
    price: 2.49,
    tax_category: 'g',
    tax_category_label: 'Groceries',
  },
  {
    product_id: '051000195654',
    product_name: 'CAMPBELL HOME SW',
    price: 3.99,
    tax_category: 'g',
    tax_category_label: 'Groceries',
  },
  {
    product_id: '305732450421',
    product_name: 'NEXIUM 24H ACID',
    price: 8.99,
    tax_category: 'nd',
    tax_category_label: 'Non-Prescription Drug',
  },
  {
    product_id: '305730184328',
    product_name: 'ADVIL COLD SINUS',
    price: 6.99,
    tax_category: 'nd',
    tax_category_label: 'Non-Prescription Drug',
  },
  {
    product_id: '305730179201',
    product_name: 'ADVIL JR IBUPROF',
    price: 4.99,
    tax_category: 'nd',
    tax_category_label: 'Non-Prescription Drug',
  },
];

export const fetchProducts = async (): Promise<
  Product[]
> => {
  // Simulating a service call with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};
