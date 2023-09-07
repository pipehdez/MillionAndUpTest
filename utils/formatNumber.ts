/**
 * Formats a price string into a shortened, human-readable format.
 * @param price - The price to format, as a string.
 * @returns A formatted string representing the price in millions or billions of dollars (USD).
 */
export const formatNumber = (price: string) => {
    
    const priceMillions = parseInt(price) / 1000000;

    if (priceMillions > 1000) {
        return `${(priceMillions / 1000).toFixed(2)}B`
    }
    
    const formatter = priceMillions.toLocaleString("en-US", {
        minimumFractionDigits:2,
        maximumFractionDigits: 2,
        })

    return `${formatter}M`
};
  