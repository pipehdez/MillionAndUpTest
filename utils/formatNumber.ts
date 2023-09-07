export const formatNumber = (price: string) => {
    
    // convierte a numero de punto flotante abreviado a millones
    const priceMillions = parseInt(price) / 1000000;

    //si tiene mas de 6 digitos, se abrevia a billones
    if (priceMillions > 1000) {
        return `${(priceMillions / 1000).toFixed(2)}B`
    }
    

    // Formatea el precio como moneda en dólares (USD)
    const formatter = priceMillions.toLocaleString("en-US", {
        minimumFractionDigits:2,
        maximumFractionDigits: 2,
        })

    return `${formatter}M`
  };
  