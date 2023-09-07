import { Crypto } from "../types/crypto";

export interface CryptoStatsProps {
    data: {
      percent_change_1h: Crypto["percent_change_1h"];
      percent_change_24h: Crypto["percent_change_24h"];
      percent_change_7d: Crypto["percent_change_7d"];
    };
  }