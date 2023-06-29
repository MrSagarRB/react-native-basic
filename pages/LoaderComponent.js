import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { TouchableHighlight } from "react-native";

const LoaderComponent = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loader Component</Text>
      <TouchableHighlight onPress={() => setShow(!show)} style={styles.btn}>
        <Text style={styles.btnText}> {!show ? "Start" : "Stop"}</Text>
      </TouchableHighlight>
      <ActivityIndicator
        style={styles.ActivityIndicator}
        size={"large"}
        animating={show}
      />
    </View>
  );
};

export default LoaderComponent;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  btn: {
    marginVertical: 20,
    backgroundColor: "lightgreen",
    padding: 10,
    borderRadius: 10,
  },
  btnText: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  ActivityIndicator: {
    marginTop: 50,
  },
});
