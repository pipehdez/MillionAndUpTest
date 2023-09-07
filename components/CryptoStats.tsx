import React from "react";
import { LineChart } from "react-native-chart-kit";
import { Dimensions, StyleSheet, View } from "react-native";
import { CryptoStatsProps } from "../interfaces/CryptoStatsProps";

const CryptoStats: React.FC<CryptoStatsProps> = ({ data }) => {
  const { percent_change_1h, percent_change_24h, percent_change_7d } = data;

  // Datos para la gráfica de líneas
  const chartData = {
    labels: ["1h", "24h", "7d"],
    datasets: [
      {
        label: "Percent Change",
        data: [
          parseFloat(percent_change_1h),
          parseFloat(percent_change_24h),
          parseFloat(percent_change_7d),
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#c4c4c4",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    propsForDots: {
      r: "3",
      strokeWidth: "2",
      stroke: "#ffa726",
    },
  };

  return (
    <View style={styles.container}>
    <LineChart
      data={chartData}
      width={Dimensions.get("window").width * 0.9}
      height={200}
      chartConfig={chartConfig}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
  },
});

export default CryptoStats;
