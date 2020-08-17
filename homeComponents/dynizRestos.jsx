import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

class Restaurant extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <View style={styles.resto}>
          <Image
            source={this.props.image}
            style={{ width: 155, height: 150, resizeMode: "stretch" }}
          />
          <View style={styles.aboutResto}>
            <Text style={styles.name}>{this.props.name}</Text>
            <Text style={styles.location}>{this.props.location}</Text>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  resto: {
    marginHorizontal: 5,
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
    width: 155,
    height: 231,

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
    paddingTop: 10,
    paddingHorizontal: 10,
    height: 80,
    width: 155,
    backgroundColor: "white",
  },

  name: {
    // fontWeight: "bold",
    fontSize: 18,
  },

  location: {
    fontSize: 14,
    opacity: 0.5,
  },
});

export default Restaurant;
