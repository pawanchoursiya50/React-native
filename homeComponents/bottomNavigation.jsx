import "react-native-gesture-handler";

// import * as React from "react";
import React, { Component } from "react";
import { Button, View, Text, TouchableOpacity, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import App from "../App";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class ButtomNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="App"
          tabBarOptions={{
            activeTintColor: "#42f44b",
          }}
        >
          <Tab.Screen
            name="HomeStack"
            component={App}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="SettingsStack"
            component={App}
            options={{
              tabBarLabel: "Settings",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="settings"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
