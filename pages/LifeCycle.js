import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import TimerComponent from "../components/TimerComponent";

const LifeCycle = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Life Cycle Method</Text>

      <TouchableOpacity onPress={() => setShow(!show)} style={styles.btn}>
        <Text style={styles.btnText}>{show ? "Show" : "Hide"}</Text>
      </TouchableOpacity>
      {!show && <TimerComponent />}
    </View>
  );
};

export default LifeCycle;

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
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 10,
  },
  btnText: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
