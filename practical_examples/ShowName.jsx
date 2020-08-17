import React, { Component } from "react";
import { View, Text } from "react-native";

export default class ShowName extends Component {
  render() {
    return (
      <View>
        <Text>your first name is {this.props.firstName}</Text>
        <Text>your last name is {this.props.lastName}</Text>
      </View>
    );
  }
}
