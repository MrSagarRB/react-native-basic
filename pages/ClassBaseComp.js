import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { Component } from "react";
import DisplayText from "../components/DisplayText";

export class ClassBaseComp extends Component {
  constructor() {
    super();
    this.state = {
      myVariable: "initial value",
      textAreaValue: "Type Something in text box",
    };
  }
  handelTextChange(text) {
    this.setState({
      textAreaValue: text,
    });
  }

  handelClick() {
    this.setState({
      myVariable: "Hello World",
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Class Base Comp</Text>
        <TouchableOpacity style={styles.btn} onPress={() => this.handelClick()}>
          <Text style={styles.btnTitle}>Press Me</Text>
        </TouchableOpacity>
        <Text style={styles.result}>{this.state.myVariable}</Text>
        <TextInput
          onChangeText={(text) => this.handelTextChange(text)}
          style={styles.textInput}
          placeholder="Enter Text"
        />
        <Text style={styles.result}>{this.state.textAreaValue}</Text>
        <DisplayText text={this.state.textAreaValue} />
      </View>
    );
  }
}

export default ClassBaseComp;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  btn: {
    backgroundColor: "lightgreen",
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  btnTitle: {
    textAlign: "center",
    fontSize: 20,
  },
  result: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
    color: "blue",
  },
  textInput: {
    marginTop: 50,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 6,
  },
});
