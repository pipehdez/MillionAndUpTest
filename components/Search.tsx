import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface SearchProps {
  searchTerm: string;
  setSearchTerm: (text: string) => void;
}

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
