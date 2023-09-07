import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { SearchProps } from "../interfaces/SearchProps";

/**
 * Renders a search component with a text input to search for cryptos.
 * @param {Object} props - The component props.
 * @param {string} props.searchTerm - The current search term.
 * @param {function} props.setSearchTerm - The function to update the search term.
 * @returns {JSX.Element} - The rendered component.
 */
const Search: React.FC<SearchProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <View style={styles.container}>
      <TextInput
        testID="search-input"
        style={styles.input}
        placeholder="Search Cryptos"
        onChangeText={(text) => setSearchTerm(text)}
        value={searchTerm}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});

export default Search;
