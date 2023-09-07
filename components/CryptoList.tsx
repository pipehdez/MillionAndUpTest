import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Crypto } from "../types/crypto";
import Loading from "./Loading";
import Item from "./Item";
import { CryptoListProps } from "../interfaces/CryptoListProps";

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

  const _renderItem = (item: Crypto) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CryptoDetail", { crypto: item });
        }}
        testID="crypto-list-item"
      >
        {Item({item})}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => _renderItem(item)}
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
