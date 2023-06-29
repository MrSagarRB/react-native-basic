import { Text, View } from "react-native";
import React, { Component } from "react";

export class DisplayText extends Component {
  render() {
    return (
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontSize: 30, textAlign: "center" }}>
          Below text coming from Display Text Component
        </Text>
        <Text style={{ fontSize: 30, marginTop: 50, color: "orange" }}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}

export default DisplayText;
