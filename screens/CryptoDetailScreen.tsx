import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RootStackParamList } from "../types/navigation"; // Asegúrate de importar tus tipos de navegación
import { RouteProp } from "@react-navigation/native";
import { formatPrice } from "../utils/formatPrice";
import CryptoStats from "../components/CryptoStats";
import PercentageDisplay from "../components/PercentageDisplay";
import { AntDesign } from "@expo/vector-icons";

type CryptoDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  "CryptoDetail"
>;

interface CryptoDetailProps {
  route: CryptoDetailScreenRouteProp | any;
}

const CryptoDetailScreen: React.FC<CryptoDetailProps> = ({ route }) => {
  const { crypto } = route.params;
  const {
    name,
    symbol,
    price_usd,
    percent_change_1h,
    percent_change_24h,
    percent_change_7d,
  } = crypto;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {name} ({symbol})
      </Text>
      <View style={styles.priceText}>
        <Text
          style={{
            color: "gray",
          }}
        >
          Price (USD): {formatPrice(price_usd)}
        </Text>
        {parseFloat(percent_change_1h)! < 0 ? (
          <AntDesign name="caretdown" size={12} color="red" />
        ) : (
          <AntDesign name="caretup" size={12} color="green" />
        )}
      </View>
      <CryptoStats data={crypto} />
      <View style={styles.percentChanges}>
        <Text style={styles.pricePercentage}>
          1 Hour Change:{" "}
          <PercentageDisplay percent_change={percent_change_1h} />{" "}
        </Text>
        <Text style={styles.pricePercentage}>
          24 Hour Change:{" "}
          <PercentageDisplay percent_change={percent_change_24h} />
        </Text>
        <Text style={styles.pricePercentage}>
          7 Day Change: <PercentageDisplay percent_change={percent_change_7d} />
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    margin: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  percentChanges: {
    marginTop: 16,
  },
  priceText: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 5,
  },
  pricePercentage: {
    fontWeight: "500",
    fontSize: 14,
  },
});

export default CryptoDetailScreen;
