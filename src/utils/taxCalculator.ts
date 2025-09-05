function calculateTax(price: number, taxRate: number): number {
    return price * taxRate;
}

export function calculateTaxes(products: Array<{ price: number; tax_category: string }>): {
    subtotal: number;
    stateTax: number;
    countyTax: number;
    cityTax: number;
    total: number;
} {
    const stateTaxRate = 0.063;
    const countyTaxRate = 0.007;
    const cityTaxRate = 0.02;

    let subtotal = 0;
    let stateTax = 0;
    let countyTax = 0;
    let cityTax = 0;

    products.forEach(product => {
        subtotal += product.price;

        if (product.tax_category !== 'g') { // Not groceries
            stateTax += calculateTax(product.price, stateTaxRate);
            countyTax += calculateTax(product.price, countyTaxRate);
        }
        cityTax += calculateTax(product.price, cityTaxRate);
    });

    const total = subtotal + stateTax + countyTax + cityTax;

    return {
        subtotal,
        stateTax,
        countyTax,
        cityTax,
        total,
    };
}