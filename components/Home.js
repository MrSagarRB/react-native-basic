import { View, Text, Button } from "react-native";

export const Home = (props) => {
  const { id, password } = props.route.params;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>Welcome, {id} !</Text>
      <Button
        title="Go to Logout"
        onPress={() => props.navigation.navigate("Logout")}
      />
    </View>
  );
};
