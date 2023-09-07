import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Definimos el tipo de objeto que representa una criptomoneda
export interface Crypto {
  id: string;
  name: string;
  symbol: string;
  price_usd: string;
  // Otros detalles de la criptomoneda
}

// Definimos la lista de parámetros de navegación para las pantallas de nuestra aplicación
export type RootStackParamList = {
  Home: undefined;
  CryptoDetail: { crypto: Crypto };
};

// Tipos específicos para RouteProp y NavigationProp
export type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;
export type CryptoDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  "CryptoDetail"
>;
export type NavigationProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
};
