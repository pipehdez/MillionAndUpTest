import React from "react";
import { Text } from "react-native";
import { PercentageDisplayProps } from "../interfaces/PercentageDisplayProps";

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
