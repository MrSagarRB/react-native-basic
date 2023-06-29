import { Text, View, StyleSheet, FlatList } from "react-native";
import users from "../data/users.json";

const FlatListDemo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flat List Demo</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View style={styles.box}>
            <Text style={styles.id}>{item.id}</Text>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  item: {
    fontSize: 24,
  },
  id: { fontSize: 24, marginRight: 10 },
  box: {
    backgroundColor: "lightblue",
    marginTop: 10,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default FlatListDemo;
