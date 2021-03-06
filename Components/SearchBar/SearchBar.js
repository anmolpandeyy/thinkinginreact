import React, { Component } from "react";
import { View, TextInput, StyleSheet, CheckBox, Text } from "react-native";

class SearchBar extends Component {
  render() {
    return (
      <View style={styles.searchBarContainer}>
        <TextInput
          onChange={this.props.textInputChangeHandler}
          style={styles.textInput}
          placeholder="Search..."
          value={this.props.filterText}
        />
        <View style={styles.checkBoxInRow}>
          <CheckBox
            value={this.props.inStockOnly}
            onValueChange={this.props.checkBoxHandler}
          />
          <Text style={{ fontSize: 20 }}>Only show products in stock</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: "#F5FCFF",
    justifyContent: "flex-start",
    borderColor: "blue",
    borderWidth: 2,
    margin: 5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 8,
    paddingBottom: 8
  },
  checkBoxInRow: {
    flexDirection: "row",
    alignItems: "center"
  },
  textInput: {
    width: "70%",
    height: 40,
    borderColor: "grey",
    borderWidth: 2,
    marginTop: 5
  }
});

export default SearchBar;
