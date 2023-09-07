import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CryptoScreen from "../screens/CryptoScreen";
import CryptoDetailScreen from "../screens/CryptoDetailScreen";
import { Crypto } from "../types/crypto";

export type RootStackParamList = {
  CryptoScreen: any | undefined
  CryptoDetail: { crypto: Crypto }
};

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * Renders the navigation stack for the app.
 * @returns A React functional component.
 */

const Navigation: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="CryptoScreen">
      <Stack.Screen name="CryptoScreen" component={CryptoScreen} options={{ title: "Cryptos" }} />
      <Stack.Screen
        name="CryptoDetail"
        component={CryptoDetailScreen}
        options={({ route }) => ({ title: route.params.crypto.name })}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
