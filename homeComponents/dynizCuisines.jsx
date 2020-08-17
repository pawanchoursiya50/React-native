import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class Cuisines extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <View style={styles.cuisine}>
          <Image
            source={this.props.image}
            style={{ width: 165, height: 140, resizeMode: "stretch" }}
          />
          <View style={styles.aboutResto}>
            <Text style={styles.name}>{this.props.name}</Text>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  cuisine: {
    marginHorizontal: 6,
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
    width: 165,
    height: 191,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 10,
    elevation: 6,
  },

  aboutResto: {
    // paddingTop: 10,
    // paddingHorizontal: 10,
    height: 50,
    width: 165,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  name: {
    fontSize: 18,
  },

  location: {
    fontSize: 14,
    opacity: 0.5,
  },
});
