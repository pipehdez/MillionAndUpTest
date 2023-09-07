import axios from "axios";
import { useQuery } from "react-query";

import { endpoints, queryKeys } from "../../constants";
import { Crypto } from "../../types/crypto";

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

export const useTickersQuery = (start: number, limit: number) =>
  useQuery(queryKeys.tickers, () => fetchTickers(start, limit));
