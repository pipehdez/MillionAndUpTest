import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { formatPrice } from "../utils/formatPrice";
import PercentageDisplay from "./PercentageDisplay";
import { ItemProps } from '../interfaces/ItemProps';

/**
 * Renders a single item component.
 * @param {ItemProps} props - The props object containing the item to be rendered.
 * @param {Item} props.item - The item to be rendered.
 * @returns {JSX.Element} - The JSX element representing the item component.
 */
const Item: React.FC<ItemProps> = ({ item }) => {
  const { name, symbol, price_usd, percent_change_1h } = item
  return (
    <View style={styles.item}>
      <View
        style={{
          alignItems: "flex-start",
        }}
      >
        <Text style={styles.name}>{name}</Text>
        <Text
          style={{
            color: "gray",
          }}
        >
          ({symbol})
        </Text>
      </View>
      <View
        style={{
          alignItems: "flex-end",
        }}
      >
        <Text> {formatPrice(price_usd)}</Text>
        <PercentageDisplay percent_change={percent_change_1h} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
})

export default Item