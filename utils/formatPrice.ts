/**
 * Formats a price string into a currency string with USD as the currency.
 * @param price - The price to format as a currency string.
 * @returns The formatted currency string.
 */
export const formatPrice = (price: string) => {
  
  const priceFloat = parseFloat(price);

  return priceFloat.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
