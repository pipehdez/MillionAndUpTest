import { Crypto } from "../types/crypto";

export interface CryptoListProps {
    data: Crypto[] | undefined;
    isLoading: boolean;
    isError: boolean;
    error: string | unknown;
    onEndReached: () => void;
    navigation: any;
  }