import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  StatusBar,
} from "react-native";
import React, { useState } from "react";

const StatusBarDemo = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar hidden={show} />
      <Text style={styles.title}>Status Bar Demo</Text>
      <View style={styles.subContainer}>
        <TouchableHighlight style={styles.btn} onPress={() => setShow(!show)}>
          <Text style={styles.btnText}>Show/Hide Status Bar</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default StatusBarDemo;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
  },
  subContainer: {
    flex: 1,
    justifyContent: "center",
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
});
