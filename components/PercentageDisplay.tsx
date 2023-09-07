import React from "react";
import { Text, View } from "react-native";

interface PercentageDisplayProps {
  percent_change: string;
}

const PercentageDisplay: React.FC<PercentageDisplayProps> = ({
  percent_change,
}) => {
  return (
    <Text
      style={{
        color: parseFloat(percent_change)! < 0 ? "red" : "green",
      }}
    >
      {percent_change}%
    </Text>
  );
};

export default PercentageDisplay;
