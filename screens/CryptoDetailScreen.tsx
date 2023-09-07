/**
 * CryptoDetailScreen component displays detailed information about a cryptocurrency.
 * @param {CryptoDetailProps} route - The route object containing the crypto object.
 * @returns {JSX.Element} - A scrollable view containing the crypto's name, symbol, price, stats, and a card with additional information.
 */
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { formatPrice } from "../utils/formatPrice";
import CryptoStats from "../components/CryptoStats";
import { AntDesign } from "@expo/vector-icons";
import CryptoCard from "../components/CryptoCard";
import { CryptoDetailProps } from "../interfaces/CryptoDetailProps";

const CryptoDetailScreen: React.FC<CryptoDetailProps> = ({ route }) => {
  const { crypto } = route.params;
  const {
    name,
    symbol,
    price_usd,
    percent_change_1h,
  } = crypto;

  return (
    <ScrollView>
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
      </View>
      <CryptoStats data={crypto} />
      <CryptoCard data={crypto} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    margin: 10,
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
    gap: 5,
  },
  pricePercentage: {
    fontWeight: "500",
    fontSize: 14,
  },
});

export default CryptoDetailScreen;
