import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { QueryClient, QueryClientProvider } from "react-query"; // Importa QueryClient y QueryClientProvider
import { useTickersQuery } from "../useTickersQuery";
import { endpoints } from "../../../constants";
import axios from "axios";

jest.mock("axios");

describe("useTickersQuery", () => {
  it("fetches tickers with the correct parameters", async () => {
    const start = 0;
    const limit = 10;
    const tickers = [
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

    // Simula una respuesta exitosa de Axios
    // @ts-ignore
    axios.get.mockResolvedValueOnce({ data: { data: tickers } });

    // Crea un QueryClient y proporciona el QueryClientProvider
    const queryClient = new QueryClient();
    const wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result, waitFor } = renderHook(
      () => useTickersQuery(start, limit),
      {
        wrapper, // Usa el wrapper con QueryClientProvider
      }
    );

    // Espera a que la consulta se complete con éxito
    await waitFor(() => result.current.isSuccess, { timeout: 3000 });

    // Verifica que los datos coincidan y que se llamó a axios.get con los parámetros correctos
    expect(result.current.data).toEqual(tickers);
    expect(axios.get).toHaveBeenCalledWith(
      `${endpoints.tickers}?start=${start}&limit=${limit}`
    );
  });
});
