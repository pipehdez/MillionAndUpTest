export const formatPrice = (price: string) => {
  // Convierte el precio a un número en punto flotante (float)
  const priceFloat = parseFloat(price);

  // Formatea el precio como moneda en dólares (USD)
  return priceFloat.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
