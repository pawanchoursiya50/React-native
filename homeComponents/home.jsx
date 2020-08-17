import "react-native-gesture-handler";

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Constants from "expo-constants";

import Search from "./searchResto";
import Recommended from "./recommendation";
import NearYou from "./NearYou";
import PicksForYou from "./picksForYou";
import ShowCuisines from "./showCuisines";

const Tab = createBottomTabNavigator();

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.loaction_login}>
              <View style={styles.map}>
                <Image
                  source={require("../images/userLocation.png")}
                  style={styles.loaction_login_img}
                />
                <Text style={styles.location}>You are at...</Text>
              </View>

              <View style={styles.userLogin}>
                <Image
                  source={require("../images/userProfile.png")}
                  style={styles.loaction_login_img}
                />
              </View>
            </View>

            <View>
              <Search />
            </View>
            {/* <ScrollView horizontal> */}
            <View style={{ /*flexDirection: "row",*/ marginTop: 10 }}>
              <Recommended />

              <PicksForYou />

              <ShowCuisines />

              <NearYou />
            </View>
            {/* </ScrollView> */}
          </View>
        </ScrollView>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 3,
    marginHorizontal: 3,
    backgroundColor: "white",
  },

  loaction_login: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    // paddingBottom: 1,
    borderColor: "black",
    // borderWidth: 1,
    position: "relative",
  },
  loaction_login_img: {
    height: 40,
    width: 40,
    resizeMode: "contain",
  },
  map: {
    flex: 8,
    flexDirection: "row",
    alignItems: "center",
  },

  location: {
    flexWrap: "wrap",
    fontSize: 16,
    marginLeft: 5,
    height: null,
    width: null,
  },

  userLogin: {
    flex: 2,
    alignItems: "center",
  },
});
