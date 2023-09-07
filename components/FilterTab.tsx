import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native'
import React from 'react'
import { FilterTabProps } from '../interfaces/FilterTabProps'

const FilterTab: React.FC<FilterTabProps> = ({ filterData, filterBy }) => {
  return (
    <View style={styles.container}>
      {
        filterData.map(({ key, title, MyFunction }, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={MyFunction}
              style={{
                width: 'auto',
                borderRadius: 20,
                paddingHorizontal: 16,
                paddingVertical: 8,
                backgroundColor:
                  filterBy === key ? "lightgray" : "transparent",
              }}
            >
              <Text style={{ color: filterBy === key ? "#000" : "#c4c4c4", fontWeight: "700" }}>{title}</Text>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    gap: 10,
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: 10,
  },
})

export default FilterTab