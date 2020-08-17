import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
// import { Card } from "react-native-elements";

import Restaurant from "./dynizRestos";

class Recommended extends Component {
  render() {
    return (
      // <Card>
      <View style={{ marginVertical: 15 }}>
        <View style={styles.heading}>
          <Text style={{ fontSize: 19 }}>Recommended to you</Text>
          <Text style={{ opacity: 0.7 }}>More</Text>
        </View>
        <View>
          <ScrollView horizontal>
            <View style={styles.restoStyle}>
              <Restaurant
                image={require("../images/restaurantImages/resto1.jpg")}
                name="resto1"
                location="panvel"
              />
              <Restaurant
                image={require("../images/restaurantImages/resto2.jpg")}
                name="resto2"
                location="panvel"
              />
              <Restaurant
                image={require("../images/restaurantImages/resto3.jpg")}
                name="resto3"
                location="kharghar"
              />
              <Restaurant
                image={require("../images/restaurantImages/resto4.jpg")}
                name="resto4"
                location="juinagar"
              />
              <Restaurant
                image={require("../images/restaurantImages/resto5.jpg")}
                name="resto5"
                location="kamothe"
              />
              <Restaurant
                image={require("../images/restaurantImages/resto6.jpg")}
                name="resto6"
                location="nerul"
              />
              <Restaurant
                image={require("../images/restaurantImages/resto7.jpg")}
                name="resto7"
                location="new panvel"
              />
            </View>
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

export default Recommended;
