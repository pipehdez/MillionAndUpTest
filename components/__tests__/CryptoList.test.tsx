import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CryptoList from "../CryptoList";
import { formatPrice } from "../../utils/formatPrice";

// Datos de prueba
const mockCryptoData = [
  {
    csupply: "19470946.00",
    id: "90",
    market_cap_usd: "501529283917.64",
    msupply: "21000000",
    name: "Bitcoin",
    nameid: "bitcoin",
    percent_change_1h: "-0.07",
    percent_change_24h: "-0.22",
    percent_change_7d: "-6.01",
    price_btc: "1.00",
    price_usd: "25757.83",
    rank: 1,
    symbol: "BTC",
    tsupply: "19470946",
    volume24: 8983114536.306484,
    volume24a: 7464340594.497039,
  },
  {
    csupply: "122375302.00",
    id: "80",
    market_cap_usd: "199781203752.37",
    msupply: "",
    name: "Ethereum",
    nameid: "ethereum",
    percent_change_1h: "-0.05",
    percent_change_24h: "-0.11",
    percent_change_7d: "-5.07",
    price_btc: "0.063386",
    price_usd: "1632.53",
    rank: 2,
    symbol: "ETH",
    tsupply: "122375302",
    volume24: 3799747246.3765135,
    volume24a: 3220443677.770592,
  },
];

describe("CryptoList", () => {
  it("debería renderizar correctamente y mostrar datos", () => {
    const { getByText, getAllByTestId } = render(
      <CryptoList
        //@ts-ignore
        data={mockCryptoData}
        isLoading={false}
        isError={false}
        error={null}
        onEndReached={() => { }}
        navigation={{ navigate: jest.fn() }}
      />
    );

    // Verifica que los nombres y precios de las criptomonedas se muestren correctamente
    const bitcoinName = getByText("Bitcoin");
    const ethereumName = getByText("Ethereum");
    const bitcoinPrice = getByText(formatPrice("25757.83"));
    const ethereumPrice = getByText(formatPrice("1632.53"));

    expect(bitcoinName).toBeTruthy();
    expect(ethereumName).toBeTruthy();
    expect(bitcoinPrice).toBeTruthy();
    expect(ethereumPrice).toBeTruthy();

    // Verifica que los porcentajes de cambio se muestren correctamente
    const bitcoinPercentage = getByText("-0.07%");
    const ethereumPercentage = getByText("-0.05%");

    expect(bitcoinPercentage).toBeTruthy();
    expect(ethereumPercentage).toBeTruthy();

    // Verifica que se rendericen los elementos de la lista
    const listItems = getAllByTestId("crypto-list-item");
    expect(listItems.length).toBe(2);
  });

  it("debería llamar a la función de navegación al hacer clic en un elemento", () => {
    const navigate = jest.fn();
    const { getByText } = render(
      <CryptoList
        //@ts-ignore
        data={mockCryptoData}
        isLoading={false}
        isError={false}
        error={null}
        onEndReached={() => { }}
        navigation={{ navigate }}
        isRefetching={false}
      />
    );

    // Simula hacer clic en el elemento "Bitcoin"
    const bitcoinName = getByText("Bitcoin");
    fireEvent.press(bitcoinName);

    // Verifica que la función de navegación haya sido llamada con los datos correctos
    expect(navigate).toHaveBeenCalledWith("CryptoDetail", {
      crypto: mockCryptoData[0],
    });
  });
});
