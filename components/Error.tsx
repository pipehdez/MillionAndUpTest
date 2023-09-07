import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Error: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Something went wrong</Text>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
