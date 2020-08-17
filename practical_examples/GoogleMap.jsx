import React, { Component } from "react";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default class GoogleMap extends React.Component {
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
          latitude: 20.5937,
          longitude: 78.9629,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  androidSafeAreaView: {
    flex: 1,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "green",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    padding: 16,
    backgroundColor: "white",
  },
  boldText: {
    fontSize: 30,
    color: "red",
  },
});
