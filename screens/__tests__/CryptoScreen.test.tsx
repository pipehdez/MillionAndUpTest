import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react-native";
import CryptoScreen from "../CryptoScreen"; // Asegúrate de que la ruta sea correcta
import { useTickersQuery } from "../../hooks/queries/useTickersQuery"; // Importa la implementación de useTickersQuery

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

jest.mock("../../hooks/queries/useTickersQuery", () => ({
  useTickersQuery: jest.fn(),
}));

describe("CryptoScreen", () => {
  it("renders CryptoScreen correctly", async () => {
    const mockData = [
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
    ];

    // Mockear el uso de useTickersQuery con los datos simulados
    //@ts-ignore
    useTickersQuery.mockReturnValue({
      data: mockData,
      isLoading: false,
      isError: false,
      error: null,
      refetch: jest.fn(),
      isRefetching: false,
    });

    const { getByText, getByTestId } = render(
      <CryptoScreen navigation={{ navigate: jest.fn() }} />
    );

    await waitFor(() => {
      expect(getByText("Bitcoin")).toBeTruthy(); 
      // Realiza más expectativas según sea necesario
    });

    // Simular interacción de búsqueda
    const searchInput = getByTestId("search-input"); 
    fireEvent.changeText(searchInput, "Bitcoin"); 

    // Simular interacción de filtro
    const filterButtonHot = getByText("Hot");
    const filterButtonMC = getByText("Market Capitalization");
    const filterButtonPUSD = getByText("Price USD");

    fireEvent.press(filterButtonHot); // Presiona el botón de filtro Hot
    fireEvent.press(filterButtonMC); // Presiona el botón de filtro Market Capitalization
    fireEvent.press(filterButtonPUSD); // Presiona el botón de filtro Price USD

  });
});
