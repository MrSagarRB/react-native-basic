import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Entypo from "react-native-vector-icons/Entypo";
import data from "../../data/leaderBoardData.json";

const Dashboard = (props) => {
  const [expand, setExpand] = useState(null);

  const handleExpand = (index) => {
    setExpand(index === expand ? null : index);
  };

  return (
    <View style={styles.main}>
      <View style={styles.searchContainer}>
        <Entypo name="magnifying-glass" size={26} />
        <TextInput placeholder="Search" />
      </View>
      <View style={styles.paginationContainer}>
        <Text>Incentive leaderboard</Text>
        <View style={styles.paginationBtn}>
          <Text>1-10</Text>
          <Button title="<" />
          <Button title=">" />
        </View>
      </View>
      <ScrollView>
        {data.map((item, index) => {
          return (
            <View style={styles.listContainer}>
              <TouchableOpacity onPress={() => handleExpand(index)}>
                <View style={styles.accordion}>
                  <Text>{item.employeeName}</Text>
                  <Text>btn</Text>
                </View>
              </TouchableOpacity>
              <Animatable.View
                style={[styles.collapsable, { height: expand ? 100 : 0 }]}
                animation={expand ? "fadeIn" : "fadeOut"}
                duration={300}
              >
                <Text>Expand</Text>
              </Animatable.View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

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
  accordion: {
    backgroundColor: "lightblue",
    height: 50,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "space-between",
  },
  collapsable: {
    backgroundColor: "lightblue",
    borderRadius: 8,
    marginTop: 10,
    padding: 10,
    marginBottom: 10,
  },
});

export default Dashboard;
