import React, { Component } from "react";
import ShowName from "./ShowName";
import {
  Text,
  View,
  SafeAreaView,
  Platform,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

//import all the components we are going to use.
export default class Examples extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     varx: 0,
  //     vary: 100,
  //   };

  //   setInterval(() => {
  //     this.setState({ varx: this.state.varx + 1, vary: this.state.vary - 1 });
  //   }, 500);
  // }

  render() {
    return (
      <SafeAreaView style={styles.androidSafeAreaView}>
        <ScrollView>
          <View style={{ flex: 1, paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 20 }}>
              Example of SafeArea in Recat Native
            </Text>
            <Text style={{ fontSize: 20 }}>
              In publishing and graphic design, lorem ipsum is a placeholder
              text commonly used to demonstrate the visual... please add more
              content..
            </Text>
            <View>
              <Image
                source={{
                  uri:
                    "https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png",
                }}
                style={{ width: 400, height: 400 }}
              />
              <ScrollView horizontal>
                <Image
                  source={require("./friend.jpg")}
                  style={{ height: 800, width: 800 }}
                />
              </ScrollView>
              <Image
                style={{ width: 66, height: 58 }}
                source={{
                  uri:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
                }}
              />
            </View>
            <View>
              <Button color="red" title="click here!" />
            </View>
            <ShowName firstName="pawan" lastName="choursiya" />
          </View>
        </ScrollView>
      </SafeAreaView>
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
