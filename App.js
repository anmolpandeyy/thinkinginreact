import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import SearchBar from "./Components/SearchBar/SearchBar";
import ProductTable from "./Components/ProductTable/ProductTable";
import ProductCategory from "./Components/ProductCategory/ProductCategory";
import ProductRow from "./Components/ProductRow/ProductRow";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar />
        <ProductTable>
          <ProductCategory text="Sporting Goods" />
          <ProductRow item="Football" price="$49.99" />
          <ProductRow item="Baseball" price="$9.99" />
          <ProductRow item="Basketball" price="$29.99" />
          <ProductCategory text="Electronics" />
          <ProductRow item="iPod Touch" price="$99.99" />
          <ProductRow item="iPhone 5s" price="$499.99" />
          <ProductRow item="Nexus 7" price="$199.99" />
        </ProductTable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FCFF"
  }
});

export default App;
