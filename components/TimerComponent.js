import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

const TimerComponent = () => {
  const [count, setCount] = useState(0);

  const timer = setInterval(() => {
    setCount(count + 1);
    console.warn("interval" + count);
  }, 2000);

  useEffect(() => {
    console.warn("mount");
    return () => {
      console.warn("Unmount");
      clearInterval(timer);
    };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timer Component</Text>
      <Text style={styles.timer}>{count}</Text>
      <TouchableOpacity onPress={() => handelTimer()} style={styles.btn}>
        <Text style={styles.btnText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TimerComponent;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 200,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "lightyellow",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
  },
  timer: {
    textAlign: "center",
    fontSize: 50,
    marginTop: 30,
  },
});
