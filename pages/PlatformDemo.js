import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  StatusBar,
  Platform,
} from "react-native";

const PlatformDemo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Platform Demo</Text>
      <Text style={styles.subTitle}>Your OS : {Platform.OS}</Text>
      <Text style={styles.subTitle}>{JSON.stringify(Platform)}</Text>

      <View style={styles.subContainer}>
        <TouchableHighlight onPress={() => alert("Hello")} style={styles.btn}>
          <Text style={styles.btnText}>Press Me</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default PlatformDemo;

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
