import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ProductTable = props => {
  return (
    <View style={styles.productTableContainer}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.productTableHeader}>Name</Text>
        <Text style={styles.productTableHeader}>Price</Text>
      </View>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  productTableContainer: {
    // flexDirection: "row",
    margin: 5,
    borderWidth: 2,
    borderColor: "green",
    height: "85%",
    justifyContent: "flex-start",
    alignContent: "center"
  },
  productTableHeader: {
    fontWeight: "bold",
    fontSize: 20,
    marginRight: 50,
    marginLeft: 40
  }
});

export default ProductTable;
