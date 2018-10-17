import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ProductCategory = props => {
  return (
    <View style={styles.productCategoryHeader}>
      <Text style={styles.productCategory}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  productCategoryHeader: {
    flexDirection: "row",
    margin: 5,
    borderWidth: 2,
    borderColor: "turquoise",
    justifyContent: "center"
  },
  productCategory: {
    fontWeight: "bold",
    fontSize: 20
    // marginRight: 50,
    // marginLeft: 50
  }
});

export default ProductCategory;
