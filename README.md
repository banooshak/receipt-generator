# Keenan's Receipt Generator

Keenan's Receipt Generator is a web application designed for generating sales receipts for a convenience store chain. The application allows users to view a list of available products, select items for purchase, and generate a detailed receipt that includes product information, tax calculations, and totals.

## Features

- **Product List**: Displays a list of available products with search functionality to filter items by name or identifier.
- **Product Selection**: Users can select products to add to their receipt.
- **Receipt Generation**: Automatically updates the receipt with selected products, showing detailed information including:
  - Product name
  - Product identifier
  - Price
  - Tax category
  - Subtotal
  - Tax for each jurisdiction (state, county, city)
  - Total due

## Tax Rates

- **State Tax**: 6.3% (not applicable for grocery items)
- **County Tax**: 0.7% (not applicable for grocery items)
- **City Tax**: 2.0% (applies to all items)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/keenan-receipt-generator.git
   ```
2. Navigate to the project directory:
   ```
   cd keenan-receipt-generator
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```
This will launch the application in your default web browser.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.