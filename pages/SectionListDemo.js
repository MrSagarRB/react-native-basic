import { View, Text, StyleSheet, SectionList } from "react-native";
import React from "react";
import useData from "../data/userData.json";

const SectionListDemo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Section List Demo </Text>
      <SectionList
        sections={useData}
        renderItem={({ item }) => <Text style={styles.skills}>{item}</Text>}
        renderSectionHeader={({ section: { username } }) => (
          <Text style={styles.name}>{username}</Text>
        )}
      />
    </View>
  );
};

export default SectionListDemo;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  name: {
    fontSize: 24,
    color: "red",
    marginBottom: 10,
  },
  skills: {
    fontSize: 18,
    marginBottom: 10,
  },
});
