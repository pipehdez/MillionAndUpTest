import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Crypto } from "../types/crypto";
import { formatPrice } from "../utils/formatPrice";
import PercentageDisplay from "./PercentageDisplay";
import Loading from "./Loading";

interface CryptoListProps {
  data: Crypto[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: string | unknown;
  onEndReached: () => void;
  navigation: any;
}
const CryptoList: React.FC<CryptoListProps> = ({
  data,
  isLoading,
  isError,
  error,
  onEndReached,
  navigation,
}) => {
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    // @ts-ignore
    return <Text>Error: {error}</Text>;
  }

  const renderItem = (item: Crypto) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CryptoDetail", { crypto: item });
        }}
        testID="crypto-list-item"
      >
        <View style={styles.item}>
          <View
            style={{
              alignItems: "flex-start",
            }}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text
              style={{
                color: "gray",
              }}
            >
              ({item.symbol})
            </Text>
          </View>
          <View
            style={{
              alignItems: "flex-end",
            }}
          >
            <Text> {formatPrice(item.price_usd)}</Text>
            <PercentageDisplay percent_change={item.percent_change_1h} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderItem(item)}
        onEndReached={onEndReached}
        onEndReachedThreshold={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CryptoList;
