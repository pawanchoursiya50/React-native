import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Favorite extends Component {
  // state = {  }
  render() {
    return (
      <View style={styles.container}>
        <Text>You wil see all your favorite restaurants over here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Constants.statusBarHeight + 3,
    marginHorizontal: 3,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Favorite;
