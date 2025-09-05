export interface Product {
  product_id: string;
  product_name: string;
  price: number;
  tax_category: 'g' | 'pf' | 'pd' | 'nd' | 'o' | 'c' | 'o' ; 
  tax_category_label: 'Groceries' | 'Prepared Food' | 'Prescription Drug' | 'Non-Prescription Drug' | 'Clothing' | 'Other Items';
}

export interface ReceiptItem {
  product: Product;
  quantity: number;
}

export interface Receipt {
  items: ReceiptItem[];
  subtotal: number;
  stateTax: number;
  countyTax: number;
  cityTax: number;
  totalDue: number;
}

export interface CartItem extends Product {
  quantity: number;
}