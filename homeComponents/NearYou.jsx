import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Restaurant from "./dynizRestos";

class NearYou extends Component {
  state = {
    restaurants: [
      {
        image: require("../images/restaurantImages/resto8.jpg"),
        rate: 4.8,
        name: "resto1",
        location: "kamothe",
      },
      {
        image: require("../images/restaurantImages/resto7.jpg"),
        rate: 3.7,
        name: "resto2",
        location: "new panel",
      },
      {
        image: require("../images/restaurantImages/resto5.jpg"),
        rate: 4,
        name: "resto3",
        location: "nerul",
      },
      {
        image: require("../images/restaurantImages/resto4.jpg"),
        rate: 4.3,
        name: "resto4",
        location: "belapur",
      },
      {
        image: require("../images/restaurantImages/resto1.jpg"),
        rate: 3.9,
        name: "resto5",
        location: "juinagar",
      },
      {
        image: require("../images/restaurantImages/resto6.jpg"),
        rate: 4.1,
        name: "resto6",
        location: "kamothe",
      },
      {
        image: require("../images/restaurantImages/resto7.jpg"),
        rate: 4.5,
        name: "resto7",
        location: "panvel",
      },
    ],
  };

  renderRestaurant() {
    return this.state.restaurants.map((restaurant) => (
      <Restaurant
        image={restaurant.image}
        rate={restaurant.rate}
        name={restaurant.name}
        location={restaurant.location}
      />
    ));
  }
  render() {
    return (
      <View style={{ marginVertical: 5 }}>
        <View style={styles.heading}>
          <Text style={{ fontSize: 19 }}>Near you</Text>
          <Text style={{ opacity: 0.7 }}>More</Text>
        </View>
        <View>
          <ScrollView horizontal>
            <View style={styles.restoStyle}>{this.renderRestaurant()}</View>
          </ScrollView>
        </View>
        {/* </Card> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    // backgroundColor: "green",
    // flex: 1,
  },

  restoStyle: {
    flexDirection: "row",
  },
});

export default NearYou;
