import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ProductRow = props => {
  return (
    <View style={styles.productRowContainer}>
      <Text style={styles.productRowText}>{props.item}</Text>
      <Text style={styles.productRowText}>{props.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  productRowContainer: {
    flexDirection: "row",
    margin: 5,
    borderWidth: 2,
    borderColor: "red",
    justifyContent: "flex-start"
  },
  productRowText: {
    fontSize: 18,
    marginRight: 50,
    marginLeft: 40
  }
});

export default ProductRow;
