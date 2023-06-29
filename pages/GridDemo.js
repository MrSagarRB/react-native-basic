import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import users from "../data/users.json";

const GridDemo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GridDemo</Text>
      <ScrollView>
        <View style={styles.grid}>
          {users?.map((item) => {
            return (
              <View style={styles.item}>
                <Text style={{ fontSize: 16 }}> {item.name}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default GridDemo;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 40,
    textAlign: "center",
  },

  grid: {
    flex: "1",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  item: {
    backgroundColor: "lightblue",
    margin: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: 100,
    width: 100,
    padding: 10,
  },
});
