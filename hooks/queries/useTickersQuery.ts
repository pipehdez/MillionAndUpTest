import axios from "axios";
import { useQuery } from "react-query";

import { endpoints, queryKeys } from "../../constants";
import { Crypto } from "../../types/crypto";

/**
 * Fetches a list of crypto tickers from the API.
 * @param start - The starting index of the tickers to fetch.
 * @param limit - The maximum number of tickers to fetch.
 * @returns A Promise that resolves to an array of Crypto objects.
 */
const fetchTickers = async (
  start: number,
  limit: number
): Promise<Crypto[]> => {
  const response = await axios.get(
    `${endpoints.tickers}?start=${start}&limit=${limit}`
  );

  const data: Crypto[] = response.data.data;
  return data;
};

/**
 * A custom React Query hook that fetches a list of crypto tickers.
 * @param start - The starting index of the tickers to fetch.
 * @param limit - The maximum number of tickers to fetch.
 * @returns The result of the query, containing the data and status.
 */
export const useTickersQuery = (start: number, limit: number) =>
  useQuery(queryKeys.tickers, () => fetchTickers(start, limit));
