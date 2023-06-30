import React from "react";

import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
const Dashboard = (props) => {
  return (
    <View style={styles.main}>
      <View style={styles.searchContainer}>
        <Entypo name="magnifying-glass" size={26} />
        <TextInput placeholder="Search" />
      </View>
      <View style={styles.paginationContainer}>
        <Text>Incentive leaderboard </Text>
        <View style={styles.paginationBtn}>
          <Text> 1-10 </Text>
          <Button title="<" />
          <Button title=">" />
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  main: {
    padding: 18,
    flex: 1,
  },
  searchContainer: {
    backgroundColor: "#fff",
    borderRadius: 6,
    padding: 14,
    flexDirection: "row",
    gap: 10,
  },
  paginationContainer: {
    marginVertical: 20,
    borderRadius: 6,
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  paginationBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
});
