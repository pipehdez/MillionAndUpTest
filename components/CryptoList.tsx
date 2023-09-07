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

/**
 * Renders a list of cryptocurrencies.
 * @param {CryptoListProps} props - The props object.
 * @param {Crypto[]} props.data - The array of cryptocurrencies to be rendered.
 * @param {boolean} props.isLoading - A boolean indicating if the data is being loaded.
 * @param {boolean} props.isError - A boolean indicating if there was an error while fetching the data.
 * @param {string} props.error - The error message to be displayed in case of an error.
 * @param {function} props.onEndReached - A function to be called when the end of the list is reached.
 * @param {object} props.navigation - The navigation object from React Navigation.
 * @returns {JSX.Element} - A React component that renders a list of cryptocurrencies.
 */
const CryptoList: React.FC<CryptoListProps> = ({
  data,
  isLoading,
  isError,
  error,
  onEndReached,
  navigation,
}) => {
  /**
   * Renders the loading component if isLoading is true.
   * @returns {JSX.Element} - A React component that renders a loading indicator.
   */
  if (isLoading) {
    return <Loading />;
  }

  /**
   * Renders the error message if isError is true.
   * @returns {JSX.Element} - A React component that renders an error message.
   */
  if (isError) {
    // @ts-ignore
    return <Text>Error: {error}</Text>;
  }

  /**
   * Renders a single item in the list.
   * @param {Crypto} item - The cryptocurrency to be rendered.
   * @returns {JSX.Element} - A React component that renders a single item in the list.
   */
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
