import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";

export default class Search extends Component {
  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Search your restaurants"
        onChangeText={this.updateSearch}
        value={search}
        lightTheme="light"
        round={true}
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={StyleSheet.inputStyle}
        style={StyleSheet.searchStyle}
      />
    );
  }
}

const styles = StyleSheet.create({
  searchStyle: {},

  containerStyle: {
    padding: 0,
    marginTop: 18,
    marginHorizontal: 10,
    borderRadius: 13,
  },

  inputContainerStyle: {
    backgroundColor: "white",
  },

  inputStyle: {
    // color: "blue",
  },

  inputStyle: {},
});
