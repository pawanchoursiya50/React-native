import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Cuisines from "./dynizCuisines";

class ShowCuisines extends Component {
  render() {
    return (
      <View style={{ marginVertical: 15 }}>
        <View style={styles.heading}>
          <Text style={{ fontSize: 19 }}>Popular Cuisines</Text>
          {/* <Text style={{ opacity: 0.7 }}>More</Text> */}
        </View>
        <View>
          <ScrollView horizontal>
            <View style={{ flexDirection: "row" }}>
              <Cuisines
                image={require("../images/cuisinesImages/north_indian.jpg")}
                name="North Indian"
              />
              <Cuisines
                image={require("../images/cuisinesImages/south_indian.jpg")}
                name="South Indian"
              />
              <Cuisines
                image={require("../images/cuisinesImages/chinese.jpg")}
                name="Chinese"
              />
              <Cuisines
                image={require("../images/cuisinesImages/fast_food.jpg")}
                name="Fast Food"
              />
              <Cuisines
                image={require("../images/cuisinesImages/continental.jpg")}
                name="Continental"
              />
              <Cuisines
                image={require("../images/cuisinesImages/multi_cuisine.jpg")}
                name="Multi-Cuisine"
              />
              <Cuisines
                image={require("../images/cuisinesImages/italian.jpg")}
                name="Italian"
              />
              <Cuisines
                image={require("../images/cuisinesImages/sea_food.jpg")}
                name="Sea Food"
              />
              <Cuisines
                image={require("../images/cuisinesImages/bakery.jpg")}
                name="Bakery"
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
  },

  restoStyle: {},
});

export default ShowCuisines;
